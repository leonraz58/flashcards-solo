import { ArrowLeft } from '@/assets/icons/arrow-left'
import { ArrowRight } from '@/assets/icons/arrow-right'
import { Select } from '@/components/ui/select'
import clsx from 'clsx'

import s from './pagination.module.scss'

import { Typography } from '../typography'
import { DOTS, usePagination } from './use-pagination'

type PaginationConditionals = {
  itemsPerPage: number
  onPerPageChange: (itemPerPage: string) => void
  perPageOptions: string[]
}

export type PaginationProps = {
  className?: string
  currentPage: number
  onChangePage: (page: number) => void
  siblingCount?: number
  totalCount: number
} & PaginationConditionals

export const Pagination = ({
  className,
  currentPage,
  onChangePage,
  onPerPageChange,
  //perPage,
  perPageOptions,
  siblingCount = 1,
  totalCount,
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    siblingCount,
    totalCount,
  })

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const selectOptions = perPageOptions.map(value => ({
    label: value,
    value,
  }))

  const onNextHandler = () => {
    onChangePage(currentPage + 1)
  }

  const onPreviousHandler = () => {
    onChangePage(currentPage - 1)
  }

  const changePageHandler = (pageNumber: number) => () => onChangePage(pageNumber)

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === paginationRange[paginationRange.length - 1]

  const classNames = {
    buttonLeft: clsx(s.item, { [s.disabled]: isFirstPage }, s.active),
    buttonRight: clsx(s.item, { [s.disabled]: isLastPage }, s.active),
    dots: clsx(s.item, s.dots),
    wrapper: clsx(s.wrapper, className),
  }

  return (
    <div className={classNames.wrapper}>
      <div className={s.wrapperButtons}>
        <button
          className={classNames.buttonLeft}
          disabled={isFirstPage}
          onClick={onPreviousHandler}
        >
          <ArrowLeft className={s.arrowLeft} />
        </button>
        {paginationRange.map((pageNumber, i) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return (
              <span className={classNames.dots} key={i}>
                &#8230;
              </span>
            )
          }

          // Render our Page Pills
          return (
            <button
              className={clsx(s.item, pageNumber === currentPage && s.selected, s.active)}
              key={i}
              onClick={changePageHandler(pageNumber)}
            >
              <Typography
                as={'span'}
                className={clsx(s.item, pageNumber === currentPage && s.selected)}
                variant={'body2'}
              >
                {pageNumber}
              </Typography>
            </button>
          )
        })}
        <button className={classNames.buttonRight} disabled={isLastPage} onClick={onNextHandler}>
          <ArrowRight className={s.arrowRight} />
        </button>
      </div>

      <Typography as={'div'} className={s.wrapperSelect} variant={'body2'}>
        Показать
        {<Select onValueChange={onPerPageChange} options={selectOptions} pagination />}
        на странице
      </Typography>
    </div>
  )
}
