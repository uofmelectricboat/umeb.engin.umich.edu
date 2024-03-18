document.addEventListener('DOMContentLoaded', function() {
    loadTeam();
});

function loadTeam() {

    /*********************
    UPDATE SUBTEAMS HERE
    - make sure to verify result in Live Preview
    - update team.csv if needed
    *********************/
    const subteamsMap = new Map([
        ["0", "Leadership"],
        ["1", "Directors"],
        ["2", "Project Leads"],
        ["3", "Software"],
        ["4", "Controls"],
        ["5", "Powertrain"],
        ["6", "Structures"],
        ["7", "Drivetrain"],
        ["8", "Operations"],
        ["9", "Business"],
        ["10", "Cooling"]
    ]);

    fetch('/assets/data/team.csv')
    .then(response => response.text())
    .then(data => {
        const teamContainer = document.getElementById('umeb-team');
        const membersMap = compileSubteams(data);
        for (let i=0; i<subteamsMap.size; ++i) {
            const index = i.toString();
            const subteam = subteamsMap.get(index);
            const members = membersMap.get(index);
            if (members && members.length > 0) {
                const section = createSection(subteam, members);
                teamContainer.appendChild(section);
            }
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

function compileSubteams(data) {
    const membersMap = new Map();
    const rows = data.split('\n');

    for (let i = 1; i < rows.length; i++) {
        [name, major, subteam, role, imagePath] = rows[i].split(',').map(item => item.trim());

        if (!imagePath) {
            imagePath = '/assets/img/headshots/default.png';
        }

        if (!membersMap.has(subteam)) {
            membersMap.set(subteam, []);
        }

        membersMap.get(subteam).push({ name, major, role, imagePath });
    }

    return membersMap;
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
