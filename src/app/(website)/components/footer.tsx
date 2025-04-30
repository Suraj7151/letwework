const Footer = () => (
    <footer className="bg-gray-800 text-white py-8 rounded-lg">
      <div className="mx-auto px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-xl mb-2">Contact Us</h3>
          <p>Plot no PAP R602, Rabale MIDC Rd,<br /> near Hotel Stay Inn,<br /> I.T.C. Industrial Area, Rabale,<br /> Navi Mumbai, Maharashtra 400708</p>
          <p className="mt-2">Phone: +91 8097180809</p>
          <p>Email: enquiry@seasonofindia.com</p>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">Follow Us</h3>
          <p>Social media icons go here (Instagram, Facebook, etc.)</p>
        </div>
      </div>
      <div className="text-center mt-6 text-gray-400 text-sm">© 2025 Season of India. All rights reserved.</div>
    </footer>
  );
  
  export default Footer;
  