'use client';
import { useEffect, useState } from 'react';
import Portal from './globalPortal';
import { useLockBodyScroll } from '@uidotdev/usehooks';
import { cn } from '@/lib/cn';

interface ISidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: ISidebarProps) => {
  const [visible, setVisible] = useState(false);
  useLockBodyScroll();

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setVisible(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const closeSidebar = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <Portal>
      <div
        className={cn(
          'fixed inset-0 z-40 transition-all duration-300',
          visible
            ? 'visible w-[calc(100%-400px)] bg-black/30'
            : 'invisible w-full bg-black/0',
        )}
        onClick={closeSidebar}
      />
      <div
        className={cn(
          'fixed top-0 right-0 z-50 h-full w-[400px] bg-white/50 p-4 shadow-lg backdrop-blur-md transition-transform duration-300',
          visible ? 'translate-x-0' : 'translate-x-full',
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeSidebar}
          className="text-lg font-bold text-red-500"
        >
          ✕
        </button>
        <p className="mt-4">محتوای سایدبار...</p>
      </div>
    </Portal>
  );
};

export default Sidebar;
