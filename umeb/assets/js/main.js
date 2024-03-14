document.addEventListener('DOMContentLoaded', function() {
    loadValues();
});

function loadValues() {
    fetch('/assets/data/values.csv')
    .then(response => response.text())
    .then(data => {
        const valuesContainer = document.getElementById('umeb-values');
        parseValuesCSV(data).forEach((value, index) => {
            const valueRow = createRow(value, index);
            valuesContainer.appendChild(valueRow);
        });
    })
    .catch(err => console.error('Error loading CSV:', err));
}

function createRow(value, index) {
    const section = document.createElement('div');
    section.className = index % 2 === 0 ? 'even-row' : 'odd-row';
    
    const contentDiv = document.createElement('content');
    contentDiv.innerHTML = `<h2>${value[0]}</h2><p>${value[2]}</p>`;
    
    const imageDiv = document.createElement('image');
    imageDiv.innerHTML = `<img src="${value[1]}" alt="${value[0]}">`;

    section.appendChild(contentDiv);
    section.appendChild(imageDiv);
    
    return section;
}

function parseValuesCSV(data) {
    const arr = [];
    let quote = false;

    for (let row = -1, col = 0, c = 0; c < data.length; c++) {
        let cc = data[c], nc = data[c+1];
        arr[row] = arr[row] || [];
        arr[row][col] = arr[row][col] || '';

        if (cc == '"' && quote && nc == '"') { arr[row][col] += cc; ++c; continue; }
        if (cc == '"') { quote = !quote; continue; }
        if (cc == ',' && !quote) { ++col; continue; }
        if (cc == '\r' && nc == '\n' && !quote) { ++row; col = 0; ++c; continue; }
        if (cc == '\n' && !quote) { ++row; col = 0; continue; }
        if (cc == '\r' && !quote) { ++row; col = 0; continue; }

        arr[row][col] += cc;
    }

    return arr;
}
