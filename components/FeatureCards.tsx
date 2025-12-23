'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: 'Découverte rapide',
    description: 'Des sons nouveaux en quelques secondes, sans friction. Un feed immersif qui te fait découvrir des talents inconnus instantanément.',
  },
  {
    title: 'Création simple',
    description: 'Une cover, un son, et c\'est posté. Partage tes créations avec cover art personnalisé. Likes, commentaires, reposts : tout pour créer une communauté autour de la musique.',
  },
  {
    title: 'Communauté',
    description: 'Réactions, commentaires, reposts et discussions Mic. Exprime-toi avec des discussions texte éphémères de 24h. Partage tes pensées, tes inspirations, connecte-toi avec d\'autres créateurs.',
  },
]

export default function FeatureCards() {
  return (
    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="glass rounded-3xl p-8 lg:p-10 hover:glass-strong transition-all duration-300 group"
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 bg-gradient-naday bg-clip-text text-transparent">
            {feature.title}
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  )
}

