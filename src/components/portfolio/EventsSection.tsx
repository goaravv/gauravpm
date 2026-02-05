 import eventImage1 from '@/assets/event-1.jpg';
 import eventImage2 from '@/assets/event-2.png';
 import eventImage3 from '@/assets/event-3.png';
 import eventImage4 from '@/assets/event-4.png';
 import eventImage5 from '@/assets/event-5.png';
 import eventImage6 from '@/assets/event-6.png';
 
 const events = [
   { src: eventImage1, alt: 'Conference speaking' },
   { src: eventImage2, alt: 'Workshop session' },
   { src: eventImage3, alt: 'Industry event' },
   { src: eventImage4, alt: 'Networking event' },
   { src: eventImage5, alt: 'Training session' },
   { src: eventImage6, alt: 'Marketing summit' },
 ];
 
 export const EventsSection = () => {
   return (
     <section className="section-padding bg-background">
       <div className="container-narrow mx-auto">
         <div className="text-center mb-12">
           <span className="text-accent font-semibold text-sm uppercase tracking-wider">
             Industry Presence
           </span>
           <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
             Workshops, Events & Community
           </h2>
         </div>
 
         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
           {events.map((event, index) => (
             <div
               key={index}
               className="aspect-[4/3] rounded-xl overflow-hidden shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow"
             >
               <img
                 src={event.src}
                 alt={event.alt}
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
               />
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };