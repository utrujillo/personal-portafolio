import Head from 'next/head';
import Navbar from '@/components/landing/Navbar/Navbar';
import Hero from '@/components/landing/Hero/Hero';
import About from '@/components/landing/About/About';
import Services from '@/components/landing/Services/Services';
import TechStack from '@/components/landing/TechStack/TechStack';
import PortfolioHighlights from '@/components/landing/PortfolioHighlights/PortfolioHighlights';
import Testimonials from '@/components/landing/Testimonials/Testimonials';
import Footer from '@/components/landing/Footer/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nombre Desarrollador | Arquitecto Full-Stack Senior</title>
        <meta name="description" content="Desarrollador Full-Stack y Móvil Senior con más de 10 años de experiencia en React, Vue, Rails, FastAPI, Flutter y React Native." />
      </Head>

      <Navbar />
      <Hero />
      <About />
      <Services />
      <TechStack />
      <PortfolioHighlights />
      <Testimonials />
      <Footer />
    </>
  );
}
