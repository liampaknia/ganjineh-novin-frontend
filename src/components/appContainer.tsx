import { cn } from '@/lib/cn';
import React, { ComponentProps, FC } from 'react';

const AppContainer: FC<ComponentProps<'div'>> = ({ children, ...props }) => {
  console.log(props.className, 'app-container');
  console.log(cn(props.className, 'app-container'));

  return (
    <div
      {...props}
      className={cn(props.className, 'app-container', 'h-screen')}
    >
      {children}
    </div>
  );
};

export default AppContainer;
