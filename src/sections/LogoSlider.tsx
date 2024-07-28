'use client';
import Image from 'next/image';
import logoAcme from '@/assets/logo-acme.png';
import logoApex from '@/assets/logo-apex.png';
import logoEcho from '@/assets/logo-echo.png';
import logoPulse from '@/assets/logo-pulse.png';
import logoQuantum from '@/assets/logo-quantum.png';
import logoCelestial from '@/assets/logo-celestial.png';
import { motion } from 'framer-motion';

export const LogoSlider = () => {
   return (
      <section className="py-8 bg-white md:py-12">
         <div className="container">
            <div className="flex items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
               <motion.div
                  className="flex gap-14 flex-none pr-14"
                  animate={{
                     translateX: '-50%',
                  }}
                  transition={{
                     duration: 10,
                     ease: 'linear',
                     repeat: Infinity,
                     repeatType: 'loop',
                  }}
               >
                  <Image className="logo-item" src={logoAcme} alt="logo-acme" />
                  <Image className="logo-item" src={logoApex} alt="logo-apex" />
                  <Image className="logo-item" src={logoEcho} alt="logo-echo" />
                  <Image
                     className="logo-item"
                     src={logoPulse}
                     alt="logo-pulse"
                  />
                  <Image
                     className="logo-item"
                     src={logoQuantum}
                     alt="logo-quantum"
                  />
                  <Image
                     className="logo-item"
                     src={logoCelestial}
                     alt="logo-celestial"
                  />
                  <Image className="logo-item" src={logoAcme} alt="logo-acme" />
                  <Image className="logo-item" src={logoApex} alt="logo-apex" />
                  <Image className="logo-item" src={logoEcho} alt="logo-echo" />
                  <Image
                     className="logo-item"
                     src={logoPulse}
                     alt="logo-pulse"
                  />
                  <Image
                     className="logo-item"
                     src={logoQuantum}
                     alt="logo-quantum"
                  />
                  <Image
                     className="logo-item"
                     src={logoCelestial}
                     alt="logo-celestial"
                  />
               </motion.div>
            </div>
         </div>
      </section>
   );
};
