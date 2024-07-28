import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/logosaas.png';
import Menu from '@/assets/menu.svg';
import Image from 'next/image';
import Link from 'next/link';
export const Header = () => {
   return (
      <header>
         <div className="flex item-center justify-center bg-black text-white p-3">
            <div className="flex items-center gap-1">
               <div>Get started for free</div>
               <ArrowRight className="h-4 w-4" />
            </div>
         </div>
         <div className="py-4">
            <div className="container">
               <div className="flex items-center justify-between gap-2">
                  <Link href="/">
                     <Image src={Logo} width={40} height={40} alt="logo saas" />
                  </Link>
                  <nav className="hidden lg:block">
                     <ul className="flex items-center gap-4 text-md text-black/50 tracking-tight">
                        <li>
                           <a href="#">About</a>
                        </li>
                        <li>
                           <a href="#">Features</a>
                        </li>
                        <li>
                           <a href="#">Customers</a>
                        </li>
                        <li>
                           <a href="#">Update</a>
                        </li>
                        <li>
                           <a href="#">Help</a>
                        </li>
                        <li className="ml-2">
                           <button className="btn">Get for free</button>
                        </li>
                     </ul>
                  </nav>

                  <Link href="" className="lg:hidden">
                     <Menu className="h-6 w-6" />
                  </Link>
               </div>
            </div>
         </div>
      </header>
   );
};
