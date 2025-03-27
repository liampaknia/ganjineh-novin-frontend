'use client';
import { cn } from '@/lib/cn';
import React, { ComponentProps, FC, ReactNode } from 'react';
import Logo from '../logo';
type Props = {
  children: ReactNode;
} & ComponentProps<'div'>;

const AuthModalContainer: FC<Props> = ({ children, ...props }) => {
  return (
    <div
      className={cn(
        'fixed inset-0 z-20 flex items-center justify-center bg-black/25',
        props.className,
      )}
      {...props}
    >
      <div
        className={cn(
          'bg-surface flex min-h-[500px] w-full max-w-md flex-col rounded-lg p-8 shadow-lg',
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={cn('mb-2 flex justify-center bg-gray-100')}>
          <Logo />
        </div>
        <h1 className={cn('text-primary-main heading-4 mb-8 text-center')}>
          سامانه گنجینه‌ی نوین ایرانیان
        </h1>{' '}
        {children}
      </div>
    </div>
  );
};

export default AuthModalContainer;
