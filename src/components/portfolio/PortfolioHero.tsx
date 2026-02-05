import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Zap, Target, Bot } from 'lucide-react';
import gauravHero from '@/assets/gaurav-hero.png';
 
 export const PortfolioHero = () => {
   const scrollToWork = () => {
    document.getElementById('metrics-showcase')?.scrollIntoView({ behavior: 'smooth' });
   };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/8533990352?text=Hi%20Gaurav%2C%20I%20want%20to%20work%20with%20you', '_blank');
  };
 
   return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-primary">
       {/* Decorative background elements */}
       <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
       <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
 
       <div className="container-narrow mx-auto relative z-10">
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
           {/* Left Content */}
           <div className="space-y-6 animate-fade-in-up">
             <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 text-sm">
               <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
               <span className="text-primary-foreground">Performance Marketing Expert</span>
             </div>
 
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold leading-snug text-primary-foreground">
              Hi, I'm Gaurav Sharma —{' '}
              <span className="text-accent">Performance Marketer</span>{' '}
              & Funnel Strategist Who Drives{' '}
               <span className="text-accent">Consistent Sales</span>
             </h1>
 
             <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl">
               I help brands, coaches, and marketers scale profitably using data-driven funnels, ads, and AI-powered workflows.
             </p>
 
             <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="hero" 
                size="lg" 
                type="button"
                onClick={handleWhatsAppClick}
                className="text-primary"
              >
                Work With Me
                 <ArrowRight className="ml-2" />
               </Button>
               <Button
                 variant="outline"
                 size="lg"
                 type="button"
                 onClick={scrollToWork}
                className="border-primary-foreground/30 text-primary bg-primary-foreground hover:bg-primary-foreground/80 hover:text-primary"
               >
                 View My Work
               </Button>
             </div>
           </div>
 
          {/* Right Visual - Profile Image */}
           <div className="hidden lg:block animate-fade-in-up animation-delay-200">
             <div className="relative">
              {/* Profile Image */}
              <div className="relative aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-foreground/20">
                <img
                  src={gauravHero}
                  alt="Gaurav Sharma - Performance Marketing Expert"
                  className="w-full h-full object-cover"
                />
               </div>
 
               {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-float flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                7+ Years
               </div>
              <div className="absolute -bottom-4 -left-4 bg-card text-foreground px-4 py-2 rounded-lg text-sm shadow-lg border border-border animate-float animation-delay-200 flex items-center gap-2">
                <Target className="w-4 h-4 text-accent" />
                 <span className="text-accent font-bold">+340%</span> Revenue
               </div>
              <div className="absolute top-1/2 -right-6 bg-card text-foreground px-4 py-2 rounded-lg text-sm shadow-lg border border-border animate-float animation-delay-300 flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-accent font-bold">₹5 Cr+</span> Ad Spend
              </div>
              <div className="absolute bottom-1/4 -left-6 bg-card text-foreground px-4 py-2 rounded-lg text-sm shadow-lg border border-border animate-float animation-delay-100 flex items-center gap-2">
                <Bot className="w-4 h-4 text-accent" />
               <span className="text-accent font-bold">500+</span> Campaigns
              </div>
             </div>
           </div>
 
           {/* Mobile Visual */}
           <div className="lg:hidden">
            <div className="relative aspect-[3/4] max-w-xs mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-primary-foreground/20">
              <img
                src={gauravHero}
                alt="Gaurav Sharma - Performance Marketing Expert"
                className="w-full h-full object-cover"
              />
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };