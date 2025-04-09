document.addEventListener("DOMContentLoaded", async () => {
    const exerciseList = document.getElementById("exercise-list");
    const type = exerciseList.getAttribute("data-type");

    try {
        const response = await fetch(`/${type}-exercises`);
        const exercises = await response.json();

        exerciseList.innerHTML = ""; // Remove "Loading..."

        exercises.forEach(exercise => {
            const exerciseCard = document.createElement("div");
            exerciseCard.classList.add("exercise-card");

            exerciseCard.innerHTML = `
                <h3>${exercise.name}</h3>
                <img src="${exercise.image}" alt="${exercise.name}">
                <iframe width="100%" height="200" src="${exercise.video}" frameborder="0" allowfullscreen></iframe>
            `;

            exerciseList.appendChild(exerciseCard);
        });
    } catch (error) {
        exerciseList.innerHTML = "<p>Failed to load exercises.</p>";
    }
});
