document.addEventListener('DOMContentLoaded', function() {
    loadTeam();
});

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

    const header = document.createElement('banner');
    header.innerHTML = `<h2>${subteam}</h2>`;
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
