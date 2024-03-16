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

    const header = document.createElement('banner');
    header.innerHTML = `<p>${subteam}</p>`;
    subteamContainer.appendChild(header);

    const membersContainer = document.createElement('members');
    members.forEach(member => {
        const memberContainer = document.createElement('member');
        memberContainer.innerHTML = `<h3>${member.name}</h3><h4>${member.role}</h4><p>${member.major}</p>`;
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
