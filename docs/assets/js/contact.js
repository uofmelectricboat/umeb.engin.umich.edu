document.addEventListener('DOMContentLoaded', function() {
    loadContact();
});

function loadContact() {
    fetch('./assets/data/contact.csv')
    .then(response => response.text())
    .then(data => {
        const contactsContainer = document.getElementById('umeb-contact');
        parseCSV(data).forEach((contact, index) => {
            const contactCard = createCard(contact);
            contactsContainer.appendChild(contactCard);
        });
    })
    .catch(err => console.error('Error loading CSV:', err));
}

function createCard(contact) {
    const contactContainer = document.createElement('div');
    contactContainer.className = 'contact-container';
    contactContainer.innerHTML = `
        <h3 class="contact-title">${contact[1]}</h3>
        <h4 class="contact-name">${contact[0]}</h4>
        <p class="contact-email">${contact[2]}</p>
    `;
    return contactContainer;
}
