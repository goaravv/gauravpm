 import { TrendingUp, Rocket, Target, Award } from 'lucide-react';
 
 const stats = [
   {
     icon: TrendingUp,
     value: '₹5 Cr+',
     label: 'Ad Spend Managed',
   },
   {
     icon: Rocket,
    value: '500+',
     label: 'Campaigns Executed',
   },
   {
     icon: Target,
     value: '150+',
     label: 'Funnels Built',
   },
   {
     icon: Award,
     value: '7+',
     label: 'Years Experience',
   },
 ];
 
 export const AuthorityStats = () => {
   return (
     <section className="bg-secondary py-12 md:py-16 border-y border-border">
       <div className="container-narrow mx-auto">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
           {stats.map((stat, index) => (
             <div
               key={index}
               className="flex flex-col items-center text-center p-4 md:p-6 bg-card rounded-xl shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow"
             >
               <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                 <stat.icon className="w-6 h-6 text-accent" />
               </div>
               <span className="text-2xl md:text-3xl font-heading font-bold text-accent">
                 {stat.value}
               </span>
               <span className="text-sm md:text-base text-muted-foreground mt-1">
                 {stat.label}
               </span>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };