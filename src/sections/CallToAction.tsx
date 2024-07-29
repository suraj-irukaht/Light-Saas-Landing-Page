'use client';
import ArrowRight from '@/assets/arrow-right.svg';
import starImg from '@/assets/star.png';
import springImg from '@/assets/spring.png';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
export const CallToAction = () => {
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
            <div className="section-heading relative">
               <h2 className="section-title">Sign up for free today</h2>
               <p>
                  Celebrate the joy of accomplishment with an app designed to
                  track your progress and motivate your efforts.
               </p>
               <div className="flex items-center justify-center gap-2 mt-4">
                  <button className="btn btn-primary">Get for free</button>
                  <button className="btn btn-text">
                     <span>Learn more</span>
                     <ArrowRight className="w-5 h-5" />
                  </button>
               </div>
               <motion.img
                  src={starImg.src}
                  alt="start img"
                  width={360}
                  className="absolute -top-[136px] -left-[390px]"
                  style={{
                     translateY: translateY,
                  }}
               />
               <motion.img
                  src={springImg.src}
                  alt="spring img"
                  width={360}
                  className="absolute -top-[250px] -right-[390px]"
                  style={{
                     translateY: translateY,
                  }}
               />
            </div>
         </div>
      </section>
   );
};
