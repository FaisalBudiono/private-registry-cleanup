import { ComponentPropsWithRef } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = ComponentPropsWithRef<'button'>

export const Button = ({ className, children, ...props }: Props) => (
  <button
    className={twMerge(
      'rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
      className,
    )}
    {...props}
  >
    {children}
  </button>
)
