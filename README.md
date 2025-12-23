# NadayMusic Landing Page

Site de présentation premium pour l'application NadayMusic. Une landing page moderne, responsive et élégante avec design dark + gradient Naday.

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📦 Build Production

```bash
# Créer le build de production
npm run build

# Lancer le serveur de production
npm start
```

## 🎨 Assets Requis

Placez les images suivantes dans le dossier `/public` :

- `iphone-frame.png` - Mockup du cadre iPhone (400x800px recommandé)
- `app-shot.png` - Capture d'écran de l'app NadayMusic (1200x630px pour OG image)
- `logo.svg` - Logo NadayMusic (optionnel)

**Note** : Si les images ne sont pas présentes, un fallback CSS sera affiché automatiquement.

## 🛠️ Stack Technique

- **Next.js 14+** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Framer Motion** (animations)
- **Responsive Design** (mobile-first)

## 📱 Fonctionnalités

- ✅ Hero section avec mockup iPhone animé
- ✅ Section features avec cartes glassmorphism
- ✅ Boutons store (iOS & Android) avec badges "Coming soon"
- ✅ Modal "Bientôt disponible" avec formulaire email (sans backend)
- ✅ Design premium dark + gradient Naday
- ✅ Animations fluides et modernes
- ✅ SEO optimisé (meta tags, OG image)
- ✅ Accessibilité (ARIA, focus states)

## 🎯 Déploiement

### Vercel (Recommandé)

1. Push le code sur GitHub
2. Importer le projet sur [Vercel](https://vercel.com)
3. Déployer automatiquement

### Netlify

1. Push le code sur GitHub
2. Importer le projet sur [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

## 📝 Structure

```
├── app/
│   ├── layout.tsx       # Layout principal + meta SEO
│   ├── page.tsx         # Page d'accueil
│   └── globals.css      # Styles globaux
├── components/
│   ├── Hero.tsx         # Section hero
│   ├── PhoneMockup.tsx  # Mockup iPhone avec screenshot
│   ├── FeatureCards.tsx # Cartes de fonctionnalités
│   ├── StoreButtons.tsx # Boutons App Store / Google Play
│   └── ComingSoonModal.tsx # Modal inscription
└── public/              # Assets statiques
```

## 🎨 Personnalisation

### Couleurs Naday

Les couleurs sont définies dans `tailwind.config.js` :

- `naday-primary`: #8B5CF6 (violet)
- `naday-secondary`: #EC4899 (rose)
- `naday-dark`: #0A0A0F
- `naday-darker`: #050508

### Modifier le contenu

- **Hero** : `components/Hero.tsx`
- **Features** : `components/FeatureCards.tsx`
- **Meta SEO** : `app/layout.tsx`

## 📄 Licence

© 2024 Naday Entertainment — NadayMusic

