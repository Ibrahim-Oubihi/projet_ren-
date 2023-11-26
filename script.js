document.addEventListener('DOMContentLoaded', function() {
    fetchMatches();
});

function fetchMatches() {
    const apiKey = 'BFLXM51rcVI82nfS4iLcdw7a17AW0eftezX11eibaUlAsIPv3xoHWd4lk5dq';
    const apiUrl = 'https://soccer.sportmonks.com/api/v2.0/livescores?api_token=' + apiKey;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => displayMatches(data.data))
    .catch(error => console.error('Erreur:', error));
}

function displayMatches(matches) {
    const matchesElement = document.getElementById('matches');
    matches.forEach(match => {
        const matchElement = document.createElement('div');
        matchElement.classList.add('col-md-4', 'match-card');
        matchElement.innerHTML = `
            <h5>Match: ${match.localteam_id} vs ${match.visitorteam_id}</h5>
            <p>Date: ${match.date}</p>
            <!-- Ajoutez d'autres détails que vous souhaitez afficher -->
        `;
        matchesElement.appendChild(matchElement);
    });
}
