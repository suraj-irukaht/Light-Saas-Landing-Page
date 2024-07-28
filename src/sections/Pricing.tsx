import CheckIcon from '@/assets/check.svg';
const pricingTiers = [
   {
      title: 'Free',
      monthlyPrice: 0,
      buttonText: 'Get started for free',
      popular: false,
      inverse: false,
      features: [
         'Up to 5 project members',
         'Unlimited tasks and projects',
         '2GB storage',
         'Integrations',
         'Basic support',
      ],
   },
   {
      title: 'Pro',
      monthlyPrice: 9,
      buttonText: 'Sign up now',
      popular: true,
      inverse: true,
      features: [
         'Up to 50 project members',
         'Unlimited tasks and projects',
         '50GB storage',
         'Integrations',
         'Priority support',
         'Advanced support',
         'Export support',
      ],
   },
   {
      title: 'Business',
      monthlyPrice: 19,
      buttonText: 'Sign up now',
      popular: false,
      inverse: false,
      features: [
         'Up to 5 project members',
         'Unlimited tasks and projects',
         '200GB storage',
         'Integrations',
         'Dedicated account manager',
         'Custom fields',
         'Advanced analytics',
         'Export capabilities',
         'API access',
         'Advanced security features',
      ],
   },
];

export const Pricing = () => {
   return (
      <section className="py-24 bg-white">
         <div className="container">
            <div className="text-center max-w-[540px] mx-auto">
               <h2 className="text-3xl font-bold tracking-tighter mb-3">
                  Pricing
               </h2>
               <p className="text-lg text-gray-700">
                  Free forever. Upgrade for unlimited tasks, better security,
                  and exclusive features.
               </p>
            </div>
            <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end">
               {pricingTiers.map(
                  ({
                     title,
                     monthlyPrice,
                     buttonText,
                     popular,
                     inverse,
                     features,
                  }) => (
                     <div
                        key={title}
                        className={`p-10 rounded-3xl w-full max-w-sm ${
                           inverse === true
                              ? 'bg-black text-white/50 shadow-blue-950'
                              : 'bg-white'
                        } shadow-black/15 shadow-sm`}
                     >
                        <div className="flex item-center justify-between">
                           <h3
                              className={`text-lg font-bold text-black/50 ${
                                 inverse === true && 'text-white/60'
                              }`}
                           >
                              {title}
                           </h3>
                           {popular === true && (
                              <div className="inline-flex items-center px-4 py-1.5 rounded-xl border border-white/20">
                                 <span className="bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#71c2ef,#3bffff,#dd7ddf)] text-transparent bg-clip-text">
                                    Popular
                                 </span>
                              </div>
                           )}
                        </div>
                        <div className="flex gap-1 mt-5 items-baseline">
                           <span
                              className={`text-4xl tracking-tighter font-bold leading-none ${
                                 inverse === true && 'text-white'
                              }`}
                           >
                              ${monthlyPrice}
                           </span>
                           <span
                              className={`font-bold tracking-tight leading-none ${
                                 inverse === true
                                    ? 'text-white'
                                    : 'text-black/50'
                              }`}
                           >
                              /month
                           </span>
                        </div>
                        <button
                           className={`btn btn-primary w-full mt-8 ${
                              inverse === true && 'bg-white text-black'
                           }`}
                        >
                           {buttonText}
                        </button>
                        <ul className="flex flex-col gap-5 mt-8">
                           {features.map((feature, ind) => (
                              <li
                                 key={ind}
                                 className="text-sm flex item-center gap-4"
                              >
                                 <CheckIcon className="w-5 h-5" />
                                 <span>{feature}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                  )
               )}
            </div>
         </div>
      </section>
   );
};
