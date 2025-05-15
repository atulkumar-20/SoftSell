import { ExtraSections } from '@/sections/ExtraSections';
import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';

const Home = () => {
  return (
    <main className="">
      <Header />
      <Hero />
      <ExtraSections />
    </main>
  );
};

export default Home;
