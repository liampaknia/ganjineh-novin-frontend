'use client';
import { cn } from '@/lib/cn';
import SplitButton from './splitButton';
import Logo from './logo';
import Sidebar from './sideBar';
import { useModalStore } from '@/store/modalStore';
import { memo, useEffect, useState } from 'react';

const AppHeader = () => {
  const { openModal, closeModal, setOpenModal } = useModalStore();
  const isSideBarOpen = openModal === 'sidebar';
  const handleOpenSideBar = () => {
    setOpenModal('sidebar');
  };
  return (
    <header
      className={cn(
        'relative flex justify-between overflow-hidden bg-red-200 py-10',
      )}
    >
      <SplitButton />
      <div
        className={cn(
          'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
        )}
      >
        <Logo />
      </div>
      <button
        onClick={handleOpenSideBar}
        className="rounded-md bg-blue-500 p-2 text-white"
      >
        باز کردن منو
      </button>
      {isSideBarOpen && <Sidebar isOpen={isSideBarOpen} onClose={closeModal} />}
    </header>
  );
};

export default memo(AppHeader);
