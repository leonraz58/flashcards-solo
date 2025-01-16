import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ArrowDown } from '@/assets/icons/arrow-down'
import { Typography } from '@/components/ui/typography'
import * as SelectRadix from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './select.module.scss'

type Option = {
  disabled?: boolean
  label: string
  value: string
}

export type SelectProps = {
  className?: string
  label?: string
  options: Option[]
  pagination?: boolean
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

export const Select = forwardRef<ElementRef<typeof SelectRadix.Root>, SelectProps>((props, ref) => {
  const { className, defaultValue, disabled, label, options, pagination, value, ...rest } = props

  const classNames = {
    content: clsx(pagination && s.paginationContent, s.content),
    label: clsx(s.label, disabled && s.disabled),
    trigger: clsx(pagination && s.paginationTrigger, s.trigger),
  }

  const itemsToChoose = options.map((option, idx) => (
    <SelectRadix.Item
      className={clsx(s.item, option.disabled && s.itemDisabled)}
      disabled={option.disabled}
      key={idx}
      value={option.value}
    >
      <SelectRadix.ItemText className={s.itemText}>{option.label}</SelectRadix.ItemText>
    </SelectRadix.Item>
  ))

  return (
    <div className={clsx(s.wrapper, className)}>
      {label && (
        <Typography as={'span'} className={classNames.label} variant={'body2'}>
          {label}
        </Typography>
      )}
      <SelectRadix.Root
        defaultValue={defaultValue ?? options[0].value}
        disabled={disabled}
        value={value}
        {...rest}
      >
        <SelectRadix.Trigger className={classNames.trigger} ref={ref}>
          <SelectRadix.Value className={s.value} />
          <SelectRadix.Icon>
            <ArrowDown className={s.icon} />
          </SelectRadix.Icon>
        </SelectRadix.Trigger>

        <SelectRadix.Portal>
          <SelectRadix.Content className={classNames.content} position={'popper'}>
            <SelectRadix.Viewport className={s.viewport}>
              <SelectRadix.Group className={s.group}>{itemsToChoose}</SelectRadix.Group>
            </SelectRadix.Viewport>
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    </div>
  )
})
