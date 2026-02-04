import { FormProvider, useFormContext } from '@/context/FormContext';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { TrustStrip } from '@/components/TrustStrip';
import { AboutSection } from '@/components/AboutSection';
import { LearningChecklist } from '@/components/LearningChecklist';
import { ImageGallery } from '@/components/ImageGallery';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { WhatYouGetSection } from '@/components/WhatYouGetSection';
import { TestimonialsImageSection } from '@/components/TestimonialsImageSection';
import { FAQSection } from '@/components/FAQSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { WebinarForm } from '@/components/WebinarForm';
import { StickyMobileCTA } from '@/components/StickyMobileCTA';
import { ThankYouPage } from '@/components/ThankYouPage';

const LandingPageContent = () => {
  const { isSubmitted } = useFormContext();

  if (isSubmitted) {
    return <ThankYouPage />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrustStrip />
        <AboutSection />
        <LearningChecklist />
        <ImageGallery />
        <TestimonialsSection />
        <WhatYouGetSection />
        <TestimonialsImageSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <WebinarForm />
      <StickyMobileCTA />
    </div>
  );
};

const Index = () => {
  return (
    <FormProvider>
      <LandingPageContent />
    </FormProvider>
  );
};

export default Index;
