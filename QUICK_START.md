# 🚀 Démarrage Rapide

## Installation & Lancement

```bash
cd "/Users/taytonaday/Desktop/Workplace Flynesis All/NadayEntertainementApp/NadayMusic/NadayMusicSiteDownload"
npm install
npm run dev
```

Ouvrez **http://localhost:3000** dans votre navigateur.

## 📸 Assets à Ajouter

Placez ces fichiers dans le dossier `/public` :

1. **iphone-frame.png** - Mockup du cadre iPhone (recommandé: 400x800px)
2. **app-shot.png** - Capture d'écran de l'app (recommandé: 1200x630px pour SEO)

**Note** : Si les images ne sont pas présentes, un fallback CSS élégant sera affiché automatiquement.

## ✨ Fonctionnalités

- ✅ Design premium dark + gradient Naday (violet/rose)
- ✅ Animations fluides avec Framer Motion
- ✅ Responsive mobile/desktop
- ✅ Modal "Coming soon" avec formulaire email (sans backend)
- ✅ SEO optimisé (meta tags, OG image)
- ✅ Accessibilité (ARIA, focus states)

## 🎨 Personnalisation

- **Couleurs** : `tailwind.config.js`
- **Contenu Hero** : `components/Hero.tsx`
- **Features** : `components/FeatureCards.tsx`
- **Meta SEO** : `app/layout.tsx`

## 📦 Déploiement

### Vercel (Recommandé)
1. Push sur GitHub
2. Importer sur [vercel.com](https://vercel.com)
3. Déployer automatiquement

### Netlify
1. Push sur GitHub
2. Importer sur [netlify.com](https://netlify.com)
3. Build: `npm run build`
4. Publish: `.next`

---

**Prêt à l'emploi ! 🎉**

