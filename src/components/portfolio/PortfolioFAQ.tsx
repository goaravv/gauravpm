 import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
 } from '@/components/ui/accordion';
 
 const faqs = [
   {
     question: 'How do you help brands get more sales?',
     answer:
       'I create data-driven ad campaigns and conversion-focused funnels that turn traffic into paying customers. My approach combines strategic targeting, compelling creatives, and continuous optimization to maximize your return on ad spend.',
   },
   {
     question: 'Do you work with beginners or only established businesses?',
     answer:
       'I work with businesses at various stages. For those just starting, I focus on building a solid foundation with proven funnel strategies. For established brands, I help scale what\'s working and identify new growth opportunities.',
   },
   {
     question: 'Do you provide funnel strategy and consulting?',
     answer:
       'Yes, funnel strategy is a core part of my services. I help map out your customer journey, identify conversion bottlenecks, and design funnels that systematically move prospects toward purchase.',
   },
   {
     question: 'Can you help with E-commerce growth?',
     answer:
       'Absolutely. I\'ve helped E-commerce brands achieve significant ROAS improvements through optimized product feeds, strategic retargeting, and conversion rate optimization across the entire purchase journey.',
   },
   {
     question: 'How can I learn performance marketing from you?',
     answer:
       'I offer live webinars and training programs where I share the exact frameworks and strategies I use with clients. Join my upcoming webinar to get started with actionable insights you can implement immediately.',
   },
 ];
 
 export const PortfolioFAQ = () => {
   return (
     <section className="section-padding bg-background">
       <div className="container-narrow mx-auto max-w-3xl">
         <div className="text-center mb-12">
           <span className="text-accent font-semibold text-sm uppercase tracking-wider">
             FAQ
           </span>
           <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
             Common Questions
           </h2>
         </div>
 
         <Accordion type="single" collapsible className="space-y-4">
           {faqs.map((faq, index) => (
             <AccordionItem
               key={index}
               value={`item-${index}`}
               className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-[var(--card-shadow)]"
             >
               <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                 {faq.question}
               </AccordionTrigger>
               <AccordionContent className="text-muted-foreground pb-5">
                 {faq.answer}
               </AccordionContent>
             </AccordionItem>
           ))}
         </Accordion>
       </div>
     </section>
   );
 };