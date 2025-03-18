import { cn } from '@/lib/cn';
import React from 'react';

const SplitButton = () => {
  return (
    <div
      className={cn(
        'h-max w-max overflow-hidden rounded-xl border border-black',
      )}
    >
      <button className={cn('cursor-pointer p-1 px-4 hover:bg-gray-50')}>
        ثبت نام
      </button>
      <button
        className={cn(
          'cursor-pointer border-l border-l-black p-1 px-4 hover:bg-gray-50',
        )}
      >
        ورود
      </button>
    </div>
  );
};

export default SplitButton;
