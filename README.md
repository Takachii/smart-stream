# Smart Stream - Plateforme Web d'IPTV et de TV en Direct

Application web dynamique, modulaire et réactive développée en JavaScript Vanilla (ES6+) avec Framework CSS **(Tailwind CSS)** pour la consultation et la diffusion de chaînes de télévision en direct. L'application consomme une API REST simulée via **MockAPI**, gère proprement l'asynchronisme et propose une interface inspirée des systèmes Smart TV modernes.

# Contexte du Projet

Afin de déployer sa nouvelle plateforme web d'IPTV et de TV en direct, **Smart Stream** met à disposition des utilisateurs une interface ergonomique divisée en deux zones principales : un panneau latéral de navigation regroupant les chaînes par catégories à gauche, et une zone d'affichage et de prévisualisation interactive à droite.

# Fonctionnalités Principales

## 1. Catalogue des Chaînes & Navigation Latérale

- **Affichage Structuré :** Liste dynamique des chaînes regroupées par catégories (ex. *Documentaire*, *Sport*, *Cinéma*, etc.) affichant le numéro, le logo et le nom de chaque chaîne.
- **Sélection Active :** Clic sur une chaîne pour l'activer avec une mise en surbrillance visuelle dans le panneau latéral et une mise à jour instantanée de la zone principale.
- **Recherche TV en Direct :** Barre de recherche permettant un filtrage instantané et en temps réel des chaînes par **nom** ou par **numéro**.

## 2. Zone de Prévisualisation & Diffusion (Bonus)

- **Aperçu Dynamique :** Affichage automatique de l'image de couverture (`previewImage`), du numéro et du titre de la chaîne sélectionnée dans la zone principale à droite.
- **Lecteur Vidéo Interactif (Bonus) :** Intégration d'un lecteur média fonctionnel permettant de lancer la diffusion en direct du flux vidéo (`streamUrl` / HLS `.m3u8`) de la chaîne sélectionnée.
- **Guide Électronique des Programmes - EPG (Bonus) :** Affichage sous la zone principale des informations de diffusion en cours (*Now Playing*) : titre du programme, heures de début et de fin, ainsi qu'une barre de progression visuelle (`progressPercentage`) indiquant le temps écoulé.

## 3. Consommation d'API & Gestion des États Asynchrones

- **API REST MockAPI :** Création et hébergement de la ressource `channels` à partir d'un jeu de données structuré (`data.json`).
- **Requêtes HTTP (Fetch API) :** Récupération asynchrone des flux de données via `async/await` et `try/catch`, avec vérification explicite de `response.ok` et gestion des codes de statut HTTP (`200`, `404`, `500`).
- **Gestion des États UI :**
  - **Loading State :** Affichage d'un indicateur de chargement (*Spinner* / *Skeleton*) durant la récupération des données.
  - **Error State :** Affichage d'un message d'erreur clair et explicite en cas de problème réseau ou d'échec de la requête serveur.

## 4. Architecture & Bonnes Pratiques de Développement

- **Architecture Modulaire (ES Modules) :** Séparation stricte des responsabilités entre la couche d'accès aux données (`services/api.js`), la couche de rendu graphique (`ui/`) et la gestion des événements.
- **Workflow Git / GitHub :** Gestion de versions structurée autour des branches `main`, `develop` et des branches fonctionnelles (`feature/mockapi-service`, `feature/preview-ui`, `feature/search`), avec intégration par Pull Requests et respect des **Conventional Commits** (`feat:`, `fix:`, `style:`, `docs:`).


# Stack Technique

- **HTML5 :** Structure sémantique et accessible de l'interface.
- **Tailwind CSS :** Design responsive et reproduction fidèle de l'interface Smart TV exclusivement via des classes utilitaires.
- **JavaScript Vanilla (ES6+) :** Programmation asynchrone (`Promises`, `async/await`), `Fetch API`, manipulation dynamique du DOM, méthodes de traitement de tableaux (`map`, `filter`, `find`), destructuring et architecture modulaire (`import`/`export`).
- **MockAPI :** Backend simulé hébergeant le fichier `data.json` pour la distribution des flux TV et des données EPG.