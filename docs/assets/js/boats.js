document.addEventListener('DOMContentLoaded', function() {
    loadBoats();
});

function loadBoats() {
    fetch('/assets/data/boats.csv')
    .then(response => response.text())
    .then(data => {
        const boatsContainer = document.getElementById('umeb-boats');
        parseCSV(data).forEach((boat, index) => {
            const boatRow = createRow(boat, index);
            boatsContainer.appendChild(boatRow);
        });
    })
    .catch(err => console.error('Error loading CSV:', err));
}

function createRow(boat, index) {
    const section = document.createElement('div');
    section.className = index % 2 === 0 ? 'even-row' : 'odd-row';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'section-content';
    contentDiv.innerHTML = `<h2>${boat[0]}</h2><p>${boat[2]}</p>`;
    
    const imageDiv = document.createElement('div');
    imageDiv.className = 'section-image';
    imageDiv.innerHTML = `<img src="${boat[1]}" alt="${boat[0]}">`;

    section.appendChild(contentDiv);
    section.appendChild(imageDiv);
    
    return section;
}
