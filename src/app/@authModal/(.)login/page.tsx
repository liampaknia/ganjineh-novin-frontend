'use client';
import { useRouter } from 'next/navigation';

export default function LoginModal() {
  const router = useRouter();
  console.log('LoginModal', LoginModal);

  return (
    <div
      className="fixed inset-0 z-20 flex items-center justify-center bg-black/25"
      onClick={() => router.back()}
    >
      <div
        className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="mb-4 rounded bg-red-500 p-2 text-white hover:bg-red-700"
          onClick={() => router.back()}
        >
          بستن
        </button>
        مودال لاگین
      </div>
    </div>
  );
}
