 import { Star } from 'lucide-react';
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
   return (
     <section className="section-padding bg-secondary">
       <div className="container-narrow mx-auto">
         <div className="text-center mb-12">
           <span className="text-accent font-semibold text-sm uppercase tracking-wider">
             Results
           </span>
           <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
             What Clients Say
           </h2>
         </div>
 
         {/* Text Testimonials */}
         <div className="grid md:grid-cols-3 gap-6 mb-12">
           {textTestimonials.map((testimonial, index) => (
             <div
               key={index}
               className="bg-card rounded-xl p-6 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow"
             >
               <div className="flex gap-1 mb-4">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                 ))}
               </div>
               <p className="text-foreground mb-4">"{testimonial.quote}"</p>
               <div className="flex items-center justify-between">
                 <span className="text-muted-foreground text-sm">{testimonial.author}</span>
                 <span className="text-accent font-semibold text-sm">{testimonial.metric}</span>
               </div>
             </div>
           ))}
         </div>
 
         {/* Image Testimonials */}
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {imageTestimonials.map((testimonial, index) => (
             <div
               key={index}
               className="rounded-xl overflow-hidden shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow"
             >
               <img
                 src={testimonial.src}
                 alt={testimonial.alt}
                 className="w-full h-full object-cover"
               />
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };