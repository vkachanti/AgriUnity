// // document.getElementById('ecet-mcq-btn').addEventListener('click', function(event) {
// //     event.preventDefault(); // Prevent the default link behavior
// //     document.getElementById('ecetlist').style.display = 'block'; // Show the ECET list section
// //   });

// document.addEventListener("DOMContentLoaded", function() {
//     // Select the E-CET MCQ link and the ECET list div
//     const ecetButton = document.getElementById("ecet-mcq-btn");
//     const ecetList = document.getElementById("ecetlist");

//     // Add an event listener to the button to toggle the ECET list's visibility
//     ecetButton.addEventListener("click", function(event) {
//       event.preventDefault(); // Prevents the default link behavior
//       ecetList.style.display = ecetList.style.display === "none" ? "block" : "none";
//     });
//   });// Function to close the overlay
function closeOverlay() {
    document.getElementById("imageOverlay").style.display = "none";
  }
  
  // Automatically close overlay after 25 seconds
  setTimeout(closeOverlay, 25000);
  