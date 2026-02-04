import event1 from '@/assets/event-1.jpg';
import event2 from '@/assets/event-2.png';
import event3 from '@/assets/event-3.png';
import event4 from '@/assets/event-4.png';
import event5 from '@/assets/event-5.png';
import event6 from '@/assets/event-6.png';
import event9 from '@/assets/event-9.png';
import event10 from '@/assets/event-10.png';

const galleryImages = [
  { id: 1, label: 'Google Search Central Live 2023', image: event1 },
  { id: 2, label: 'Networking at Marketing Summit', image: event2 },
  { id: 3, label: 'Meeting Industry Leaders', image: event3 },
  { id: 4, label: 'Conference Networking', image: event4 },
  { id: 5, label: 'Industry Meetup', image: event5 },
  { id: 6, label: 'Marketing Conference', image: event6 },
  { id: 7, label: 'Behind the Scenes', image: event9 },
  { id: 8, label: 'Team Connect', image: event10 },
];

export const ImageGallery = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            In Action
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
            Networking, Events & Conferences
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From industry conferences to marketing summits, connecting with professionals and sharing knowledge across India.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow"
            >
              <img 
                src={item.image} 
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-colors duration-300" />
              
              {/* Label */}
              <div className="absolute inset-0 flex items-end p-3">
                <span className="text-primary-foreground text-xs md:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/80 px-2 py-1 rounded-lg">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
