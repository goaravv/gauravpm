import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

import adMetrics4 from '@/assets/ad-metrics-4.png';
import adMetrics6 from '@/assets/ad-metrics-6.png';
import adMetrics7 from '@/assets/ad-metrics-7.png';
import adMetrics8 from '@/assets/ad-metrics-8.png';
import adMetrics9 from '@/assets/ad-metrics-9.png';
import adMetrics10 from '@/assets/ad-metrics-10.png';
import adMetrics11 from '@/assets/ad-metrics-11.png';
import adMetrics12 from '@/assets/ad-metrics-12.png';

const screenshots = [
  { id: 1, src: adMetrics8, alt: 'Meta Ads - Insurance Lead Generation Campaign', label: 'Meta Ads - 12,303 Leads' },
  { id: 2, src: adMetrics7, alt: 'Meta Ads - E-commerce Campaigns ₹19.98L Spent', label: 'Meta Ads - ₹1.06 Cr Revenue' },
  { id: 3, src: adMetrics4, alt: 'Meta Ads - Lead Generation Campaigns', label: 'Meta Ads - Lead Campaigns' },
  { id: 4, src: adMetrics6, alt: 'Meta Ads - Sales Campaigns', label: 'Meta Ads - Sales Results' },
  { id: 5, src: adMetrics9, alt: 'Google Ads - 438 Conversions', label: 'Google Ads - 438 Conversions' },
  { id: 6, src: adMetrics10, alt: 'Google Ads - 97 Conversions', label: 'Google Ads - 97 Conversions' },
  { id: 7, src: adMetrics11, alt: 'Google Ads - 139 Conversions', label: 'Google Ads - 139 Conversions' },
  { id: 8, src: adMetrics12, alt: 'Google Ads - 6.67K Sales', label: 'Google Ads - 6.67K Sales' },
];

export const AdMetricsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
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
          {/* Navigation Buttons - Desktop */}
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
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)` 
              }}
            >
              {screenshots.map((screenshot, idx) => (
                <div
                  key={screenshot.id}
                  className="w-full flex-shrink-0 px-2"
                >
                  {/* Desktop: 2 columns */}
                  <div className="hidden md:grid md:grid-cols-2 gap-6">
                    <div className="border-2 border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-[var(--card-shadow-hover)] hover:scale-[1.02] group cursor-pointer bg-card">
                      <img 
                        src={screenshots[idx % screenshots.length].src} 
                        alt={screenshots[idx % screenshots.length].alt}
                        className="w-full h-auto object-contain"
                      />
                      <div className="p-4 bg-card border-t border-border">
                        <span className="text-sm font-medium text-foreground">
                          {screenshots[idx % screenshots.length].label}
                        </span>
                      </div>
                    </div>
                    <div className="border-2 border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-[var(--card-shadow-hover)] hover:scale-[1.02] group cursor-pointer bg-card">
                      <img 
                        src={screenshots[(idx + 1) % screenshots.length].src} 
                        alt={screenshots[(idx + 1) % screenshots.length].alt}
                        className="w-full h-auto object-contain"
                      />
                      <div className="p-4 bg-card border-t border-border">
                        <span className="text-sm font-medium text-foreground">
                          {screenshots[(idx + 1) % screenshots.length].label}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Mobile: 1 column */}
                  <div className="md:hidden">
                    <div className="border-2 border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-[var(--card-shadow-hover)] group cursor-pointer bg-card">
                      <img 
                        src={screenshot.src} 
                        alt={screenshot.alt}
                        className="w-full h-auto object-contain"
                      />
                      <div className="p-4 bg-card border-t border-border">
                        <span className="text-sm font-medium text-foreground">
                          {screenshot.label}
                        </span>
                      </div>
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
            {screenshots.map((_, idx) => (
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
