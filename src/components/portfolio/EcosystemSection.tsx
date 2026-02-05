 import { Megaphone, GitBranch, Video, Bot, RefreshCcw, LineChart } from 'lucide-react';
 
 const ecosystemItems = [
   {
     icon: Megaphone,
     title: 'Traffic Systems',
     description: 'Meta, Google, YouTube Ads',
   },
   {
     icon: GitBranch,
     title: 'Funnel Architecture',
     description: 'High-converting sales funnels',
   },
   {
     icon: Video,
     title: 'Webinar Funnels',
     description: 'Automated webinar systems',
   },
   {
     icon: Bot,
     title: 'AI Campaign Workflows',
     description: 'Automated optimization',
   },
   {
     icon: RefreshCcw,
     title: 'Retargeting Engines',
     description: 'Multi-touch sequences',
   },
   {
     icon: LineChart,
     title: 'Conversion Optimization',
     description: 'Data-driven improvements',
   },
 ];
 
 export const EcosystemSection = () => {
   return (
     <section className="section-padding bg-primary">
       <div className="container-narrow mx-auto">
         <div className="text-center mb-12">
           <span className="text-accent font-semibold text-sm uppercase tracking-wider">
             My Approach
           </span>
           <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mt-3">
             How I Build & Scale Revenue Systems
           </h2>
         </div>
 
         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {ecosystemItems.map((item, index) => (
             <div
               key={index}
               className="group relative bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6 transition-all duration-300 hover:border-accent/50 hover:bg-primary-foreground/10"
             >
               {/* Glow effect on hover */}
               <div className="absolute inset-0 rounded-xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               
               <div className="relative z-10">
                 <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                   <item.icon className="w-6 h-6 text-accent" />
                 </div>
                 <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                   {item.title}
                 </h3>
                 <p className="text-primary-foreground/70 text-sm">
                   {item.description}
                 </p>
               </div>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };