import { ComponentPropsWithoutRef, forwardRef, useId } from 'react'

import * as RadioGroupRadix from '@radix-ui/react-radio-group'
import clsx from 'clsx'

import s from './radio-group.module.scss'

type RadioItemProps = {
  label: string
} & ComponentPropsWithoutRef<typeof RadioGroupRadix.Item>

export type RadioGroupProps = {
  radioItems: RadioItemProps[]
} & ComponentPropsWithoutRef<typeof RadioGroupRadix.Root>

export const RadioGroup = forwardRef<HTMLButtonElement, RadioGroupProps>(
  (props: RadioGroupProps, ref) => {
    const { className, radioItems = [], ...restProps } = props
    const classNames = clsx(s.root, className)
    const generatedId = useId()

    const radioGroupItems = radioItems.map(item => {
      const finalId = generatedId + item.value
      const disabled = restProps.disabled || item.disabled

      return (
        <div className={clsx(s.itemWrapper, disabled && s.disabled)} key={item.value}>
          <div className={s.button}>
            <RadioGroupRadix.Item className={s.item} ref={ref} {...item} id={finalId}>
              <RadioGroupRadix.Indicator className={s.indicator} />
            </RadioGroupRadix.Item>
          </div>
          <label className={s.label} htmlFor={finalId}>
            {item.label}
          </label>
        </div>
      )
    })

    return (
      <RadioGroupRadix.Root className={classNames} {...restProps} tabIndex={1}>
        {radioGroupItems}
      </RadioGroupRadix.Root>
    )
  }
)
