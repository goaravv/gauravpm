import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Mehta',
    role: 'E-commerce Founder',
    content: 'After implementing Gaurav\'s funnel strategy, our lead generation increased by 340%. We went from struggling to get 50 leads a month to consistently generating 200+ qualified leads.',
    stats: '340% increase in leads',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    role: 'Digital Agency Owner',
    content: 'The ROI on ad spend has been phenomenal. Gaurav\'s approach to campaign optimization helped us reduce cost per acquisition by 60% while scaling our client\'s business.',
    stats: '60% lower CPA',
    rating: 5,
  },
  {
    name: 'Ananya Singh',
    role: 'SaaS Startup CEO',
    content: 'We were burning money on ads with no clear direction. After Gaurav\'s training, we restructured our entire funnel and saw our first profitable month within 6 weeks.',
    stats: '₹25L revenue in 6 weeks',
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
            Real Results from Real People
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what people are saying about the strategies they learned.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-elevated p-6 md:p-8 relative bg-card"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-accent/20">
                <Quote className="w-10 h-10" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Stats badge */}
              <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold mb-6">
                {testimonial.stats}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
