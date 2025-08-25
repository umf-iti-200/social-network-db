
const list = document.getElementById("list-testimonials");
const form = document.getElementById("form-testimonials");

function createTestimonials(author, message) {

    const html = `
        <div class="card card-body mb-3">
            <p class="mb-0">
                <span class="fw-bold">${author}</span>:
                <span>${message}</span>
            </p>
        </div>
    `;

    return html;
}

async function getData() {

    const url = "http://localhost/api/testimonials";

    const request = await fetch(url);

    const response = await request.json();

    // Add the code to update the screen.
}

async function saveData(event) {
    event.preventDefault();
    
    const pAuthor = document.getElementById("author");
    const pMessage = document.getElementById("message");
    
    const product = {
        author: pAuthor.value,
        message: pMessage.value
    };
    
    // Add the command to send the data to the backend.
   
}

getData();

form.addEventListener("submit", saveData)