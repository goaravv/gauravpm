 import { PortfolioHeader } from '@/components/portfolio/PortfolioHeader';
 import { PortfolioHero } from '@/components/portfolio/PortfolioHero';
 import { AuthorityStats } from '@/components/portfolio/AuthorityStats';
 import { PortfolioAbout } from '@/components/portfolio/PortfolioAbout';
 import { EcosystemSection } from '@/components/portfolio/EcosystemSection';
 import { FunnelShowcase } from '@/components/portfolio/FunnelShowcase';
 import { MetricsShowcase } from '@/components/portfolio/MetricsShowcase';
 import { EventsSection } from '@/components/portfolio/EventsSection';
 import { PortfolioTestimonials } from '@/components/portfolio/PortfolioTestimonials';
 import { AchievementsSection } from '@/components/portfolio/AchievementsSection';
 import { PortfolioFAQ } from '@/components/portfolio/PortfolioFAQ';
 import { PortfolioCTA } from '@/components/portfolio/PortfolioCTA';
 import { Footer } from '@/components/Footer';
 import { PortfolioStickyMobileCTA } from '@/components/portfolio/PortfolioStickyMobileCTA';
 
 const Index = () => {
   return (
     <div className="min-h-screen">
       <PortfolioHeader />
       <main>
         <PortfolioHero />
         <AuthorityStats />
         <PortfolioAbout />
         <EcosystemSection />
         <FunnelShowcase />
         <MetricsShowcase />
         <EventsSection />
         <PortfolioTestimonials />
         <AchievementsSection />
         <PortfolioFAQ />
         <PortfolioCTA />
       </main>
       <Footer />
       <PortfolioStickyMobileCTA />
     </div>
   );
 };

export default Index;
