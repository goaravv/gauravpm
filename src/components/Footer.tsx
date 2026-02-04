export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 border-t border-primary-foreground/10">
      <div className="container-narrow mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <span className="text-xl font-heading font-bold">Gaurav Sharma</span>
            <p className="text-sm text-primary-foreground/60 mt-1">
              Performance Marketing Expert
            </p>
          </div>
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
