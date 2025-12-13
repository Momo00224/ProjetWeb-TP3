/*
 * Script principal du site « Hollow Knight ». Ce fichier regroupe les
 * fonctions JavaScript nécessaires pour faire fonctionner les différentes
 * interactions : le carrousel d’images de la page d’accueil, la recherche
 * interactive et l’affichage de détails sur la page recherche, ainsi que
 * l’amélioration du formulaire d’inscription avec validation des champs et
 * affichage/masquage du mot de passe. Chaque portion de code est encapsulée
 * afin d’éviter les collisions de variables globales.
 */

document.addEventListener('DOMContentLoaded', () => {
  /**
   * Carrousel de la page d’accueil
   */
  (function initSlider() {
    const slider = document.querySelector('.slider');
    if (!slider) return;
    const slidesContainer = slider.querySelector('.slides');
    const slides = Array.from(slidesContainer.querySelectorAll('.slide'));
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');
    let currentIndex = 0;

    function showSlide(index) {
      // S’assure que l’index reste dans les limites
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;
      currentIndex = index;
      // Déplace la liste des images
      slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));
    // Possibilité d’ajouter un changement automatique toutes les 7 secondes
    setInterval(() => showSlide(currentIndex + 1), 7000);
  })();

  /**
   * Recherche interactive
   */
  (function initSearch() {
    const searchInput = document.querySelector('#search');
    const resultsList = document.querySelector('.search-results');
    const infoPanel = document.querySelector('.game-info');
    if (!searchInput || !resultsList || !infoPanel) return;

    // Base de données fictive des jeux
    const games = [
      {
        id: 'hollow',
        name: 'Hollow Knight',
        img: 'images/logo_hollow.png',
        version: '1.5.78.118833',
        filename: 'HollowKnight.exe',
        release: '2017',
        description: 'Vivez une aventure épique dans les profondeurs d’Hallownest et défiez des créatures mémorables.'
      },
      {
        id: 'silksong',
        name: 'Hollow Knight : Silksong',
        img: 'images/logo_silksong.png',
        version: '1.0.0',
        filename: 'Silksong.exe',
        release: '2024',
        description: 'Partez à l’aventure avec Hornet dans cette suite tant attendue, riche en nouveaux défis.'
      },
      {
        id: 'hungry',
        name: 'Hungry Knight',
        img: 'images/logo_hungry.png',
        version: '0.1 (beta)',
        filename: 'HungryKnight.exe',
        release: '2012',
        description: 'Un mini‑jeu créé lors d’un Game Jam, précurseur de Hollow Knight.'
      }
    ];

    // État interne pour savoir quel élément est sélectionné
    let selectedIndex = 0;

    /**
     * Rend la liste des résultats à partir du tableau filtré.
     */
    function renderResults(filtered) {
      resultsList.innerHTML = '';
      filtered.forEach((game, index) => {
        const li = document.createElement('li');
        li.dataset.index = index;
        li.innerHTML = `<img src="${game.img}" alt="${game.name}"><span>${game.name}</span>`;
        if (index === selectedIndex) li.classList.add('selected');
        li.addEventListener('click', () => {
          selectedIndex = index;
          renderResults(filtered);
          updateInfoPanel(filtered[index]);
        });
        resultsList.appendChild(li);
      });
    }

    /**
     * Met à jour le panneau d’information en fonction du jeu sélectionné.
     */
    function updateInfoPanel(game) {
      infoPanel.innerHTML = `
        <h4>${game.name}</h4>
        <p><strong>Version :</strong> ${game.version}</p>
        <p><strong>Fichier :</strong> ${game.filename}</p>
        <p><strong>Date de sortie :</strong> ${game.release}</p>
        <p>${game.description}</p>
        <div class="cta-buttons">
          <a href="#" title="Télécharger ${game.name}">Télécharger maintenant</a>
          <a href="about.html" title="En savoir plus">En savoir plus</a>
        </div>
      `;
    }

    /**
     * Filtre les résultats selon la saisie utilisateur.
     */
    function filterResults() {
      const query = searchInput.value.toLowerCase();
      const filtered = games.filter(g => g.name.toLowerCase().includes(query));
      // Réinitialise l’index sélectionné lorsque la recherche change
      selectedIndex = 0;
      renderResults(filtered);
      // Affiche les infos du premier résultat si présent
      if (filtered.length > 0) {
        updateInfoPanel(filtered[0]);
      } else {
        infoPanel.innerHTML = '<p>Aucun résultat trouvé.</p>';
      }
    }

    // Initialisation de la liste et du panneau
    renderResults(games);
    updateInfoPanel(games[0]);

    // Événement sur la barre de recherche
    searchInput.addEventListener('input', filterResults);
  })();

  /**
   * Formulaire d’inscription : validation et gestion du mot de passe
   */
  (function initInscription() {
    const form = document.querySelector('#signup-form');
    if (!form) return;
    const passwordInput = form.querySelector('#password');
    const confirmInput = form.querySelector('#confirm-password');
    const toggleBtn   = form.querySelector('#toggle-password');
    const errorMsg    = document.getElementById('form-error');
    const successMsg  = document.getElementById('form-success');

    // Affichage/masquage du mot de passe, inspiré d’un exemple de tutoriel【795171228332970†L903-L926】.
    toggleBtn.addEventListener('click', () => {
      const type = passwordInput.type === 'password' ? 'text' : 'password';
      passwordInput.type = type;
      confirmInput.type  = type;
      toggleBtn.textContent = (type === 'password') ? 'Afficher' : 'Masquer';
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Nettoyer messages précédents
      errorMsg.textContent = '';
      successMsg.textContent = '';
      // Récupère la valeur de chaque champ
      const prenom  = form.querySelector('#prenom').value.trim();
      const nom     = form.querySelector('#nom').value.trim();
      const email   = form.querySelector('#email').value.trim();
      const utilisateur = form.querySelector('#username').value.trim();
      const password = passwordInput.value;
      const confirm  = confirmInput.value;
      // Vérifie les champs obligatoires
      if (!prenom || !nom || !email || !utilisateur || !password || !confirm) {
        errorMsg.textContent = 'Veuillez remplir tous les champs.';
        return;
      }
      // Vérifie l’égalité des mots de passe
      if (password !== confirm) {
        errorMsg.textContent = 'Les mots de passe ne correspondent pas.';
        return;
      }
      // Si tout est correct
      successMsg.textContent = 'Inscription réussie !';
      // On pourrait envoyer les données au serveur ici…
      form.reset();
      toggleBtn.textContent = 'Afficher';
      passwordInput.type = 'password';
      confirmInput.type  = 'password';
    });
  })();
});