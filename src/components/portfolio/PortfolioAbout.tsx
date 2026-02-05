 import { CheckCircle } from 'lucide-react';
 
 const credentials = [
   'Performance Marketing & Paid Ads Expert',
   'Funnel Strategist & Conversion Architect',
   'AI-Driven Campaign Execution',
   'Data-Backed Decision Making',
   'Not theory — only execution & results',
 ];
 
 export const PortfolioAbout = () => {
   return (
     <section className="section-padding bg-background">
       <div className="container-narrow mx-auto">
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
           {/* Photo */}
           <div className="relative">
             <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
               <img
                 alt="Gaurav Sharma - Performance Marketing Expert"
                 className="w-full h-full object-cover"
                 src="/lovable-uploads/4619ba86-0da1-4ea6-85f7-3102cc862f13.jpg"
               />
             </div>
             <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
           </div>
 
           {/* Content */}
           <div className="space-y-6">
             <div className="inline-block">
               <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                 About Me
               </span>
             </div>
 
             <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
               Hi, I'm Gaurav Sharma
             </h2>
 
             <p className="text-lg text-muted-foreground leading-relaxed">
               I'm a Performance Marketer with 7+ years of experience helping brands grow profitably through data-driven advertising and conversion-focused funnels.
             </p>
 
             <p className="text-lg text-muted-foreground leading-relaxed">
               My work focuses on scaling sales, leads, and ROAS using performance marketing across Google Ads and Meta Ads — building predictable revenue systems that prioritize outcomes over vanity metrics.
             </p>
 
             <div className="pt-2">
               <h3 className="text-lg font-semibold text-foreground mb-4">What I Bring</h3>
               <ul className="space-y-3">
                 {credentials.map((credential, index) => (
                   <li key={index} className="flex items-start gap-3">
                     <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                     <span className="text-foreground">{credential}</span>
                   </li>
                 ))}
               </ul>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };