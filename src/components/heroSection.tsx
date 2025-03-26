import { cn } from '@/lib/cn';
import AppHeader from './appHeader';
import PhotoFrame from './photoFrame';
import AppContainer from './appContainer';
import SearchBox from './searchBox';

const HeroSection = () => {
  return (
    <section
      className={cn(
        'from-primary-main to-hero-section-main relative h-[677] bg-radial',
      )}
    >
      <AppContainer className={cn('relative flex h-full flex-col')}>
        <AppHeader />
        <div className={cn('grow text-white')}>
          <div
            className={cn(
              'mx-auto flex h-full max-w-[1030px] items-center justify-between',
            )}
          >
            <SearchBox />
            <PhotoFrame />
          </div>
        </div>
      </AppContainer>
    </section>
  );
};

export default HeroSection;
