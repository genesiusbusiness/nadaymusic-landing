#!/bin/bash

# Script de déploiement GitHub + Vercel pour NadayMusic Landing

echo "🚀 Déploiement NadayMusic Landing Page"
echo "========================================"
echo ""

# Vérifier que nous sommes dans le bon dossier
if [ ! -f "package.json" ]; then
    echo "❌ Erreur: Ce script doit être exécuté depuis le dossier du projet"
    exit 1
fi

# Vérifier que git est initialisé
if [ ! -d ".git" ]; then
    echo "📦 Initialisation du repo Git..."
    git init
    git add .
    git commit -m "Initial commit: NadayMusic landing page"
fi

echo ""
echo "✅ Le code est prêt à être poussé sur GitHub"
echo ""
echo "📝 PROCHAINES ÉTAPES :"
echo ""
echo "1️⃣  Crée un nouveau repo sur GitHub :"
echo "   → https://github.com/new"
echo "   → Nom: nadaymusic-landing"
echo "   → Ne coche PAS 'Initialize with README'"
echo ""
echo "2️⃣  Une fois créé, exécute ces commandes :"
echo ""
echo "   git remote add origin https://github.com/TON_USERNAME/nadaymusic-landing.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3️⃣  Déploie sur Vercel :"
echo "   → https://vercel.com/new"
echo "   → Importe le repo GitHub"
echo "   → Clique sur 'Deploy'"
echo ""
echo "✨ C'est tout ! Ton site sera en ligne en 2 minutes."
echo ""

