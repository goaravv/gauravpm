const imageTestimonials = [
  { id: 1, name: 'Vikram Patel', location: 'Mumbai', initials: 'VP' },
  { id: 2, name: 'Sneha Reddy', location: 'Bangalore', initials: 'SR' },
  { id: 3, name: 'Amit Sharma', location: 'Delhi', initials: 'AS' },
  { id: 4, name: 'Kavita Nair', location: 'Chennai', initials: 'KN' },
  { id: 5, name: 'Rohit Gupta', location: 'Hyderabad', initials: 'RG' },
  { id: 6, name: 'Deepika Joshi', location: 'Pune', initials: 'DJ' },
];

export const TestimonialsImageSection = () => {
  return (
    <section className="section-padding bg-background">
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
              {/* Gradient background with initials */}
              <div className="aspect-[4/5] bg-gradient-to-br from-accent/20 via-secondary to-accent/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-accent/30 flex items-center justify-center border-2 border-accent/50">
                    <span className="text-2xl font-heading font-bold text-accent">
                      {person.initials}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-card via-card/95 to-transparent p-4">
                <p className="text-foreground font-semibold">{person.name}</p>
                <p className="text-muted-foreground text-sm">{person.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
