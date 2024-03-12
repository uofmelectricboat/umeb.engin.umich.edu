document.addEventListener('DOMContentLoaded', function() {
    loadSectionsFromCSV();
    loadSocialIcons();
    loadSponsorImages();
});

function loadSectionsFromCSV() {
    fetch('../js/main-content.csv')
        .then(response => response.text())
        .then(csvText => {
            const sections = parseCSVToSections(csvText);
            const contentArea = document.getElementById('main-content-area');
            sections.forEach((section, index) => {
                const sectionElement = createSectionElement(section, index);
                contentArea.appendChild(sectionElement);
            });
        });
}

function loadSocialIcons() {
    const socialIcons = [
        // Below links and images need to be updated accordingly
        { name: 'GitHub', url: 'https://github.com', image: 'images/icons/github.png' },
        { name: 'Instagram', url: 'https://instagram.com', image: 'images/icons/instagram.png' },
        { name: 'Twitter', url: 'https://twitter.com', image: 'images/icons/twitter.png' },
        { name: 'YouTube', url: 'https://youtube.com', image: 'images/icons/youtube.png' },
        { name: 'LinkedIn', url: 'https://linkedin.com', image: 'images/icons/linkedin.png' },
    ];

    const iconsDiv = document.getElementById('social-icons');
    socialIcons.forEach(icon => {
        const a = document.createElement('a');
        a.href = icon.url;
        a.target = "_blank";
        const img = new Image();
        img.src = icon.image;
        img.alt = icon.name;
        img.style.height = '30px';
        a.appendChild(img);
        iconsDiv.appendChild(a);
    });
}

function loadSponsorImages() {
    // Similar to social icons, load sponsor images from a CSV and append to #sponsors
}

function createSectionElement(section, index) {
    const sectionDiv = document.createElement('div');
    sectionDiv.classList.add('section');
    
    const textContentDiv = document.createElement('div');
    textContentDiv.classList.add('text-content');

    const header = document.createElement('h2');
    header.textContent = section.header;
    textContentDiv.appendChild(header);

    const paragraph = document.createElement('p');
    paragraph.textContent = section.paragraph;
    textContentDiv.appendChild(paragraph);

    const image = new Image();
    image.src = section.image_path;
    image.alt = section.header;

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
    imageContainer.appendChild(image);

    sectionDiv.appendChild(imageContainer);
    sectionDiv.appendChild(textContentDiv);

    return sectionDiv;
}

function parseCSVToSections(csvText) {
    const lines = csvText.trim().split(/\r?\n/);
    const sections = lines.slice(1).map(line => {
        const [header, image_path, paragraph] = line.split(',');

        return {
            header: header.trim(),
            image_path: image_path.trim(),
            paragraph: paragraph.trim()
        };
    });
  
    return sections;
}

function matchImageHeightToText(textContent, img) {
    const textHeight = textContent.offsetHeight;
    img.style.height = `${textHeight}px`;
}
