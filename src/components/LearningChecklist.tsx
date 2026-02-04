import { useState } from 'react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const learningTopics = [
  {
    title: 'Performance Marketing Fundamentals',
    description: 'Master the core concepts and frameworks that drive successful performance campaigns',
  },
  {
    title: 'How to Generate Sales for E-Commerce',
    description: 'Proven strategies to turn browsers into buyers and scale your online store revenue',
  },
  {
    title: 'How to Setup Sales Campaigns',
    description: 'Step-by-step process to create campaigns that consistently deliver conversions',
  },
  {
    title: 'How to Setup Lookalike Campaigns',
    description: 'Find and target audiences that mirror your best customers for maximum ROI',
  },
  {
    title: 'How to Setup High-Converting Funnels',
    description: 'Build funnels that guide prospects from awareness to purchase seamlessly',
  },
  {
    title: 'How to Grow ROAS (Return on Ad Spend)',
    description: 'Optimization techniques to maximize every rupee spent on advertising',
  },
  {
    title: 'How to Get Profitable CAC',
    description: 'Strategies to acquire customers at costs that make your business profitable',
  },
  {
    title: 'How to Scale E-Commerce Profitably',
    description: 'Scale your ad spend without sacrificing margins or efficiency',
  },
  {
    title: 'Advanced Retargeting Strategies',
    description: 'Re-engage visitors and convert them into paying customers',
  },
  {
    title: 'Creative Testing & Optimization',
    description: 'Test and iterate on creatives to find winners that drive results',
  },
];

interface TopicItemProps {
  topic: typeof learningTopics[0];
  index: number;
}

const TopicItem = ({ topic, index }: TopicItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={cn(
        "border border-border rounded-xl overflow-hidden transition-all duration-300",
        isOpen ? "bg-accent/5 border-accent/30" : "bg-card hover:border-accent/20"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 md:p-5 text-left"
      >
        <div className="flex items-center gap-4">
          <div className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors",
            isOpen ? "bg-accent text-accent-foreground" : "bg-secondary text-muted-foreground"
          )}>
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <span className={cn(
            "font-semibold text-base md:text-lg transition-colors",
            isOpen ? "text-accent" : "text-foreground"
          )}>
            {topic.title}
          </span>
        </div>
        <ChevronDown 
          className={cn(
            "w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ml-4",
            isOpen && "rotate-180"
          )} 
        />
      </button>
      
      <div className={cn(
        "overflow-hidden transition-all duration-300",
        isOpen ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-4 md:px-5 pb-4 md:pb-5 pl-16 md:pl-[4.5rem]">
          <p className="text-muted-foreground leading-relaxed">
            {topic.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export const LearningChecklist = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Complete Curriculum
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
            Everything You'll Master
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Click on any topic to see what you'll learn. Every module is packed with actionable strategies.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {learningTopics.map((topic, index) => (
            <TopicItem key={index} topic={topic} index={index} />
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground text-sm">
            ...and many more advanced strategies revealed in the live session!
          </p>
        </div>
      </div>
    </section>
  );
};
