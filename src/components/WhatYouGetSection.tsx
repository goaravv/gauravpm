import { Target, TrendingUp, Zap, BarChart3, DollarSign, AlertTriangle } from 'lucide-react';

const topics = [
  {
    icon: TrendingUp,
    title: 'Get Consistent Sales',
    description: 'Learn the exact framework to generate consistent, predictable sales using performance marketing',
  },
  {
    icon: Target,
    title: 'Set Up Sales Campaigns',
    description: 'Step-by-step process to set up high-converting sales campaigns that actually deliver results',
  },
  {
    icon: Zap,
    title: 'Generate Quality Leads',
    description: 'Discover how to attract and capture high-quality leads that are ready to buy',
  },
  {
    icon: BarChart3,
    title: 'Scale E-commerce Brands',
    description: 'Proven strategies to scale your e-commerce business profitably using paid advertising',
  },
  {
    icon: DollarSign,
    title: 'Funnels That Convert',
    description: 'Build funnels that transform cold traffic into paying customers systematically',
  },
  {
    icon: AlertTriangle,
    title: 'Avoid Budget Mistakes',
    description: 'Common mistakes that burn ad budgets and how to avoid them from day one',
  },
];

export const WhatYouGetSection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Webinar Curriculum
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">
            What You'll Learn in This Webinar
          </h2>
          <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto">
            This isn't theory. Every topic covered is battle-tested and has generated real results for real businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="group p-6 bg-primary-foreground/5 rounded-xl border border-primary-foreground/10 hover:border-accent/50 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <topic.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">
                {topic.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
