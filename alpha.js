/* ===== SORT GAMES ALPHABETICALLY ===== */
function sortGamesAlphabetically() {
    const container = document.getElementById("gameContainer");

    const games = Array.from(container.querySelectorAll(".game-link"));

    games.sort((a, b) => {
        const titleA = a.querySelector(".game-title").textContent.trim().toLowerCase();
        const titleB = b.querySelector(".game-title").textContent.trim().toLowerCase();

        return titleA.localeCompare(titleB);
    });

    games.forEach(game => container.appendChild(game));
}

// Sort when page loads
window.addEventListener("load", sortGamesAlphabetically);
