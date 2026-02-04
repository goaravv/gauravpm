import review1 from '@/assets/review-1.png';
import review2 from '@/assets/review-2.png';
import review3 from '@/assets/review-3.png';
import review4 from '@/assets/review-4.png';

const videoTestimonials = [
  {
    id: 1,
    vimeoId: '966576801',
    title: 'Client Success Story',
  },
  {
    id: 2,
    vimeoId: '994030340',
    title: 'Client Results',
  },
];

const reviewImages = [
  { id: 1, src: review1, alt: 'Client Review - Bennett' },
  { id: 2, src: review2, alt: 'Client Review - Website Feedback' },
  { id: 3, src: review3, alt: 'Client Review - Vishal Sharma' },
  { id: 4, src: review4, alt: 'Client Review - Isha' },
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
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real video testimonials from clients who have transformed their business with our strategies.
          </p>
        </div>

        {/* Video Testimonials */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {videoTestimonials.map((video) => (
            <div
              key={video.id}
              className="card-elevated overflow-hidden bg-card"
            >
              <div className="aspect-video relative">
                <iframe
                  src={`https://player.vimeo.com/video/${video.vimeoId}?h=0&title=0&byline=0&portrait=0`}
                  className="w-full h-full absolute inset-0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={video.title}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Review Screenshots */}
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-6">
            More Happy Clients
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {reviewImages.map((review) => (
              <div
                key={review.id}
                className="border-2 border-border rounded-xl overflow-hidden bg-card transition-all duration-300 hover:border-accent hover:shadow-[var(--card-shadow-hover)] hover:scale-[1.02]"
              >
                <img
                  src={review.src}
                  alt={review.alt}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
