export const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">About DevHub</h3>
            <p className="text-sm text-muted-foreground">
              A curated collection of the best development resources to help you build amazing applications.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#frontend" className="text-muted-foreground hover:text-primary transition-colors">
                  Frontend Resources
                </a>
              </li>
              <li>
                <a href="#backend" className="text-muted-foreground hover:text-primary transition-colors">
                  Backend Resources
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <p className="text-sm text-muted-foreground">
              Follow us for more resources and updates.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DevHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};