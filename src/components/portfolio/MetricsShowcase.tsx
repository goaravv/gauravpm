import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, IndianRupee, Target, BarChart3 } from 'lucide-react';
import ecommerceSale1 from '@/assets/ecommerce-sale-1.png';
import ecommerceSale2 from '@/assets/ecommerce-sale-2.png';
import evCompanyLead from '@/assets/ev-company-lead.png';
import aiCompanyLead from '@/assets/ai-company-lead.png';
 import adMetrics4 from '@/assets/ad-metrics-4.png';
 import adMetrics6 from '@/assets/ad-metrics-6.png';
 import adMetrics7 from '@/assets/ad-metrics-7.png';
 import adMetrics8 from '@/assets/ad-metrics-8.png';
 import adMetrics9 from '@/assets/ad-metrics-9.png';
 import adMetrics10 from '@/assets/ad-metrics-10.png';
import adMetrics11 from '@/assets/ad-metrics-11.png';
import adMetrics12 from '@/assets/ad-metrics-12.png';
 
 const metrics = [
  { src: ecommerceSale1, alt: 'E-commerce ₹64L Revenue', label: '₹64L+ E-commerce Revenue' },
  { src: ecommerceSale2, alt: 'E-commerce ₹1 Cr Revenue', label: '₹1 Cr+ E-commerce Sales' },
  { src: evCompanyLead, alt: 'EV Company Leads', label: 'EV Company Lead Gen' },
  { src: aiCompanyLead, alt: 'AI Company Leads', label: 'AI Company Campaigns' },
  { src: adMetrics4, alt: 'Campaign metrics', label: 'Campaign Performance' },
  { src: adMetrics6, alt: 'Ad performance', label: 'Ad Results' },
  { src: adMetrics7, alt: 'ROAS data', label: 'ROAS Analysis' },
  { src: adMetrics8, alt: 'Conversion metrics', label: 'Conversions' },
  { src: adMetrics9, alt: 'Lead generation', label: 'Lead Gen' },
  { src: adMetrics10, alt: 'Sales data', label: 'Sales Data' },
  { src: adMetrics11, alt: '1 Cr+ Net Revenue', label: '₹1 Cr+ Revenue' },
  { src: adMetrics12, alt: '60 Lakh Net Revenue', label: '₹60L Revenue' },
];

const highlights = [
  { icon: IndianRupee, value: '₹1 Cr+', label: 'Net Revenue Generated' },
  { icon: TrendingUp, value: '9.2x', label: 'Average ROAS' },
  { icon: Target, value: '₹45', label: 'Lowest CPL Achieved' },
  { icon: BarChart3, value: '60L+', label: 'Monthly Ad Revenue' },
 ];
 
 export const MetricsShowcase = () => {
   const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
 
   const scroll = (direction: 'left' | 'right') => {
     if (scrollRef.current) {
      const scrollAmount = 400;
       scrollRef.current.scrollBy({
         left: direction === 'left' ? -scrollAmount : scrollAmount,
         behavior: 'smooth',
       });
     }
   };
 
   return (
    <section className="section-padding bg-background">
       <div className="container-narrow mx-auto">
         <div className="text-center mb-8">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider block">
             Proof
           </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
             Proven Performance Metrics
           </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
             Real performance data across Meta & Google Ads
           </p>
         </div>
 
        {/* Highlight Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {highlights.map((stat, index) => (
            <div
              key={index}
              className="bg-primary rounded-xl p-5 text-center border border-border shadow-sm"
            >
              <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="text-2xl md:text-3xl font-bold text-primary-foreground">{stat.value}</p>
              <p className="text-primary-foreground/70 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Gallery Header with Controls */}
        {/* Campaign Screenshots Section with Background */}
        <div className="bg-secondary/50 rounded-2xl p-6 md:p-8 border border-border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">Campaign Screenshots</h3>
            <div className="flex gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
 
          {/* Horizontal scroll container */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[300px] md:w-[380px] snap-start cursor-pointer group"
                onClick={() => setSelectedImage(index)}
              >
                <div className="bg-card rounded-xl overflow-hidden shadow-md border border-border group-hover:border-accent/50 group-hover:shadow-lg transition-all">
                  <img
                    src={metric.src}
                    alt={metric.alt}
                    className="w-full h-auto"
                  />
                  <div className="p-3 bg-muted/50 border-t border-border">
                    <p className="text-sm font-medium text-foreground text-center">{metric.label}</p>
                  </div>
                </div>
               </div>
            ))}
          </div>
         </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <img
                src={metrics[selectedImage].src}
                alt={metrics[selectedImage].alt}
                className="w-full h-auto rounded-lg"
              />
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                <button
                  className="w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(selectedImage > 0 ? selectedImage - 1 : metrics.length - 1);
                  }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  className="w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(selectedImage < metrics.length - 1 ? selectedImage + 1 : 0);
                  }}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
       </div>
     </section>
   );
 };