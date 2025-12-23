import Hero from '@/components/Hero'
import FeatureCards from '@/components/FeatureCards'
import StoreButtons from '@/components/StoreButtons'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient glow */}
        <div className="absolute inset-0 bg-gradient-naday-subtle opacity-30 animate-glow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Hero />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-naday bg-clip-text text-transparent">
              Pourquoi NadayMusic ?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Une expérience unique pour découvrir et partager de la musique
            </p>
          </div>
          <FeatureCards />
        </div>
      </section>

      {/* Pour tout le monde Section */}
      <section className="relative py-24 lg:py-32 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-naday bg-clip-text text-transparent">
                Pour tout le monde.
              </h2>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                NadayMusic n'est pas réservé aux artistes professionnels.
                <br />
                Si tu aimes créer de la musique, tu peux poster.
                <br />
                Pas besoin de label, pas besoin de plateforme externe.
                <br />
                <span className="text-naday-primary font-semibold">Tu crées, tu postes, tu partages.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Créer librement Section */}
      <section className="relative py-24 lg:py-32 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-naday bg-clip-text text-transparent">
                Créer librement.
              </h2>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                Ici, pas de barrière.
                <br />
                Tu postes ta musique comme tu le souhaites,
                <br />
                pour la partager, la tester, ou simplement t'exprimer.
                <br />
                <span className="text-naday-primary font-semibold">NadayMusic est un espace libre de création et de découverte.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="relative py-24 lg:py-32 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Bientôt disponible
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-12">
              NadayMusic arrive bientôt sur iOS et Android. 
              <br />
              Sois le premier à être prévenu !
            </p>
            <StoreButtons />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p className="text-sm">
              © {new Date().getFullYear()} Naday Entertainment — NadayMusic
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

