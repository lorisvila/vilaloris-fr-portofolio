# VILA Loris — Portfolio

[![Angular](https://img.shields.io/badge/Angular-18.x-DD0031.svg)](https://angular.io/)
[![wcs-core](https://img.shields.io/badge/wcs--core-5.x-0078D4.svg)](https://gitlab.dev.socgen?search=wcs-core)
[![ngx-translate](https://img.shields.io/badge/%40ngx--translate-17.x-1B6AC2.svg)](https://github.com/ngx-translate/core)
[![ngx-formly](https://img.shields.io/badge/%40ngx--formly-6.x-00A6ED.svg)](https://github.com/ngx-formly/ngx-formly)
[![ngx-toastr](https://img.shields.io/badge/ngx--toastr-19.x-FFB300.svg)](https://github.com/scttcper/ngx-toastr)


Une première version du portfolio personnel de Loris VILA, développée en Angular. Le site présente mes projets, mon parcours et un formulaire de contact, avec une attention particulière portée à l'ergonomie et au design (utilisation des composants WCS).

Remerciements
-------------
Un grand merci à l'équipe de développement et à la librairie `wcs-core` (dev.SNCF) — leurs composants Web / Angular ont permis d'accélérer la mise en place d'une interface professionnelle et cohérente.

Statut
------
Cette application est une **v1**. D'autres pages et améliorations sont prévues : enrichissement des pages projets, ajout de pages détaillées, optimisations de performance, et amélioration de l'accessibilité.

Fonctionnalités clés
--------------------
- Portfolio avec pages : Accueil, Projets, Parcours, Contact (et pages d'erreurs)
- Design basé sur les composants WCS
- Internationalisation (EN/FR) en runtime via `@ngx-translate/core` avec un sélecteur de langue (wcs-switch) dans la barre supérieure
- Formulaire de contact construit avec Formly
- Toastr pour les notifications

Installation (Windows — PowerShell)
-----------------------------------
Ouvrez un terminal PowerShell dans la racine du projet puis :

```powershell
# installer les dépendances
npm install

# démarrer le serveur de dev (ouvre http://localhost:4200/)
npx ng serve --open

# ou :
# npm run start

# build de production
npm run build
```

Remarque : si `npm install` pose des problèmes de dépendances (peer conflicts), utiliser `npm install --legacy-peer-deps`.

Traductions
-----------
Les fichiers de traduction se trouvent dans :

- `src/assets/i18n/fr.json` (français)
- `src/assets/i18n/en.json` (anglais)

Le switch de langue est dans la barre de header (EN / FR). Les templates utilisent la pipe `translate` (`{{ 'KEY.PATH' | translate }}`).

Fichiers importants modifiés / ajoutés
-------------------------------------
- `src/app/app.module.ts` — configuration d'`@ngx-translate/core` et import HttpClientModule
- `src/app/app.component.html` / `app.component.ts` — ajout du wcs-switch pour changer la langue et intégration de la pipe translate
- `src/assets/i18n/en.json`, `src/assets/i18n/fr.json` — fichiers de traduction
- Plusieurs templates de pages (`src/app/pages/*`) convertis pour utiliser des clés de traduction
- Styles CSS dédiés pour améliorer l'aération des pages projets et le header

Développement & bonnes pratiques
-------------------------------
- Garder les clés de traduction courtes et hiérarchiques (ex : `PROJECTS.PROJECT1.TITLE`)
- Préférer le chargement paresseux (lazy loading) des traductions si le projet grossit
- Commiter régulièrement et créer des branches par feature

Remarques finales
-----------------
Ceci est une première version — d'autres pages et contenus seront ajoutés prochainement. Si tu veux que j'intègre la persistance de la langue (localStorage), un indicateur de statut de projet plus détaillé, ou des pages additionnelles (ex : blog technique, galerie), dis-moi ce que tu préfères et je l'implémente.

---

Bonne lecture et merci encore à l'équipe WCS (dev.SNCF) pour les composants !
