const imageTestimonials = [
  { id: 1, name: 'Vikram Patel', location: 'Mumbai' },
  { id: 2, name: 'Sneha Reddy', location: 'Bangalore' },
  { id: 3, name: 'Amit Sharma', location: 'Delhi' },
  { id: 4, name: 'Kavita Nair', location: 'Chennai' },
  { id: 5, name: 'Rohit Gupta', location: 'Hyderabad' },
  { id: 6, name: 'Deepika Joshi', location: 'Pune' },
];

export const TestimonialsImageSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Community
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
            Join Thousands of Successful Marketers
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real people who have transformed their marketing results using these strategies.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {imageTestimonials.map((person) => (
            <div
              key={person.id}
              className="group relative card-elevated overflow-hidden"
            >
              {/* Placeholder image */}
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-2xl font-heading font-bold text-accent">
                      {person.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/90 to-transparent p-4">
                <p className="text-primary-foreground font-semibold">{person.name}</p>
                <p className="text-primary-foreground/70 text-sm">{person.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
