 import { FormProvider, useFormContext } from '@/context/FormContext';
 import { Header } from '@/components/Header';
 import { HeroSection } from '@/components/HeroSection';
 import { TrustStrip } from '@/components/TrustStrip';
 import { AboutSection } from '@/components/AboutSection';
 import { LearningChecklist } from '@/components/LearningChecklist';
 import { ImageGallery } from '@/components/ImageGallery';
 import { WhatYouGetSection } from '@/components/WhatYouGetSection';
 import { FAQSection } from '@/components/FAQSection';
 import { CTASection } from '@/components/CTASection';
 import { Footer } from '@/components/Footer';
 import { WebinarForm } from '@/components/WebinarForm';
 import { StickyMobileCTA } from '@/components/StickyMobileCTA';
 import { AdMetricsSection } from '@/components/AdMetricsSection';
 import { useNavigate } from 'react-router-dom';
 import { useEffect } from 'react';
 
 const WebinarContent = () => {
   const { isSubmitted } = useFormContext();
   const navigate = useNavigate();
 
   useEffect(() => {
     if (isSubmitted) {
       navigate('/thanks');
     }
   }, [isSubmitted, navigate]);
 
   return (
     <div className="min-h-screen">
       <Header />
       <main>
         <HeroSection />
         <TrustStrip />
         <AdMetricsSection />
         <AboutSection />
         <LearningChecklist />
         <ImageGallery />
         <WhatYouGetSection />
         <FAQSection />
         <CTASection />
       </main>
       <Footer />
       <WebinarForm />
       <StickyMobileCTA />
     </div>
   );
 };
 
 const Webinar = () => {
   return (
     <FormProvider>
       <WebinarContent />
     </FormProvider>
   );
 };
 
 export default Webinar;