import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from 'react'

import { CheckIcon } from '@/assets/icons/check-icon'
import { Typography } from '@/components/ui/typography'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import clsx from 'clsx'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  className?: string
  label?: string
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  ({ className, disabled, id, label, ...rest }, ref) => {
    const generatedId = useId()
    const finalId = id ?? generatedId

    return (
      <div className={clsx(s.wrapper, className)}>
        <CheckboxRadix.Root
          className={s.checkbox}
          disabled={disabled}
          id={finalId}
          ref={ref}
          {...rest}
        >
          <CheckboxRadix.Indicator className={s.indicator}>
            <CheckIcon />
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
        <Typography as={'label'} htmlFor={finalId} variant={'body2'}>
          {label}
        </Typography>
      </div>
    )
  }
)
