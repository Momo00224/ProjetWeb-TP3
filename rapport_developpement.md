# Rapport de développement

## Page 1 : informations

- **Nom et prénom :** Tounkara Mohamed
- **Numéro de DA :** 2539375
- **Coéquipier(s) :** *solo (je l'ai fait seul )

Ce rapport accompagne la remise du TP 3 de création d’un site web. Le site livré respecte la maquette Figma réalisée au TP 1 et répond aux exigences additionnelles : intégration d’une vidéo YouTube, d’une carte Google Maps, amélioration du formulaire avec JavaScript et ajout d’une page d’inscription. L’ensemble du site est en français et utilise une identité visuelle sombre inspirée de *Hollow Knight*.

## Page 2 : contraintes et améliorations

### Contraintes techniques rencontrées

1. **Intégration fidèle de la maquette Figma :** reproduire la disposition des éléments (barre de navigation, sections et cartes) a demandé de nombreuses ajustements CSS. Les positions exactes et les espacements de Figma n’étant pas toujours compatibles avec un site responsive, certains alignements ont été recalculés pour s’adapter aux différents écrans tout en restant proches de la maquette.

2. **Images et assets :** la maquette originale utilise des images spécifiques du jeu *Hollow Knight*. Pour des raisons de droits et d’accessibilité, des images d’ambiance générées (grottes, cristaux, ville gothique) ont été utilisées à la place. Les logos des jeux ont été recréés sous forme d’icônes abstraites. Ce choix permet de conserver l’atmosphère du prototype sans réutiliser des assets sous licence.

3. **Vidéo YouTube et carte Google Maps :** l’intégration de la vidéo s’est faite en utilisant le code d’intégration fourni par YouTube via le bouton « Partager » → « Intégrer »【176902444526170†L45-L50】. De même, la carte a été insérée en récupérant le code fourni par Google Maps pour l’adresse de l’organisation, comme expliqué dans la documentation【428095736470677†L281-L305】. Ces iframes imposent une taille fixe dans la maquette; des styles réactifs ont été ajoutés pour qu’ils restent proportionnés sur mobile.

4. **Formulaire interactif :** l’amélioration du formulaire a nécessité l’utilisation de JavaScript. Les entrées sont mises en évidence lors du focus grâce à des styles inspirés d’exemples de bonne pratique en CSS【206670398887897†L8-L15】. La fonctionnalité d’affichage/masquage du mot de passe s’inspire d’un tutoriel où un bouton modifie l’attribut `type` du champ de mot de passe【795171228332970†L903-L926】. La validation empêche la soumission en cas de champ vide ou de mots de passe différents et affiche un message approprié.

### Améliorations apportées par rapport au prototype Figma

1. **Page d’inscription dédiée :** une page d’inscription complète a été ajoutée avec vérification des champs, alternance de visibilité du mot de passe et messages de succès ou d’erreur. Cette page n’était pas présente dans la maquette d’origine, mais répond aux consignes de TP et améliore l’expérience utilisateur.

2. **Moteur de recherche interactif :** la page de recherche propose un champ filtrant les jeux en temps réel. Les résultats s’affichent sous forme de liste avec surlignage de l’élément sélectionné, et le panneau d’information se met à jour dynamiquement. Ce comportement interactif n’était qu’esquissé dans le prototype statique.

3. **Mode sombre unifié :** l’ensemble des pages adopte un thème sombre et des arrière‑plans étoilés rappelant l’univers de *Hollow Knight*. Des variables CSS permettent d’ajuster les couleurs et les espacements facilement. Les conteneurs semi‑transparents, les bordures arrondies et les ombres améliorent la lisibilité et la profondeur.

4. **Nouvelle page de contact** : en plus des pages prévues, une page de contact a été ajoutée avec un formulaire simple et une carte Google Maps intégrée montrant la localisation fictive du studio à Adélaïde. Cela enrichit la navigation et respecte l’exigence d’intégrer une carte.

5. **Responsive design** : contrairement au prototype qui se concentrait sur une résolution unique, ce site a été conçu pour s’adapter aux grands écrans comme aux mobiles. La navigation est collée en haut de la page et passe en colonne sur les petits écrans (un bouton hamburger pourrait être ajouté si souhaité).

6. **Commentaires et organisation du code :** tous les fichiers HTML, CSS et JavaScript sont formatés et commentés pour en faciliter la lecture. Des variables CSS sont utilisées pour centraliser les couleurs. Le JavaScript est structuré en modules auto‑exécutables pour isoler les fonctionnalités.

En résumé, le site livré dépasse les exigences minimales en ajoutant des pages et des fonctionnalités, tout en restant fidèle à l’esthétique du prototype Figma. Des compromis ont été nécessaires pour respecter les contraintes techniques (responsivité, droits d’auteur, accessibilité), mais les améliorations apportées (interactivité, formulaire complet, carte, design unifié) contribuent à une expérience utilisateur plus riche et professionnelle.