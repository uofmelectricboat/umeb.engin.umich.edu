document.addEventListener('DOMContentLoaded', function() {
    loadSponsorSections('./assets/data/sponsors/platinum.csv', 'Platinum')
    .then(() => loadSponsorSections('./assets/data/sponsors/gold.csv', 'Gold'))
    .then(() => loadSponsorLogos('./assets/data/sponsors/silver.csv', 'Silver'))
    .then(() => loadSponsorLogos('./assets/data/sponsors/bronze.csv', 'Bronze'))
    .catch(err => console.error('Error loading CSV:', err));
});

function loadSponsorSections(filePath, banner) {
    const sponsorsContainer = document.getElementById('umeb-sponsors');
    loadBanner(sponsorsContainer, banner);

    return fetch(filePath)
    .then(response => response.text())
    .then(data => {
        parseCSV(data).forEach((sponsor, index) => {
            const sponsorSection = createRow(sponsor, index);
            sponsorsContainer.appendChild(sponsorSection);
        });
    });
}

function loadSponsorLogos(filePath, banner) {
    const sponsorsContainer = document.getElementById('umeb-sponsors');
    loadBanner(sponsorsContainer, banner);
    
    const cardContainer = document.createElement('div');
    cardContainer.className = 'sponsor-card-container';
    sponsorsContainer.appendChild(cardContainer);

    return fetch(filePath)
    .then(response => response.text())
    .then(data => {
        parseCSV(data).forEach((sponsor, index) => {
            const sponsorCard = createCard(sponsor, index);
            cardContainer.appendChild(sponsorCard);
        });
    });
}

function createRow(sponsor, index) {
    const section = document.createElement('div');
    section.className = index % 2 === 0 ? 'even-row' : 'odd-row';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'section-content';
    contentDiv.innerHTML = `<h2>${sponsor[0]}</h2><p>${sponsor[3]}</p>`;
    
    const imageDiv = document.createElement('div');
    imageDiv.className = 'section-image';
    imageDiv.innerHTML = `<img src="${sponsor[1]}" alt="${sponsor[0]}">`;

    section.appendChild(contentDiv);
    section.appendChild(imageDiv);
    
    return section;
}

function createCard(sponsor, index) {
    const sponsorCard = document.createElement('div');
    sponsorCard.className = 'sponsor-card';
    sponsorCard.innerHTML = `<img src="${sponsor[1]}" alt="${sponsor[0]}" class="sponsor-card-logo">`;
    return sponsorCard;
}

function loadBanner(container, banner) {
    const header = document.createElement('div');
    header.className = 'sub-banner';
    header.innerHTML = `<p>${banner}</p>`;
    container.appendChild(header);
}
