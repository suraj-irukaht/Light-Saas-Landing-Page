'use client';
import avatar1 from '@/assets/avatar-1.png';
import avatar2 from '@/assets/avatar-2.png';
import avatar3 from '@/assets/avatar-3.png';
import avatar4 from '@/assets/avatar-4.png';
import avatar5 from '@/assets/avatar-5.png';
import avatar6 from '@/assets/avatar-6.png';
import avatar7 from '@/assets/avatar-7.png';
import avatar8 from '@/assets/avatar-8.png';
import avatar9 from '@/assets/avatar-9.png';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

interface PropsType {
   testimonials: {
      text: string;
      imageSrc: string;
      name: string;
      username: string;
   }[];
   className?: string;
   duration?: number;
}

const testimonials = [
   {
      text: 'As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.',
      imageSrc: avatar1.src,
      name: 'Jamie Rivera',
      username: '@jamietechguru00',
   },
   {
      text: "Our team's productivity has skyrocketed since we started using this tool. ",
      imageSrc: avatar2.src,
      name: 'Josh Smith',
      username: '@jjsmith',
   },
   {
      text: 'This app has completely transformed how I manage my projects and deadlines.',
      imageSrc: avatar3.src,
      name: 'Morgan Lee',
      username: '@morganleewhiz',
   },
   {
      text: 'I was amazed at how quickly we were able to integrate this app into our workflow.',
      imageSrc: avatar4.src,
      name: 'Casey Jordan',
      username: '@caseyj',
   },
   {
      text: 'Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.',
      imageSrc: avatar5.src,
      name: 'Taylor Kim',
      username: '@taylorkimm',
   },
   {
      text: 'The customizability and integration capabilities of this app are top-notch.',
      imageSrc: avatar6.src,
      name: 'Riley Smith',
      username: '@rileysmith1',
   },
   {
      text: 'Adopting this app for our team has streamlined our project management and improved communication across the board.',
      imageSrc: avatar7.src,
      name: 'Jordan Patels',
      username: '@jpatelsdesign',
   },
   {
      text: 'With this app, we can easily assign tasks, track progress, and manage documents all in one place.',
      imageSrc: avatar8.src,
      name: 'Sam Dawson',
      username: '@dawsontechtips',
   },
   {
      text: 'Its user-friendly interface and robust features support our diverse needs.',
      imageSrc: avatar9.src,
      name: 'Casey Harper',
      username: '@casey09',
   },
];

const TestimonialColumns = ({
   testimonials,
   className,
   duration,
}: PropsType) => {
   return (
      <div className={`${className}`}>
         <motion.div
            className="flex flex-col gap-6 items-center pb-6"
            animate={{
               translateY: '-50%',
            }}
            transition={{
               duration: duration || 10,
               ease: 'linear',
               repeat: Infinity,
               repeatType: 'loop',
            }}
         >
            {[...new Array(2)].fill(0).map((_, index) => (
               <React.Fragment key={index}>
                  {testimonials.map(
                     ({ text, imageSrc, name, username }, index) => (
                        <div
                           key={index}
                           className="p-10 rounded-3xl w-full max-w-sm shadow-black/15 shadow-sm"
                        >
                           <div className="mb-3">{text}</div>
                           <div className="flex items-center gap-2">
                              <Image
                                 src={imageSrc}
                                 alt={text}
                                 className="w-10 h-10 rounded-full"
                                 width={40}
                                 height={40}
                              />
                              <div className="flex flex-col gap-1 leading-5">
                                 <div className="font-medium tracking-tighter">
                                    {name}
                                 </div>
                                 <div className="tracking-tighter">
                                    {username}
                                 </div>
                              </div>
                           </div>
                        </div>
                     )
                  )}
               </React.Fragment>
            ))}
         </motion.div>
      </div>
   );
};

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6);

export const Testimonials = () => {
   return (
      <section className="py-24 bg-white">
         <div className="container">
            <div className="text-center max-w-[540px] mx-auto">
               <div className="tag">Version 2.0 is here</div>
               <h2 className="text-3xl font-bold tracking-tighter mb-3">
                  What our users say
               </h2>
               <p className="text-lg text-gray-700">
                  From intuitive design to powerful features, our app has become
                  an essential tool for users around the world.
               </p>
            </div>
            <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] max-h-[738px] overflow-hidden">
               <TestimonialColumns testimonials={firstColumn} duration={12} />
               <TestimonialColumns
                  testimonials={secondColumn}
                  className="hidden md:block"
                  duration={20}
               />
               <TestimonialColumns
                  testimonials={thirdColumn}
                  className="hidden lg:block"
                  duration={17}
               />
            </div>
         </div>
      </section>
   );
};
