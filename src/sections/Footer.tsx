import logo from '@/assets/logosaas.png';
import Image from 'next/image';
import Link from 'next/link';
import SocialX from '@/assets/social-x.svg';
import SocialInsta from '@/assets/social-insta.svg';
import SocialPin from '@/assets/social-pin.svg';
import SocialLin from '@/assets/social-linkedin.svg';
import SocialYt from '@/assets/social-youtube.svg';
export const Footer = () => {
   return (
      <footer className="py-10 bg-black text-white/70 text-center">
         <div className="container">
            <div className="inline-flex mb-6">
               <Image src={logo} alt="logo" width={40} height={40} />
            </div>
            <nav className="flex flex-col items-center gap-4 md:flex-row mb-6 md:justify-center">
               <Link href="#">About</Link>
               <Link href="#">Features</Link>
               <Link href="#">Customers</Link>
               <Link href="#">Pricing</Link>
               <Link href="#">Help</Link>
               <Link href="#">Careers</Link>
            </nav>
            <div className="flex items-center justify-center gap-4">
               <SocialX />
               <SocialInsta />
               <SocialPin />
               <SocialLin />
               <SocialYt />
            </div>
         </div>
      </footer>
   );
};
