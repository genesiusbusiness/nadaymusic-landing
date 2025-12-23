'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function PhoneMockup() {
  const [hasFrameImage, setHasFrameImage] = useState(true)
  const [hasAppImage, setHasAppImage] = useState(true)

  return (
    <motion.div
      className="relative w-full max-w-[280px] mx-auto lg:mx-0"
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {/* iPhone Frame - Si l'image existe, sinon on crée un mockup CSS */}
      <div className="relative w-full">
        {hasFrameImage ? (
          <>
            {/* Frame iPhone */}
            <div className="relative z-10 w-full">
              <Image
                src="/iphone-frame.png"
                alt="iPhone Mockup"
                width={400}
                height={800}
                className="w-full h-auto drop-shadow-2xl object-contain"
                priority
                onError={() => setHasFrameImage(false)}
              />
            </div>
            
            {/* Screenshot de l'app à l'intérieur du téléphone */}
            {hasAppImage && (
              <div className="absolute inset-[7%] md:inset-[6%] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden z-0">
                <Image
                  src="/app-shot.png"
                  alt="NadayMusic App Screenshot"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 280px, 280px"
                  priority
                  onError={() => setHasAppImage(false)}
                />
              </div>
            )}
          </>
        ) : (
          /* Fallback CSS si le frame n'existe pas mais on a l'image de l'app */
          <div className="relative bg-gradient-naday rounded-[3.5rem] p-2 shadow-2xl w-full">
            <div className="w-full aspect-[9/19.5] bg-naday-dark rounded-[3rem] flex items-center justify-center relative overflow-hidden">
              {hasAppImage ? (
                <Image
                  src="/app-shot.png"
                  alt="NadayMusic App Screenshot"
                  fill
                  className="object-cover object-center rounded-[3rem]"
                  sizes="(max-width: 768px) 280px, 280px"
                  priority
                  onError={() => setHasAppImage(false)}
                />
              ) : (
                <>
                  {/* Simuler un écran iPhone */}
                  <div className="absolute inset-0 bg-gradient-to-br from-naday-primary/20 to-naday-secondary/20" />
                  <div className="relative z-10 text-center p-8">
                    <p className="text-2xl font-bold bg-gradient-naday bg-clip-text text-transparent">
                      NadayMusic
                    </p>
                    <p className="text-gray-400 mt-2 text-sm">
                      Placez app-shot.png dans /public
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-naday opacity-20 blur-3xl -z-10 rounded-full" />
    </motion.div>
  )
}

