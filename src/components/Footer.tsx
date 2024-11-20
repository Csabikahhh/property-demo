export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About LuxuryEstates</h3>
            <p className="text-gray-400">
              We help you find the perfect property that matches your needs and dreams.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Search Properties</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Featured Listings</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">
              1234 Luxury Lane<br />
              Beverly Hills, CA 90210<br />
              (555) 123-4567<br />
              info@luxuryestates.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}