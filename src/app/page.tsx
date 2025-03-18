import AppContainer from '@/components/appContainer';
import HeroSection from '@/components/heroSection';

export default function Home() {
  console.log();
  const foo = '#fff';

  return (
    <AppContainer className="bg-gray-50">
      <HeroSection />
      <h1>سلام به همه</h1>
    </AppContainer>
  );
}
