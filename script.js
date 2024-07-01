document.addEventListener('DOMContentLoaded', function() {
    const contestants = [
        "Anielius",
        "Danila",
        "Laura",
        "Rokas",
        "Ąžuolas",
        "Feodora",
        "Gabrielė",
        "Motiejus"
    ];

    const contestantsContainer = document.getElementById('contestants');
    const thankYouMessage = document.getElementById('thank-you');

    contestants.forEach((contestant, index) => {
        const contestantDiv = document.createElement('div');
        contestantDiv.className = 'contestant';

        const contestantName = document.createElement('span');
        contestantName.textContent = contestant;

        const voteButton = document.createElement('button');
        voteButton.textContent = 'Vote';
        voteButton.addEventListener('click', () => {
            contestantsContainer.classList.add('hidden');
            thankYouMessage.classList.remove('hidden');
        });

        contestantDiv.appendChild(contestantName);
        contestantDiv.appendChild(voteButton);
        contestantsContainer.appendChild(contestantDiv);
    });
});
