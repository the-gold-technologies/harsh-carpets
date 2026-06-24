import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-surface pt-32 pb-12 px-6 md:px-12 lg:px-24 border-t border-surface/10">
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-32">
        
        <div className="lg:col-span-4">
          <h3 className="font-serif text-3xl mb-8 tracking-widest">HARSH CARPETS</h3>
          <p className="text-surface/60 text-xs leading-loose max-w-sm mb-12">
            Preserving the soul of Indian handloom weaving. We curate and craft the finest luxury handmade rugs from master artisans, blending centuries-old heritage with modern elegance.
          </p>
          <div className="flex gap-6 text-surface/60">
             <a href="#" className="hover:text-surface transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/></svg></a>
             <a href="#" className="hover:text-surface transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
          </div>
        </div>
        
        <div className="lg:col-span-2 lg:col-start-7">
          <h4 className="text-[9px] uppercase tracking-[0.3em] font-medium mb-8 text-secondary">Collections</h4>
          <ul className="space-y-4 text-xs text-surface/70">
            <li><Link href="#" className="hover:text-surface transition-colors">Modern Handloom</Link></li>
            <li><Link href="#" className="hover:text-surface transition-colors">Classic Persian</Link></li>
            <li><Link href="#" className="hover:text-surface transition-colors">Transitional</Link></li>
            <li><Link href="#" className="hover:text-surface transition-colors">Custom Projects</Link></li>
          </ul>
        </div>
        
        <div className="lg:col-span-2">
          <h4 className="text-[9px] uppercase tracking-[0.3em] font-medium mb-8 text-secondary">House</h4>
          <ul className="space-y-4 text-xs text-surface/70">
            <li><Link href="#" className="hover:text-surface transition-colors">Our Heritage</Link></li>
            <li><Link href="#" className="hover:text-surface transition-colors">The Craft</Link></li>
            <li><Link href="#" className="hover:text-surface transition-colors">Care Guide</Link></li>
            <li><Link href="#" className="hover:text-surface transition-colors">Journal</Link></li>
          </ul>
        </div>
        
        <div className="lg:col-span-2">
          <h4 className="text-[9px] uppercase tracking-[0.3em] font-medium mb-8 text-secondary">Enquire</h4>
          <ul className="space-y-4 text-xs text-surface/70">
            <li><Link href="#" className="hover:text-surface transition-colors">Contact Us</Link></li>
            <li><Link href="#" className="hover:text-surface transition-colors">Showrooms</Link></li>
            <li><Link href="#" className="hover:text-surface transition-colors">Trade Portal</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-center pt-8 text-[10px] tracking-widest text-surface/40 uppercase">
        <p>&copy; {new Date().getFullYear()} Harsh Carpets. All Rights Reserved.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <Link href="#" className="hover:text-surface transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-surface transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
