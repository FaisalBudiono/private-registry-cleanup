import { ComponentPropsWithRef } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = ComponentPropsWithRef<'label'> & {
  isClickable?: boolean
}

export const Label = ({
  children,
  className,
  isClickable = false,
  ...props
}: Props) => (
  <label
    className={twMerge(
      'block text-sm font-medium leading-6 text-gray-900',
      isClickable ? 'cursor-pointer' : '',
      className,
    )}
    {...props}
  >
    {children}
  </label>
)
