import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
 import reviewImage1 from '@/assets/review-1.png';
 import reviewImage2 from '@/assets/review-2.png';
 import reviewImage3 from '@/assets/review-3.png';
 import reviewImage4 from '@/assets/review-4.png';
 
 const textTestimonials = [
   {
     quote: 'Gaurav helped us achieve 7x ROAS on our Meta campaigns. His funnel strategy completely transformed our lead generation.',
     author: 'D2C Brand Founder',
     metric: '7x ROAS',
   },
   {
     quote: 'The webinar funnel Gaurav built generated ₹12L in sales in the first month. Incredible ROI.',
     author: 'Course Creator',
     metric: '₹12L Sales',
   },
   {
     quote: 'Our cost per lead dropped by 60% after implementing his retargeting strategy. Game changer.',
     author: 'Service Business Owner',
     metric: '60% Lower CPL',
   },
 ];
 
 const imageTestimonials = [
   { src: reviewImage1, alt: 'Client testimonial' },
   { src: reviewImage2, alt: 'Client testimonial' },
   { src: reviewImage3, alt: 'Client testimonial' },
   { src: reviewImage4, alt: 'Client testimonial' },
 ];
 
 export const PortfolioTestimonials = () => {
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
         <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider block">
             Results
           </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mt-3">
             What Clients Say
           </h2>
          <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto">
            Real feedback from real clients who've seen real results
          </p>
         </div>
 
         {/* Text Testimonials */}
         <div className="grid md:grid-cols-3 gap-6 mb-12">
           {textTestimonials.map((testimonial, index) => (
             <div
               key={index}
              className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all relative group"
             >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/20 group-hover:text-accent/40 transition-colors" />
              <div className="flex gap-1 mb-4 relative">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                 ))}
               </div>
              <p className="text-foreground mb-6 relative">"{testimonial.quote}"</p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-muted-foreground text-sm font-medium">{testimonial.author}</span>
                <span className="bg-accent/10 text-accent font-semibold text-sm px-3 py-1 rounded-full">{testimonial.metric}</span>
               </div>
             </div>
           ))}
         </div>
 
        {/* Image Testimonials - Carousel Style */}
        <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-primary-foreground">Screenshot Reviews</h3>
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
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {imageTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] md:w-[300px] snap-start"
              >
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-accent/30">
                  <img
                    src={testimonial.src}
                    alt={testimonial.alt}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
         </div>
       </div>
     </section>
   );
 };