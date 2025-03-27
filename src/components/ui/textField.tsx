'use client';

import { cn } from '@/lib/utils';
import { HTMLProps, forwardRef, ChangeEvent } from 'react';

type TextFieldProps = {
  placeholder?: string;
  error?: string;
  className?: string;
  label?: string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  numeric?: boolean;
  autoComplete?: string;
  dataTestId?: string;
  dataCustom?: Record<string, string>;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
} & HTMLProps<HTMLInputElement>;

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      placeholder,
      error,
      className,
      label,
      name,
      required,
      disabled,
      numeric,
      autoComplete,
      dataTestId,
      dataCustom,
      value = '',
      onChange,
      ...props
    },
    ref,
  ) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      if (numeric) {
        const regex = /^[+\d]*$/;
        if (!regex.test(inputValue)) return;
      }
      if (onChange) onChange(e);
    };

    return (
      <div className={cn('flex w-full flex-col', className)}>
        {label && (
          <label
            htmlFor={name}
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}
        <input
          {...props}
          ref={ref}
          id={name}
          name={name}
          type="text"
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          autoComplete={autoComplete}
          value={value}
          onChange={handleChange}
          className={cn(
            'shadow-main h-12 w-full shrink-0 grow rounded-xl bg-white px-4 text-gray-900',
            disabled ? 'cursor-not-allowed bg-gray-100' : '',
            error
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:ring-blue-500',
            numeric ? 'dir-ltr text-end' : '',
          )}
        />
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

TextField.displayName = 'TextField';

export default TextField;
