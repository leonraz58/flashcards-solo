import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import Eye from '@/assets/icons/eye'
import EyeOff from '@/assets/icons/eye-off'
import Search from '@/assets/icons/search'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './input.module.scss'

export type InputProps = {
  errorMessage?: string
  label?: string
  onChangeValue?: (value: string) => void
  type?: 'password' | 'search' | 'text'
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, disabled, errorMessage, label, onChange, onChangeValue, type, ...restProps } =
    props

  const [showPassword, setShowPassword] = useState<boolean>(false)

  const inputType = type === 'password' && showPassword ? 'text' : type

  const switchShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const switchButtonForPassword = showPassword ? <Eye /> : <EyeOff />

  const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    onChangeValue?.(e.currentTarget.value)
  }

  const classNames = {
    box: s.box,
    hidePassword: s.hidePassword,
    input: clsx(s.defaultInput, className, errorMessage && s.withErr, type === 'search' && s.ident),
    inputContainer: s.inputContainer,
    label: s.label,
    searchIcon: s.searchIcon,
  }

  return (
    <div className={classNames.box}>
      {label && (
        <Typography as={'label'} className={classNames.label} variant={'body2'}>
          {label}
        </Typography>
      )}
      <div className={classNames.inputContainer}>
        <input
          className={classNames.input}
          disabled={disabled}
          onChange={onChangeValueHandler}
          ref={ref}
          type={inputType}
          {...restProps}
        />
        {type === 'password' && (
          <button className={classNames.hidePassword} onClick={switchShowPassword}>
            {switchButtonForPassword}
          </button>
        )}
        {type === 'search' && <button className={classNames.searchIcon}>{<Search />}</button>}
      </div>
      {errorMessage && (
        <Typography as={'span'} className={s.error} variant={'caption'}>
          {errorMessage}
        </Typography>
      )}
    </div>
  )
})
