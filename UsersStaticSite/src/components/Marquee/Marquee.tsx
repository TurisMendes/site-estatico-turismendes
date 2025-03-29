import React from "react";
import { motion } from "framer-motion";

const logos = [
  {
    title: 'Realização',
    src: './src/assets/logos/SomosDev.svg'
  },
  {
    title: 'Idealização',
    src: './src/assets/logos/ColetivoCafeina.svg'
  },
  {
    title: 'Fomentadores',
    src: [
      './src/assets/logos/PrefeituraMendes.svg',
      './src/assets/logos/PNAB.svg',
      './src/assets/logos/GovernoFederal.svg'
    ]
  }
];


const duplicatedLogos = [...logos, ...logos, ...logos];

function Marquee(): React.ReactNode {

  return (
    <section className="w-full pb-10 overflow-hidden">
      <motion.div
        className="w-full flex whitespace-wrap"
        animate={{ x: [0, -1500] }}
        transition={{ duration: 50, repeat: Infinity, repeatType: "loop", ease: "linear" }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="flex flex-row items-center gap-[97px] ml-[97px]">
            <div className="w-[2px] h-40 bg-gray-200" />
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-lg font-bold text-gray-700 dark:text-white text-center">{logo.title}</h2>

              <div className="flex flex-row">
                {Array.isArray(logo.src) ? (
                  <div className="flex flex-row items-center gap-8">
                    {logo.src.map((src, imgIndex) => (
                      <a
                        key={imgIndex}
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={src}
                          alt={`${logo.title} ${imgIndex + 1}`}
                          className={`max-w-[250px] h-[80px] object-cover dark:grayscale`}
                        />
                      </a>
                    ))}
                  </div>
                ) : (
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={logo.src}
                      alt={logo.title}
                      className="max-w-[300px] h-[80px] object-cover dark:grayscale"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section >
  );
}

export default Marquee;
