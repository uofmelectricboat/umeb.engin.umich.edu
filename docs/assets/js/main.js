document.addEventListener('DOMContentLoaded', function() {
    loadValues();
});

function loadValues() {
    fetch('./assets/data/values.csv')
    .then(response => response.text())
    .then(data => {
        const valuesContainer = document.getElementById('umeb-values');
        parseCSV(data).forEach((value, index) => {
            const valueRow = createRow(value, index);
            valuesContainer.appendChild(valueRow);
        });
    })
    .catch(err => console.error('Error loading CSV:', err));
}

function createRow(value, index) {
    const section = document.createElement('div');
    section.className = index % 2 === 0 ? 'even-row' : 'odd-row';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'section-content';
    contentDiv.innerHTML = `<h2>${value[0]}</h2><p>${value[2]}</p>`;
    
    const imageDiv = document.createElement('div');
    imageDiv.className = 'section-image';
    imageDiv.innerHTML = `<img src="${value[1]}" alt="${value[0]}">`;

    section.appendChild(contentDiv);
    section.appendChild(imageDiv);
    
    return section;
}
