import { Play } from 'lucide-react';

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

        {/* Review Screenshots Placeholder - Will be added when images are uploaded */}
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-6">
            More Happy Clients
          </h3>
          <p className="text-muted-foreground mb-8">
            Screenshots of real client messages and reviews
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Placeholder for review images */}
            <div className="border-2 border-dashed border-border rounded-xl p-8 flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Review 1</span>
            </div>
            <div className="border-2 border-dashed border-border rounded-xl p-8 flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Review 2</span>
            </div>
            <div className="border-2 border-dashed border-border rounded-xl p-8 flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Review 3</span>
            </div>
            <div className="border-2 border-dashed border-border rounded-xl p-8 flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Review 4</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
