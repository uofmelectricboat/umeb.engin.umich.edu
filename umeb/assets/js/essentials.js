document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
    loadHeros();
});

/*********************
SITE HEADER
*********************/

function loadHeader() {
    document.getElementById("umeb-header").innerHTML =
    "<div class='wrapper'>"
        + "<a class='site-title' href='/'>"
            + "<span class='site-logo'>"
                + "<img src='/assets/img/logo.png'>"
            + "</span>"
        + "</a>"
    + "<nav class='site-nav'>"
        + "<a href='#' class='menu-icon'>"
            + "<div class='trigger'>"
                + "<a class='nav-link' href='/'>Home</a>"
                + "<a class='nav-link' href='/boats'>Boats</a>"
                + "<a class='nav-link' href='/team'>Team</a>"
                + "<a class='nav-link' href='/sponsor'>Sponsor</a>"
                + "<a class='nav-link' href='/contact'>Contact</a>"
                + "<a class='nav-link' href='/join'>Join</a>"
            + "</div>"
        + "</nav>"
    + "</div>"
}

/*********************
SITE FOOTER
*********************/

function loadFooter() {
    const footer = document.getElementById('umeb-footer');
    footer.appendChild(createContainer('socials-container'));
    footer.appendChild(createContainer('sponsors-container'));
    fetchSocials();
    fetchSponsors();
}

function createContainer(id) {
    const container = document.createElement('div');
    container.id = id;
    return container;
}

function fetchSocials() {
    fetch('/assets/data/socials.csv')
    .then(response => response.text())
    .then(data => {
        const socialsContainer = document.getElementById('socials-container');
        parseSocialCSV(data).forEach(social => {
            const { name, imagePath, link } = social;
            const socialElement = document.createElement('a');
            socialElement.href = link;
            socialElement.innerHTML = `<img src="${imagePath}" alt="${name}" title="${name}" />`;
            socialElement.classList.add('social-icon');
            socialsContainer.appendChild(socialElement);
        });
    });
}
  
function fetchSponsors() {
    fetch('/assets/data/sponsors.csv')
    .then(response => response.text())
    .then(data => {
        const sponsorsContainer = document.getElementById('sponsors-container');
        parseCSV(data).forEach(sponsor => {
            const { name, logoPath } = sponsor;
            const sponsorElement = document.createElement('div');
            sponsorElement.innerHTML = `<img src="${logoPath}" alt="${name}" title="${name}" />`;
            sponsorElement.classList.add('sponsor-logo');
            sponsorsContainer.appendChild(sponsorElement);
        });
    });
}
  
function parseSocialCSV(data) {
    const rows = data.split('\n');
    return rows.slice(1).map(row => {
        const [name, path, link] = row.split(',');
        return { name, imagePath: path, link };
    });
}

/*********************
SITE HEROS
*********************/

function loadHeros() {
    const heros = { 'main-hero'     : '/assets/img/heros/main.jpg',
                    'boats-hero'    : '/assets/img/heros/boats.jpg',
                    'team-hero'     : '/assets/img/heros/team.jpg',
                    'sponsor-hero'  : '/assets/img/heros/sponsor.jpg',
                    'contact-hero'  : '/assets/img/heros/contact.jpg',
                    'join-hero'     : '/assets/img/heros/join.jpg'};
    
    for (const [elementId, imagePath] of Object.entries(heros)) {
        const heroContainer = document.getElementById(elementId);
        if (heroContainer) {
            heroContainer.style.backgroundImage = `url('${imagePath}')`;
            heroContainer.innerHTML =
            `<div class='wrap'>`
                + `<div class='hero-content' style='height: 400px'></div>`
            + `</div>`
        } else {
            console.log(`Could not find hero for id: ${elementId}`)
        }
    }
}
