const galleryImages = [
  { id: 1, label: 'Speaking at Marketing Summit 2023' },
  { id: 2, label: 'Workshop on Funnel Building' },
  { id: 3, label: 'One-on-One Consulting Session' },
  { id: 4, label: 'Live Strategy Session' },
  { id: 5, label: 'Team Training Workshop' },
  { id: 6, label: 'Industry Conference Panel' },
];

export const ImageGallery = () => {
  return (
    <section className="section-padding bg-secondary">
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
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer card-elevated"
            >
              {/* Placeholder image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary" />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-300" />
              
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-accent/20 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                    <span className="text-2xl">📸</span>
                  </div>
                  <span className="text-primary-foreground text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {image.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
