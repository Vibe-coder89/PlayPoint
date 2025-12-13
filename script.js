

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});


const searchInput = document.getElementById("searchInput");
const gameCards = document.querySelectorAll(".g");
const noResult = document.getElementById("noResult");

searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    gameCards.forEach(card => {
        const gameTitle = card.querySelector("h3")?.innerText.toLowerCase();

        if (gameTitle.includes(searchValue)) {
            card.style.display = "block";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    noResult.style.display = (visibleCount === 0 && searchValue.length > 0)
        ? "block"
        : "none";
}); 
