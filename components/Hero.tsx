'use client'

import { motion } from 'framer-motion'
import PhoneMockup from './PhoneMockup'

export default function Hero() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left: Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center lg:text-left"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-naday bg-clip-text text-transparent"
        >
          NadayMusic
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 text-balance"
        >
          La plateforme musicale ouverte à tous.
          <br />
          Crée, poste et partage ta musique librement.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-base md:text-lg text-gray-400 mb-8 text-balance"
        >
          Que tu sois débutant, passionné ou artiste confirmé,
          <br />
          tout le monde peut poster sa musique comme il le veut.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4 mb-10 text-left max-w-lg mx-auto lg:mx-0"
        >
          <li className="text-gray-300 text-lg">
            Un feed immersif pour découvrir des sons en défilement plein écran.
          </li>
          <li className="text-gray-300 text-lg">
            Poste ta musique avec une cover, des likes, des commentaires et des reposts.
          </li>
          <li className="text-gray-300 text-lg">
            Mic: discussions texte éphémères (24h) pour échanger et réagir.
          </li>
        </motion.ul>
      </motion.div>

      {/* Right: Phone Mockup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex justify-center lg:justify-end"
      >
        <PhoneMockup />
      </motion.div>
    </div>
  )
}

