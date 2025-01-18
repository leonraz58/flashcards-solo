import { ComponentPropsWithoutRef } from 'react'

import * as SliderRadix from '@radix-ui/react-slider'

import s from './slider.module.scss'

import { Typography } from '../typography'

export type Props = {
  max?: number | undefined
  min?: number | undefined
  onValueChange?: (value: number[]) => void
  value: number[]
} & ComponentPropsWithoutRef<typeof SliderRadix.Root>

export const Slider = (props: Props) => {
  const { max = 100, min = 0, onValueChange, value, ...rest } = props

  return (
    <div className={s.wrapper}>
      <Typography as={'span'} className={s.value}>
        {value[0]}
      </Typography>
      <SliderRadix.Root
        className={s.root}
        max={max}
        min={min}
        minStepsBetweenThumbs={1}
        onValueChange={onValueChange}
        step={1}
        value={value}
        {...rest}
      >
        <SliderRadix.Track className={s.track}>
          <SliderRadix.Range className={s.range} />
        </SliderRadix.Track>
        <SliderRadix.Thumb aria-label={'Volume'} className={s.thumb} />
        <SliderRadix.Thumb aria-label={'Volume'} className={s.thumb} />
      </SliderRadix.Root>
      <Typography as={'span'} className={s.value}>
        {value[1]}
      </Typography>
    </div>
  )
}
