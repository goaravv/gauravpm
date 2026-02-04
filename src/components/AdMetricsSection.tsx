import { useState } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Target, Users, DollarSign, Eye, MousePointer } from 'lucide-react';
import { Button } from '@/components/ui/button';

const metrics = [
  {
    id: 1,
    platform: 'Meta Ads',
    campaign: 'E-commerce Brand',
    stats: [
      { label: 'Amount Spent', value: '₹5.84L', icon: DollarSign },
      { label: 'Impressions', value: '46.4L', icon: Eye },
      { label: 'Clicks', value: '1.08L', icon: MousePointer },
      { label: 'Purchases Value', value: '₹35.58L', icon: TrendingUp },
    ],
  },
  {
    id: 2,
    platform: 'Meta Ads',
    campaign: 'Lead Generation',
    stats: [
      { label: 'Amount Spent', value: '₹3.49L', icon: DollarSign },
      { label: 'Impressions', value: '24.8L', icon: Eye },
      { label: 'Clicks', value: '49,498', icon: MousePointer },
      { label: 'Purchases Value', value: '₹19.13L', icon: TrendingUp },
    ],
  },
  {
    id: 3,
    platform: 'Meta Ads',
    campaign: 'Funnel Campaign',
    stats: [
      { label: 'Amount Spent', value: '₹1.42L', icon: DollarSign },
      { label: 'Impressions', value: '21.9L', icon: Eye },
      { label: 'Add to Carts', value: '1,261', icon: Target },
      { label: 'Purchases Value', value: '₹5.01L', icon: TrendingUp },
    ],
  },
  {
    id: 4,
    platform: 'Meta Ads',
    campaign: 'Insurance Leads',
    stats: [
      { label: 'Amount Spent', value: '₹96,032', icon: DollarSign },
      { label: 'On-Facebook Leads', value: '12,303', icon: Users },
      { label: 'Cost per Lead', value: '₹7.81', icon: Target },
      { label: 'Campaign Duration', value: '3 Years', icon: TrendingUp },
    ],
  },
  {
    id: 5,
    platform: 'Meta Ads',
    campaign: 'Messaging Campaign',
    stats: [
      { label: 'Amount Spent', value: '₹55,472', icon: DollarSign },
      { label: 'Conversations', value: '2,555', icon: Users },
      { label: 'Cost per Message', value: '₹21.71', icon: Target },
      { label: 'Platform', value: 'WhatsApp', icon: TrendingUp },
    ],
  },
  {
    id: 6,
    platform: 'Google Ads',
    campaign: 'Lead Gen Campaign',
    stats: [
      { label: 'Cost', value: '$5.67K', icon: DollarSign },
      { label: 'Impressions', value: '135K', icon: Eye },
      { label: 'Clicks', value: '7.83K', icon: MousePointer },
      { label: 'Conversions', value: '438', icon: TrendingUp },
    ],
  },
  {
    id: 7,
    platform: 'Google Ads',
    campaign: 'B2B Lead Gen',
    stats: [
      { label: 'Cost', value: '$4.78K', icon: DollarSign },
      { label: 'Impressions', value: '21.3K', icon: Eye },
      { label: 'Clicks', value: '873', icon: MousePointer },
      { label: 'Conversions', value: '97', icon: TrendingUp },
    ],
  },
  {
    id: 8,
    platform: 'Meta Ads',
    campaign: 'AI Course Leads',
    stats: [
      { label: 'Amount Spent', value: '₹61,092', icon: DollarSign },
      { label: 'Impressions', value: '17.5L', icon: Eye },
      { label: 'Leads Generated', value: '749', icon: Users },
      { label: 'Landing Page Views', value: '430', icon: Target },
    ],
  },
];

export const AdMetricsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = { desktop: 2, mobile: 1 };

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 1 >= metrics.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? metrics.length - 2 : prev - 1
    );
  };

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container-narrow mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            Real Campaign Results
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Proven Ad Performance Metrics
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real results from campaigns I've managed for clients across Meta Ads and Google Ads
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden md:flex bg-background border-border hover:bg-accent hover:text-accent-foreground"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden md:flex bg-background border-border hover:bg-accent hover:text-accent-foreground"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / 2 + 1.5)}%)` 
              }}
            >
              {metrics.map((metric) => (
                <div
                  key={metric.id}
                  className="w-full md:w-[calc(50%-12px)] flex-shrink-0"
                >
                  <div className="bg-card border-2 border-border rounded-xl p-6 h-full transition-all duration-300 hover:border-accent hover:shadow-[var(--card-shadow-hover)] hover:scale-[1.02] group cursor-pointer">
                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                          {metric.platform}
                        </span>
                        <h3 className="text-lg font-heading font-semibold text-foreground mt-2">
                          {metric.campaign}
                        </h3>
                      </div>
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        <TrendingUp className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {metric.stats.map((stat, idx) => (
                        <div 
                          key={idx}
                          className="p-3 bg-secondary rounded-lg border border-border group-hover:border-accent/30 transition-colors"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <stat.icon className="w-4 h-4 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{stat.label}</span>
                          </div>
                          <span className="text-lg font-heading font-bold text-foreground">
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-6 md:hidden">
            <Button
              variant="outline"
              size="icon"
              className="bg-background border-border"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-background border-border"
              onClick={nextSlide}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {metrics.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'w-6 bg-accent' 
                    : 'bg-border hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
