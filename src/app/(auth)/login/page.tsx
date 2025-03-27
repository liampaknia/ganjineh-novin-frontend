import { cn } from '@/lib/cn';

const LoginPage = () => {
  return (
    <main
      className={cn(
        'flex h-screen w-full flex-col items-center justify-center gap-7',
      )}
    >
      <h1 className={cn('text-4xl font-semibold')}>Login page</h1>
    </main>
  );
};

export default LoginPage;
