import reviewIsha from '@/assets/event-1.jpg';
import reviewVishal from '@/assets/event-2.png';
import reviewAppreciation from '@/assets/event-3.png';
import reviewBennett from '@/assets/event-4.png';

const screenshotTestimonials = [
  {
    id: 1,
    name: 'Isha',
    quote: "Gaurav..i am really happy working with u..! May lord krishna bless with loads and loads of success.. Remember..its just starting..",
    type: 'whatsapp'
  },
  {
    id: 2,
    name: 'Vishal Sharma',
    quote: "All services very nice and fully satisfied response.",
    rating: 5,
    type: 'review'
  },
  {
    id: 3,
    name: 'Happy Client',
    quote: "Hey Gaurav, I appreciate your work. The way you have designed my website, it's amazing and worthy. Your knowledge and work-ethics are shareable. I'll connect with you again with my future projects.",
    type: 'message'
  },
  {
    id: 4,
    name: 'Bennett Uwagwu',
    quote: "Totally trusted agency",
    type: 'whatsapp'
  },
];

export const TestimonialsImageSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Real Feedback
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real messages from real people who have worked with us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {screenshotTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="card-elevated p-6 space-y-4"
            >
              {testimonial.type === 'whatsapp' && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>WhatsApp Message</span>
                </div>
              )}
              
              {testimonial.type === 'review' && testimonial.rating && (
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              )}

              {testimonial.type === 'message' && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Client Message</span>
                </div>
              )}

              <blockquote className="text-foreground text-lg leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="pt-2 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
