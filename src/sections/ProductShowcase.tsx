'use client';
import productImage from '@/assets/product-image.png';
import pyramidImage from '@/assets/pyramid.png';
import tubeImage from '@/assets/tube.png';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
export const ProductShowcase = () => {
   const secRef = useRef(null);
   const { scrollYProgress } = useScroll({
      target: secRef,
      offset: ['start end', 'end start'],
   });
   const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
   return (
      <section
         ref={secRef}
         className="py-24 bg-gradient-to-b from-[#fff] to-[#d2dcff]"
      >
         <div className="container">
            <div className="">
               <div className="section-heading">
                  <div className="tag">Boost your productivity</div>
                  <h2 className="section-title">
                     A more effective way to track progress
                  </h2>
                  <p>
                     Celebrate the joy of accomplishment with an app designed to
                     track your progress and motivate your efforts.
                  </p>
               </div>
               <div className="relative">
                  <Image
                     src={productImage}
                     alt="product image"
                     className="mt-10"
                  />
                  <motion.img
                     src={pyramidImage.src}
                     alt="pyramid image"
                     width={262}
                     height={262}
                     className="hidden md:block absolute -right-36 -top-32"
                     style={{
                        translateY: translateY,
                     }}
                  />
                  <motion.img
                     src={tubeImage.src}
                     alt="tube image"
                     width={248}
                     height={248}
                     className="hidden md:block absolute bottom-24 -left-36"
                     style={{
                        translateY: translateY,
                     }}
                  />
               </div>
            </div>
         </div>
      </section>
   );
};
