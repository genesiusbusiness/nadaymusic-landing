# 🚀 Déploiement GitHub + Vercel

## Étape 1 : Créer le repo GitHub

1. Va sur [github.com](https://github.com) et crée un nouveau repository
2. Nom suggéré : `nadaymusic-landing`
3. **Ne coche PAS** "Initialize with README" (on a déjà tout)
4. Clique sur "Create repository"

## Étape 2 : Connecter et pousser le code

Une fois le repo créé, GitHub te donnera une URL. Remplace `YOUR_USERNAME` par ton username GitHub dans cette commande :

```bash
cd "/Users/taytonaday/Desktop/Workplace Flynesis All/NadayEntertainementApp/NadayMusic/NadayMusicSiteDownload"

# Ajouter le remote GitHub
git remote add origin https://github.com/YOUR_USERNAME/nadaymusic-landing.git

# Pousser le code
git branch -M main
git push -u origin main
```

## Étape 3 : Déployer sur Vercel

### Option A : Via l'interface Vercel (Recommandé)

1. Va sur [vercel.com](https://vercel.com) et connecte-toi
2. Clique sur "Add New Project"
3. Importe le repo GitHub `nadaymusic-landing`
4. Vercel détectera automatiquement Next.js
5. Clique sur "Deploy" (pas besoin de changer les settings)
6. Attends 1-2 minutes → ton site sera en ligne !

### Option B : Via Vercel CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Dans le dossier du projet
cd "/Users/taytonaday/Desktop/Workplace Flynesis All/NadayEntertainementApp/NadayMusic/NadayMusicSiteDownload"

# Déployer
vercel
```

## ✅ C'est tout !

Une fois déployé, tu auras une URL du type : `https://nadaymusic-landing.vercel.app`

Tu peux aussi ajouter un domaine personnalisé dans les settings Vercel.

