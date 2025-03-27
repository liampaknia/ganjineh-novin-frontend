'use client';
import { AuthModalContainer } from '@/components';
import { useRouter } from 'next/navigation';

export default function page() {
  const router = useRouter();

  return (
    <AuthModalContainer onClick={() => router.back()}></AuthModalContainer>
  );
}
