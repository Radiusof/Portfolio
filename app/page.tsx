import Hero from '@/components/Hero';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { FaHome } from 'react-icons/fa';
import { PiProjectorScreenChartFill } from 'react-icons/pi';
import Grid from '@/components/Grid';

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: 'Home', link: '/', icon: <FaHome /> },
            {
              name: 'Projects',
              link: '/project',
              icon: <PiProjectorScreenChartFill />,
            },
          ]}
        />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
