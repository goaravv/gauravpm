 import { Button } from '@/components/ui/button';
 import { useNavigate } from 'react-router-dom';
 import { ArrowRight, TrendingUp, Zap, BarChart3, Target, Bot } from 'lucide-react';
 
 export const PortfolioHero = () => {
   const navigate = useNavigate();
 
   const scrollToWork = () => {
     document.getElementById('funnel-showcase')?.scrollIntoView({ behavior: 'smooth' });
   };
 
   return (
     <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-primary">
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
 
             <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-tight text-primary-foreground">
               Performance Marketing, Funnels & AI Systems That Drive{' '}
               <span className="text-accent">Consistent Sales</span>
             </h1>
 
             <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl">
               I help brands, coaches, and marketers scale profitably using data-driven funnels, ads, and AI-powered workflows.
             </p>
 
             <div className="flex flex-col sm:flex-row gap-4 pt-4">
               <Button variant="hero" size="lg" onClick={() => navigate('/webinar')}>
                 Join Webinar
                 <ArrowRight className="ml-2" />
               </Button>
               <Button
                 variant="outline"
                 size="lg"
                 onClick={scrollToWork}
                 className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
               >
                 View My Work
               </Button>
             </div>
           </div>
 
           {/* Right Visual - AI Dashboard Style */}
           <div className="hidden lg:block animate-fade-in-up animation-delay-200">
             <div className="relative">
               {/* Main dashboard card */}
               <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 space-y-4">
                 {/* Header */}
                 <div className="flex items-center gap-3 pb-4 border-b border-primary-foreground/10">
                   <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                     <BarChart3 className="w-5 h-5 text-accent" />
                   </div>
                   <div>
                     <p className="text-primary-foreground font-semibold">Performance Dashboard</p>
                     <p className="text-primary-foreground/60 text-sm">Real-time metrics</p>
                   </div>
                 </div>
 
                 {/* Mini cards grid */}
                 <div className="grid grid-cols-2 gap-3">
                   <div className="bg-primary-foreground/5 rounded-lg p-4 border border-primary-foreground/10">
                     <TrendingUp className="w-5 h-5 text-accent mb-2" />
                     <p className="text-primary-foreground/60 text-xs">ROAS</p>
                     <p className="text-primary-foreground font-bold text-xl">9.2x</p>
                   </div>
                   <div className="bg-primary-foreground/5 rounded-lg p-4 border border-primary-foreground/10">
                     <Target className="w-5 h-5 text-accent mb-2" />
                     <p className="text-primary-foreground/60 text-xs">Conversions</p>
                     <p className="text-primary-foreground font-bold text-xl">2.4K</p>
                   </div>
                   <div className="bg-primary-foreground/5 rounded-lg p-4 border border-primary-foreground/10">
                     <Zap className="w-5 h-5 text-accent mb-2" />
                     <p className="text-primary-foreground/60 text-xs">Lead Cost</p>
                     <p className="text-primary-foreground font-bold text-xl">₹45</p>
                   </div>
                   <div className="bg-primary-foreground/5 rounded-lg p-4 border border-primary-foreground/10">
                     <Bot className="w-5 h-5 text-accent mb-2" />
                     <p className="text-primary-foreground/60 text-xs">AI Workflows</p>
                     <p className="text-primary-foreground font-bold text-xl">12</p>
                   </div>
                 </div>
               </div>
 
               {/* Floating elements */}
               <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-float">
                 🚀 Live Results
               </div>
               <div className="absolute -bottom-4 -left-4 bg-card text-foreground px-4 py-2 rounded-lg text-sm shadow-lg border border-border animate-float animation-delay-200">
                 <span className="text-accent font-bold">+340%</span> Revenue
               </div>
             </div>
           </div>
 
           {/* Mobile Visual */}
           <div className="lg:hidden">
             <div className="grid grid-cols-2 gap-3">
               <div className="bg-primary-foreground/5 rounded-lg p-4 border border-primary-foreground/10">
                 <TrendingUp className="w-5 h-5 text-accent mb-2" />
                 <p className="text-primary-foreground/60 text-xs">ROAS</p>
                 <p className="text-primary-foreground font-bold text-xl">9.2x</p>
               </div>
               <div className="bg-primary-foreground/5 rounded-lg p-4 border border-primary-foreground/10">
                 <Target className="w-5 h-5 text-accent mb-2" />
                 <p className="text-primary-foreground/60 text-xs">Conversions</p>
                 <p className="text-primary-foreground font-bold text-xl">2.4K</p>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };