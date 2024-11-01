// function toggleMenu() {
//     const menu = document.querySelector('.menu');
//     menu.classList.toggle('show'); // Toggle the 'show' class
// }

// // Add event listener to the menu button
// document.querySelector('.menu-btn').addEventListener('click', toggleMenu);
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});
let isLoggedIn = false; // Variable to track login state

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate credentials
    if (email === "vkachanti@gmail.com" && password === "vamsi"|| email === "nagamanimandangi44@gmail.com" && password==="Naga@1445") {
        // Hide the login section
        document.getElementById("login-section").style.display = "none";
        
        // Show B.Tech materials section
        document.getElementById('btech-materials').style.display = 'block';
        
        // Set login state to true
        isLoggedIn = true;
    } else {
        // Show the modal for invalid credentials
        document.getElementById('invalid-credentials-modal').style.display = 'block';
    }
}

// Function to close the modal
function closeModal() {
    document.getElementById('invalid-credentials-modal').style.display = 'none';
}

// Add event listener to the "Agri Materials" link
document.querySelector("a[href='NAgrMaterial.html']").addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    if (!isLoggedIn) {
        // Redirect to NAgrMaterial.html if not logged in
        window.location.href = 'NAgrMaterial.html';
    } else {
        // Show the materials section if logged in
        showMaterials();
    }
});

// Function to show the materials section and hide others
function showMaterials() {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    // Show the materials section
    document.getElementById('btech-materials').style.display = 'block';
}

// Add event listener to the "Agri Materials" link
document.querySelector("a[href='NAgrMaterial.html']").addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    showMaterials(); // Show the materials section
});

const openButtons = document.querySelectorAll('.open-button');
const viewerContainers = document.querySelectorAll('.viewer-container');

// Function to load the PDF in the viewer
function loadPdf(documentId, containerId) {
    CloudPDF({ documentId, darkMode: true }, document.getElementById(containerId)).then((instance) => {});
}

openButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const documentId = button.getAttribute('data-document-id');
        const containerId = `viewer${index + 1}`;
        loadPdf(documentId, containerId);
        viewerContainers.forEach(container => {
            container.style.display = 'none'; // Hide all viewer containers
        });
        document.getElementById(containerId).style.display = 'block'; // Display the selected viewer container
    });
});
    
// let isLoggedIn = false; // Variable to track login state

// function login() {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     // Validate credentials
//     if (email === "vkachanti@gmail.com" && password === "vamsi") {
//         // Hide the login section
//         document.getElementById("login-section").style.display = "none";
        
//         // Show B.Tech materials section
//         document.getElementById('btech-materials').style.display = 'block';
        
//         // Set login state to true
//         isLoggedIn = true;
//     } else {
//         alert('Invalid credentials. Please try again.');
//     }
// }

// // Add event listener to the "Agri Materials" link
// document.querySelector("a[href='NAgrMaterial.html']").addEventListener('click', (e) => {
//     e.preventDefault(); // Prevent default link behavior
//     if (!isLoggedIn) {
//         // Redirect to NAgrMaterial.html if not logged in
//         window.location.href = 'NAgrMaterial.html';
//     } else {
//         // Show the materials section if logged in
//         showMaterials();
//     }
// });

// // Function to show the materials section and hide others
// function showMaterials() {
//     // Hide all sections
//     document.querySelectorAll('.section').forEach(section => {
//         section.style.display = 'none';
//     });
//     // Show the materials section
//     document.getElementById('btech-materials').style.display = 'block';
// }

// const openButtons = document.querySelectorAll('.open-button');
// const viewerContainers = document.querySelectorAll('.viewer-container');

// // Function to load the PDF in the viewer
// function loadPdf(documentId, containerId) {
//     CloudPDF({ documentId, darkMode: true }, document.getElementById(containerId)).then((instance) => {});
// }

// openButtons.forEach((button, index) => {
//     button.addEventListener('click', () => {
//         const documentId = button.getAttribute('data-document-id');
//         const containerId = `viewer${index + 1}`;
//         loadPdf(documentId, containerId);
//         viewerContainers.forEach(container => {
//             container.style.display = 'none'; // Hide all viewer containers
//         });
//         document.getElementById(containerId).style.display = 'block'; // Display the selected viewer container
//     });
// });
// function login() {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     // Validate credentials
//     if (email === "vkachanti@gmail.com" && password === "vamsi") {
//         // Hide the login section
//         document.getElementById("login-section").style.display = "none";
        
//         // Show B.Tech materials section
//         document.getElementById('btech-materials').style.display = 'block';
        
//         // Optionally hide the form section if you want
//         document.querySelector('.form-section').style.display = 'none';
        
//         // Hide any other sections if necessary
//         // document.getElementById('other-section-id').style.display = 'none'; // Example
//     } else {
//         alert('Invalid credentials. Please try again.');
//     }
// }

// // Function to show the materials section and hide others
// function showMaterials() {
//     // Hide all sections
//     document.querySelectorAll('.section').forEach(section => {
//         section.style.display = 'none';
//     });
//     // Show the materials section
//     document.getElementById('btech-materials').style.display = 'block';
// }

// // Add event listener to the "Agri Materials" link
// document.querySelector("a[href='NAgrMaterial.html']").addEventListener('click', (e) => {
//     e.preventDefault(); // Prevent default link behavior
//     showMaterials(); // Show the materials section
// });

// const openButtons = document.querySelectorAll('.open-button');
// const viewerContainers = document.querySelectorAll('.viewer-container');

// // Function to load the PDF in the viewer
// function loadPdf(documentId, containerId) {
//     CloudPDF({ documentId, darkMode: true }, document.getElementById(containerId)).then((instance) => {});
// }

// openButtons.forEach((button, index) => {
//     button.addEventListener('click', () => {
//         const documentId = button.getAttribute('data-document-id');
//         const containerId = `viewer${index + 1}`;
//         loadPdf(documentId, containerId);
//         viewerContainers.forEach(container => {
//             container.style.display = 'none'; // Hide all viewer containers
//         });
//         document.getElementById(containerId).style.display = 'block'; // Display the selected viewer container
//     });
// });}
    
