import { ComponentPropsWithRef } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = ComponentPropsWithRef<'input'> & {
  prefix?: string
  suffix?: string
  prefixSuffixClassName?: string
  inputClassName?: string
}

export const InputText = ({
  prefix,
  suffix,
  className,
  prefixSuffixClassName,
  inputClassName,
  ...props
}: Props) => (
  <div
    className={twMerge(
      'flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-600',
      className,
    )}
  >
    {prefix && (
      <span
        className={twMerge(
          'flex select-none items-center pl-3 text-gray-500 sm:text-sm',
          prefixSuffixClassName,
        )}
      >
        {prefix}
      </span>
    )}
    <input
      className={twMerge(
        'flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6',
        inputClassName,
      )}
      {...props}
    />
    {suffix && (
      <span
        className={twMerge(
          'flex select-none items-center pr-3 text-gray-500 sm:text-sm',
          prefixSuffixClassName,
        )}
      >
        {suffix}
      </span>
    )}
  </div>
)
