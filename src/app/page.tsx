import AppContainer from '@/components/appContainer';
import HeroSection from '@/components/heroSection';
import { cn } from '@/lib/cn';

export default function Home() {
  console.log();
  const foo = '#fff';

  return (
    <div className="">
      <HeroSection />
      <AppContainer className={cn('bg-gray-50')}>
        <p>محتوای سایت</p>
      </AppContainer>
    </div>
  );
}
