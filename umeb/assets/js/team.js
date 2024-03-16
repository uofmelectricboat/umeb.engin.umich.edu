document.addEventListener('DOMContentLoaded', function() {
    loadTeam();
});

// TODO: linkedin links
// TODO: split by subteam (see data/sponsors/)

function loadTeam() {
    fetch('/assets/data/team.csv')
    .then(response => response.text())
    .then(data => {
        const teamContainer = document.getElementById('umeb-team');
        const subteamsMap = parseTeamCSV(data);
        for (const [subteam, members] of subteamsMap.entries()) {
            const section = createSection(subteam, members);
            teamContainer.appendChild(section);
        }
    })
    .catch(err => console.error('Error loading CSV:', err));
}

function createSection(subteam, members) {
    const subteamContainer = document.createElement('div');
    subteamContainer.className = 'subteam-container';

    const header = document.createElement('div');
    header.className = 'sub-banner';
    header.innerHTML = `<p>${subteam}</p>`;
    subteamContainer.appendChild(header);

    const membersContainer = document.createElement('div');
    membersContainer.className = 'members-container';
    members.forEach(member => {
        const memberContainer = document.createElement('div');
        memberContainer.className = 'member-container';
        memberContainer.innerHTML = `
            <img src="${member.imagePath}" alt="${member.name}" class="member-image">
            <h3 class="member-name">${member.name}</h3>
            ${member.role ? `<h4 class="member-role">${member.role}</h4>` : ''}
            <p class="member-major">${member.major}</p>
        `;
        membersContainer.appendChild(memberContainer);
    });
    subteamContainer.appendChild(membersContainer);

    return subteamContainer;
}

function parseTeamCSV(data) {
    const subteamsMap = new Map();
    const rows = data.split('\n');

    for (let i = 1; i < rows.length; i++) {
        const [name, major, subteam, role, imagePath] = rows[i].split(',').map(item => item.trim());
        
        if (!name || !subteam || !major || !imagePath) continue;

        if (!subteamsMap.has(subteam)) {
            subteamsMap.set(subteam, []);
        }

        subteamsMap.get(subteam).push({ name, major, role, imagePath });
    }

    return subteamsMap;
}

/*********************
DEBOUNCING
*********************/

window.addEventListener('resize', function() {
    updateBackgroundImagesDebounced(elementImageMap);
});

var updateBackgroundImagesDebounced = debounce(function(elementImageMap) {
    for (const [elementId, imagePath] of Object.entries(elementImageMap)) {
        const element = document.getElementById(elementId);
        if (element) {
            element.style.backgroundImage = `url('${imagePath}')`;
        }
    }
}, 20 * 60); // 20 minutes

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};
