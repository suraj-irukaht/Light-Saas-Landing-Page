'use client';
import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/logosaas.png';
import Menu from '@/assets/menu.svg';
import MenuCloser from '@/assets/close-large-line.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
export const Header = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   const [menuClose, setMenuClose] = useState(false);
   const handelMenuOpen = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
   ) => {
      e.preventDefault();
      setMenuOpen(true);
      setMenuClose(false);
   };
   const handelMenuClose = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
   ) => {
      e.preventDefault();
      setMenuOpen(false);
      setMenuClose(true);
   };
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
                  <nav
                     className={`fixed inset-0 bg-black text-white h-dvh w-full z-50 p-10 transition-transform lg:static lg:h-auto lg:w-auto lg:text-black/50 lg:bg-transparent lg:p-0 lg:translate-x-0 ${
                        menuOpen ? 'translate-x-0' : 'translate-x-full'
                     }`}
                  >
                     <button
                        className="lg:hidden absolute top-10 right-10"
                        onClick={(e) => {
                           e.preventDefault();
                           handelMenuClose(e);
                        }}
                     >
                        <MenuCloser className="h-6 w-6" />
                     </button>
                     <ul className="flex flex-col items-center gap-4 text-md tracking-tight pt-20 lg:flex-row lg:p-0">
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
                           <button className="btn btn-primary bg-white text-black lg:bg-black lg:text-white">
                              Get for free
                           </button>
                        </li>
                     </ul>
                  </nav>
                  <button
                     className="lg:hidden"
                     onClick={(e) => {
                        e.preventDefault();
                        handelMenuOpen(e);
                     }}
                  >
                     <Menu className="h-6 w-6" />
                  </button>
               </div>
            </div>
         </div>
      </header>
   );
};
