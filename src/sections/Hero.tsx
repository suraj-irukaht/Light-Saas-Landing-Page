'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ArrowRight from '@/assets/arrow-right.svg';
import HeroImg from '@/assets/cog.png';
import Cylinder from '@/assets/cylinder.png';
import Noodle from '@/assets/noodle.png';
import { useRef } from 'react';
import Image from 'next/image';

export const Hero = () => {
   const heroRef = useRef(null);
   const { scrollYProgress } = useScroll({
      target: heroRef,
      offset: ['start end', 'end start'],
   });
   const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
   return (
      <section
         ref={heroRef}
         className="relative pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]"
      >
         <div className="container">
            <div className="md:flex md:items-center">
               <div className="md:max-w-[500px]">
                  <div className="tag">Version 2.0 is here</div>
                  <h1 className="text-4xl md:text-7xl font-bold tracking-tight bg-gradient-to-t from-black to-blue-500 text-transparent bg-clip-text mb-4">
                     Unlock the power of your business
                  </h1>
                  <p className="text-lg text-gray-700">
                     SaaSify helps you create and manage your business more
                     efficiently.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                     <button className="btn btn-primary">Get for free</button>
                     <button className="btn btn-text">
                        <span>Learn more</span>
                        <ArrowRight className="w-5 h-5" />
                     </button>
                  </div>
               </div>
               <div className="md:flex-1 md:relative md:min-h-[700px]">
                  <motion.img
                     src={HeroImg.src}
                     alt="cog image"
                     className="md:absolute md:w-auto md:h-full md:-left-10 md:top-0 md:max-w-none"
                     animate={{
                        translateY: [-30, 30],
                     }}
                     transition={{
                        repeat: Infinity,
                        repeatType: 'mirror',
                        duration: 1.5,
                        ease: 'easeInOut',
                     }}
                  />
                  <motion.img
                     src={Cylinder.src}
                     alt="cylinder image"
                     width={220}
                     height={220}
                     className="hidden md:block md:absolute md:-top-8 md:-left-32"
                     style={{
                        translateY: translateY,
                     }}
                  />
                  <motion.img
                     src={Noodle.src}
                     alt="Noodle image"
                     width={220}
                     height={220}
                     className="hidden lg:block lg:absolute lg:-bottom-32 lg:right-0 "
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
