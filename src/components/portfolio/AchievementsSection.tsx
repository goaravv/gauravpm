 import { TrendingUp, GitBranch, Rocket, Users, ShoppingCart, Target } from 'lucide-react';
 
 const achievements = [
   {
     icon: TrendingUp,
     title: 'Get Consistent Sales',
     description: 'Build predictable revenue with data-driven campaigns',
   },
   {
     icon: GitBranch,
     title: 'Build Scalable Funnels',
     description: 'Create systems that grow with your business',
   },
   {
     icon: Rocket,
     title: 'Launch Profitable Campaigns',
     description: 'Start with strategy, not just ad spend',
   },
   {
     icon: Users,
     title: 'Generate Quality Leads',
     description: 'Attract prospects who are ready to buy',
   },
   {
     icon: ShoppingCart,
     title: 'Scale E-commerce',
     description: 'Drive more sales with optimized funnels',
   },
   {
     icon: Target,
     title: 'Improve ROAS & CAC',
     description: 'Better returns on every rupee spent',
   },
 ];
 
 export const AchievementsSection = () => {
   return (
     <section className="section-padding bg-secondary">
       <div className="container-narrow mx-auto">
         <div className="text-center mb-12">
           <span className="text-accent font-semibold text-sm uppercase tracking-wider">
             Results
           </span>
           <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
             What I Help You Achieve
           </h2>
         </div>
 
         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {achievements.map((achievement, index) => (
             <div
               key={index}
               className="bg-card rounded-xl p-6 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow"
             >
               <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                 <achievement.icon className="w-6 h-6 text-accent" />
               </div>
               <h3 className="text-lg font-semibold text-foreground mb-2">
                 {achievement.title}
               </h3>
               <p className="text-muted-foreground text-sm">
                 {achievement.description}
               </p>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };