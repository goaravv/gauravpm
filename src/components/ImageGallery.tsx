import gallerySpeaking from '@/assets/gallery-speaking.jpg';
import galleryWorkshop from '@/assets/gallery-workshop.jpg';
import galleryConsulting from '@/assets/gallery-consulting.jpg';
import galleryLive from '@/assets/gallery-live.jpg';
import galleryTraining from '@/assets/gallery-training.jpg';
import galleryPanel from '@/assets/gallery-panel.jpg';

const galleryImages = [
  { id: 1, label: 'Speaking at Marketing Summit', image: gallerySpeaking },
  { id: 2, label: 'Workshop on Funnel Building', image: galleryWorkshop },
  { id: 3, label: 'One-on-One Consulting', image: galleryConsulting },
  { id: 4, label: 'Live Strategy Session', image: galleryLive },
  { id: 5, label: 'Team Training Workshop', image: galleryTraining },
  { id: 6, label: 'Industry Conference Panel', image: galleryPanel },
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
            Speaking, Training & Consulting
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From packed auditoriums to intimate workshops, I've had the privilege of sharing strategies with thousands of marketers and business owners.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
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
              <div className="absolute inset-0 flex items-end p-4">
                <span className="text-primary-foreground text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/80 px-3 py-1.5 rounded-lg">
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
