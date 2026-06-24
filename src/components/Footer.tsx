import Link from "next/link";
import { Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

const PinterestIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.624 0 12.017 0z"/>
  </svg>
);

const WhatsappIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Footer() {
  return (
    <div className="bg-background pt-10">
      <footer className="bg-brand text-surface rounded-t-[2.5rem] md:rounded-t-[4rem] px-6 md:px-12 lg:px-24 pt-24 pb-12 relative overflow-hidden">
        
        

        <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
          
          {/* FIND US */}
          <div className="flex flex-col">
            <h4 className="font-bold tracking-wider mb-6 text-xs uppercase">FIND US</h4>
            <div className="flex flex-col space-y-4 text-sm text-surface/80">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-secondary" />
                <a href="tel:+919999968271" className="hover:text-secondary transition-colors">+91-9999 96 8271</a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 text-secondary" />
                <div className="flex flex-col">
                  <a href="mailto:info@harshcarpets.com" className="hover:text-secondary transition-colors mb-1">info@harshcarpets.com</a>
                  <a href="mailto:harshcarpets@gmail.com" className="hover:text-secondary transition-colors">harshcarpets@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* SOCIAL NETWORKS */}
          <div className="flex flex-col">
            <h4 className="font-bold tracking-wider mb-6 text-xs uppercase">SOCIAL NETWORKS</h4>
            <ul className="space-y-4 text-sm text-surface/80">
              <li>
                <a href="#" className="flex items-center gap-3 hover:text-secondary transition-colors group">
                  <Facebook className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" /> 
                  <span>Harsh Carpets</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 hover:text-secondary transition-colors group">
                  <Instagram className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" /> 
                  <span>Harshcarpetsofficial</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 hover:text-secondary transition-colors group">
                  <Youtube className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" /> 
                  <span>Harsh Carpets</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 hover:text-secondary transition-colors group">
                  <PinterestIcon className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" /> 
                  <span>Harsh Carpets</span>
                </a>
              </li>
            </ul>
          </div>

          {/* MENU */}
          <div className="flex flex-col">
            <h4 className="font-bold tracking-wider mb-6 text-xs uppercase">MENU</h4>
            <ul className="space-y-4 text-sm text-surface/80">
              <li><Link href="#" className="hover:text-secondary transition-colors">About us</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Custom</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Carpet Buying Guide</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Our Services</Link></li>
            </ul>
          </div>

          {/* LINKS */}
          <div className="flex flex-col">
            <h4 className="font-bold tracking-wider mb-6 text-xs uppercase">LINKS</h4>
            <ul className="space-y-4 text-sm text-surface/80">
              <li><Link href="#" className="hover:text-secondary transition-colors">Return Policy</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Blogs</Link></li>
            </ul>
          </div>

          {/* HARSH CARPETS */}
          <div className="flex flex-col">
            <h3 className="font-serif text-2xl font-bold mb-6">Harsh Carpets</h3>
            <p className="text-sm leading-relaxed text-surface/80">
              E-4, Lajpat Nagar-III, New Delhi,<br/>Delhi 110024, INDIA.
            </p>
          </div>

        </div>

      </footer>

     
    </div>
  );
}
