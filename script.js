// Fetch the events from event.json
fetch("events.json")
    .then(response => response.json())
    .then(events => {
        const timeline = document.getElementById("timeline");

        // Clear any hardcoded HTML inside #timeline
        timeline.innerHTML = "";

        // Loop through events and create HTML elements
        events.forEach(event => {
            const article = document.createElement("article");

            const title = document.createElement("h3");
            title.textContent = `${event.month} - ${event.title}`;

            const desc = document.createElement("p");
            desc.textContent = event.description;

            article.appendChild(title);
            article.appendChild(desc);

            // Add click event to open modal with full details
            article.addEventListener("click", () => {
                openModal(event);
            });

            timeline.appendChild(article);
        });
    })
    .catch(error => console.error("Error loading events:", error));


// Function to open modal
function openModal(event) {
    const modal = document.getElementById("modal");

    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h2>${event.month} - ${event.title}</h2>
            <img src="${event.imageURL}" alt="${event.title}" style="max-width: 100%; height: auto;">
            <p>${event.description}</p>
            <p><strong>Category:</strong> ${event.category}</p>
        </div>
    `;

    modal.style.display = "block";

    modal.querySelector(".close-btn").addEventListener("click", () => {
        modal.style.display = "none";
    });

   
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
}