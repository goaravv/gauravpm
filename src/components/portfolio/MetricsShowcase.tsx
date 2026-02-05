 import { useRef } from 'react';
 import { ChevronLeft, ChevronRight } from 'lucide-react';
 import { Button } from '@/components/ui/button';
 import adMetrics4 from '@/assets/ad-metrics-4.png';
 import adMetrics6 from '@/assets/ad-metrics-6.png';
 import adMetrics7 from '@/assets/ad-metrics-7.png';
 import adMetrics8 from '@/assets/ad-metrics-8.png';
 import adMetrics9 from '@/assets/ad-metrics-9.png';
 import adMetrics10 from '@/assets/ad-metrics-10.png';
 
 const metrics = [
   { src: adMetrics4, alt: 'Campaign metrics' },
   { src: adMetrics6, alt: 'Ad performance' },
   { src: adMetrics7, alt: 'ROAS data' },
   { src: adMetrics8, alt: 'Conversion metrics' },
   { src: adMetrics9, alt: 'Lead generation' },
   { src: adMetrics10, alt: 'Sales data' },
 ];
 
 export const MetricsShowcase = () => {
   const scrollRef = useRef<HTMLDivElement>(null);
 
   const scroll = (direction: 'left' | 'right') => {
     if (scrollRef.current) {
       const scrollAmount = 320;
       scrollRef.current.scrollBy({
         left: direction === 'left' ? -scrollAmount : scrollAmount,
         behavior: 'smooth',
       });
     }
   };
 
   return (
     <section className="section-padding bg-primary">
       <div className="container-narrow mx-auto">
         <div className="text-center mb-8">
           <span className="text-accent font-semibold text-sm uppercase tracking-wider">
             Proof
           </span>
           <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mt-3">
             Proven Performance Metrics
           </h2>
           <p className="text-primary-foreground/70 mt-4">
             Real performance data across Meta & Google Ads
           </p>
         </div>
 
         {/* Carousel controls */}
         <div className="flex justify-end gap-2 mb-4">
           <Button
             variant="outline"
             size="icon"
             onClick={() => scroll('left')}
             className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
           >
             <ChevronLeft className="w-5 h-5" />
           </Button>
           <Button
             variant="outline"
             size="icon"
             onClick={() => scroll('right')}
             className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
           >
             <ChevronRight className="w-5 h-5" />
           </Button>
         </div>
 
         {/* Horizontal scroll container */}
         <div
           ref={scrollRef}
           className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
         >
           {metrics.map((metric, index) => (
             <div
               key={index}
               className="flex-shrink-0 w-[280px] md:w-[320px] snap-start"
             >
               <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-primary-foreground/10 hover:border-accent/50 transition-colors">
                 <img
                   src={metric.src}
                   alt={metric.alt}
                   className="w-full h-auto"
                 />
               </div>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };