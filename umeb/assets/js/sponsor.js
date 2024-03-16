document.addEventListener('DOMContentLoaded', function() {
    loadSponsorSections('/assets/data/sponsors/platinum.csv')
    .then(loadSponsorSections('/assets/data/sponsors/gold.csv'))
    .then(loadSponsorLogos('/assets/data/sponsors/silver.csv'))
    .then(loadSponsorLogos('/assets/data/sponsors/bronze.csv'));
});

function loadSponsorSections(filePath) {
    fetch(filePath)
    .then(response => response.text())
    .then(data => {
        const sponsorsContainer = document.getElementById('umeb-sponsors');
        parseCSV(data).forEach((sponsor, index) => {
            const sponsor = createRow(sponsor, index);
            sponsorsContainer.appendChild(sponsor);
        });
    })
    .catch(err => console.error('Error loading CSV:', err));
}

function loadSponsorLogos(filePath) {
    fetch(filePath)
    .then(response => response.text())
    .then(data => {
        const sponsorsContainer = document.getElementById('umeb-sponsors');
        parseCSV(data).forEach((sponsor, index) => {
            const sponsor = createCard(sponsor, index);
            sponsorsContainer.appendChild(sponsor);
        });
    })
    .catch(err => console.error('Error loading CSV:', err));
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
    sponsorCard.innerHTML = `<img src="${sponsor.imagePath}" alt="${sponsor.name}" class="sponsor-card-logo">`;
    return sponsorCard;
}
