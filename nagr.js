const downloadGWHButton = document.getElementById("downloadGWH");
const downloadMEFAButton = document.getElementById("downloadMEFA");
const downloadFMOHButton = document.getElementById("downloadFMOH");
const downloadAPEButton = document.getElementById("downloadAPE");
const downloadDFEButton = document.getElementById("downloadDFE");
const downloadDSWCFSButton = document.getElementById("downloadDSWCFS");
const downloadEPBMButton = document.getElementById("downloadEPBM");
const downloadFPTSButton = document.getElementById("downloadFPTS");
const downloadFMEIButton = document.getElementById("downloadFMEI");
const downloadFMEIIButton = document.getElementById("downloadFMEII");
const downloadFOODPACKButton = document.getElementById("downloadFOODPACK");
const downloadFQCButton = document.getElementById("downloadFQC");
const downloadGISButton = document.getElementById("downloadGIS");
const downloadGHTButton = document.getElementById("downloadGHT");
const downloadHMTButton = document.getElementById("downloadHMT");
const downloadHESButton = document.getElementById("downloadHES");
const downloadIDEButton = document.getElementById("downloadIDE");
const downloadMIIIButton = document.getElementById("downloadMIII");
const downloadMIButton = document.getElementById("downloadMI");
const downloadMMIButton = document.getElementById("downloadMMI");
const downloadORButton = document.getElementById("downloadOR");
const downloadPHEButton = document.getElementById("downloadPHE");
const downloadPSMButton = document.getElementById("downloadPSM");
const downloadSWHButton = document.getElementById("downloadSWH");
const downloadSURVEYButton = document.getElementById("downloadSURVEY");
const downloadSWCEButton = document.getElementById("downloadSWCE");
const downloadTDRSButton = document.getElementById("downloadTDRS");
const downloadTOMButton = document.getElementById("downloadTOM");
const downloadTOSButton = document.getElementById("downloadTOS");
const downloadWATERButton = document.getElementById("downloadWATER");
const downloadESButton = document.getElementById("downloadES");
const downloadAETBMButton = document.getElementById("downloadAETBM");
const downloadPVTSButton = document.getElementById("downloadPVTS");
      const downloadDAMButton = document.getElementById("downloadDAM");
const downloadFPDMButton = document.getElementById("downloadFPDM");
const downloadAIBUButton = document.getElementById("downloadAIBU");



  const fileUrls = {
        GWH: "GWH.pdf",
  ES: "Electrical Systems.pdf",
        MEFA: "MEFA  ALL.pdf",
  FMOH: "FMOH.pdf",
  APE:"Agricultural Process Engineering.pdf",
  DFE: "DAIRY AND FOOD ENGINEERING.pdf",
  DSWCFS: "DSWCFS.pdf",
  EPBM: "EPBM.pdf",
  FMTS: "Farm Power and Tractor Systems.pdf",
  FMEI: "FME-I.pdf",
        FMEII: "FME-II.pdf",
  FOODPACK: "Food Packaging.pdf",
  FQC: "Food Quality & Control.pdf",
  GIS: "GIS & REMOTE SENSING.pdf",
  GHT: "GREEN HOUSE TECHNOLOGY.pdf",
  HMT: "HEAT AND MASS TRANSFER.pdf",
  HES: "HES.pdf",
  IDE: "Irrigation&Drainage Engineering.pdf",
  MIII: "Mathematics-III.pdf",
  MI: "MICRO IRRIGATION.pdf",
  MMI: "MMI.pdf",
  OR: "OPERATION RESEARCH.pdf",
  PHE: "PHE&HP.pdf",
  PSM: "PSM.pdf",
  SWH: "SURFACE WATER HYDROLOGY.pdf",
  SURVEY: "SURVEYING.pdf",
  SWCE: "SWCE MATERIAL.pdf",
  TDRS: "TD&RS MATERIAL.pdf",
  TOM: "THEORY OF MACHINES.pdf",
  TOS: "THEORY OF STRUCTURES.pdf",
  WATER: "Watershed Management.pdf",
  AETBM: "AET&BM.pdf",
  FPDM: "FPD&M.pdf",
  AIBU: "AI&BU.pdf",
  DAM: "DAM.pdf",
  PVTS: "PVT&S.pdf"
  };

  function embedFileWithObjectTag(fileUrl, containerId) {
    const objectContainer = document.getElementById(containerId);
    objectContainer.innerHTML = `<object data="${fileUrl}" type="application/pdf" width="100%" height="600px"></object>`;
}



downloadGWHButton.addEventListener("click", () => {
    embedFileWithObjectTag(fileUrls.GWH, "embedContainer");
});



 /* downloadGWHButton.addEventListener("click", () => {
    downloadFile(fileUrls.GWH, "GWH.pdf");
  });*/
 downloadESButton.addEventListener("click", () => {
    downloadFile(fileUrls.ES, "Electrical Systems.pdf");
  });

  downloadMEFAButton.addEventListener("click", () => {
    downloadFile(fileUrls.MEFA, "MEFA  ALL.pdf");
  });

 downloadFMOHButton.addEventListener("click", () => {
    downloadFile(fileUrls.FMOH, "FMOH.pdf");
  });
downloadAPEButton.addEventListener("click", () => {
    downloadFile(fileUrls.APE, "Agricultural Process Engineering.pdf");
  });
downloadDFEButton.addEventListener("click", () => {
    downloadFile(fileUrls.DFE, "DAIRY AND FOOD ENGINEERING.pdf");
  });
downloadDSWCFSButton.addEventListener("click", () => {
    downloadFile(fileUrls.DSWCFS, "DSWCFS.pdf");
  });
downloadEPBMButton.addEventListener("click", () => {
    downloadFile(fileUrls.EPBM, "EPBM.pdf");
  });
downloadFPTSButton.addEventListener("click", () => {
    downloadFile(fileUrls.FPTS, "Farm Power and Tractor Systems.pdf");
  });
downloadFMEIButton.addEventListener("click", () => {
    downloadFile(fileUrls.FMEI, "FME-I.pdf");
  });
downloadFMEIIButton.addEventListener("click", () => {
    downloadFile(fileUrls.FMEII, "FME-II.pdf");
  });
downloadFOODPACKButton.addEventListener("click", () => {
    downloadFile(fileUrls.FOODPACK, "Food Packaging.pdf");
  });
downloadFQCButton.addEventListener("click", () => {
    downloadFile(fileUrls.FQC, "Food Quality & Control.pdf");
  });
downloadGISButton.addEventListener("click", () => {
    downloadFile(fileUrls.GIS, "GIS & REMOTE SENSING.pdf");
  });
downloadGHTButton.addEventListener("click", () => {
    downloadFile(fileUrls.GHT, "GREEN HOUSE TECHNOLOGY.pdf");
  });
downloadHMTButton.addEventListener("click", () => {
    downloadFile(fileUrls.HMT, "HEAT AND MASS TRANSFER.pdf");
  });
downloadHESButton.addEventListener("click", () => {
    downloadFile(fileUrls.HES, "HES.pdf");
  });
downloadIDEButton.addEventListener("click", () => {
    downloadFile(fileUrls.IDE, "Irrigation&Drainage Engineering.pdf");
  });
downloadMIIIButton.addEventListener("click", () => {
    downloadFile(fileUrls.MIII, "Mathematics-III.pdf");
  });
downloadMIButton.addEventListener("click", () => {
    downloadFile(fileUrls.MI, "MICRO IRRIGATION.pdf");
  });
downloadMMIButton.addEventListener("click", () => {
    downloadFile(fileUrls.MMI, "MMI.pdf");
  });
downloadORButton.addEventListener("click", () => {
    downloadFile(fileUrls.OR, "OPERATION RESEARCH.pdf");
  });
downloadPHEButton.addEventListener("click", () => {
    downloadFile(fileUrls.PHE, "PHE&HP.pdf");
  });
downloadPSMButton.addEventListener("click", () => {
    downloadFile(fileUrls.PSM, "PSM.pdf");
  });
downloadSWHButton.addEventListener("click", () => {
    downloadFile(fileUrls.SWH, "SURFACE WATER HYDROLOGY.pdf");
  });
downloadSURVEYButton.addEventListener("click", () => {
    downloadFile(fileUrls.SURVEY, "SURVEYING.pdf");
  });
downloadSWCEButton.addEventListener("click", () => {
    downloadFile(fileUrls.SWCE, "SWCE MATERIAL.pdf");
  });
downloadTDRSButton.addEventListener("click", () => {
    downloadFile(fileUrls.TDRS, "TD&RS MATERIAL.pdf");
  });
downloadTOMButton.addEventListener("click", () => {
    downloadFile(fileUrls.TOM, "THEORY OF MACHINE.pdf");
  });
downloadTOSButton.addEventListener("click", () => {
    downloadFile(fileUrls.TOS, "THEORY OF STRUCTURES.pdf");
  });
downloadWATERButton.addEventListener("click", () => {
    downloadFile(fileUrls.WATER, "Watershed Management.pdf");
  });
downloadAETBMButton.addEventListener("click", () => {
    downloadFile(fileUrls.AETBM, "AET&BM.pdf");
  });
downloadPVTSButton.addEventListener("click", () => {
    downloadFile(fileUrls.PVTS, "PVT&S.pdf");
  });
downloadDAMButton.addEventListener("click", () => {
    downloadFile(fileUrls.DAM, "DAM.pdf");
  });
downloadFPDMButton.addEventListener("click", () => {
    downloadFile(fileUrls.FPDM, "FPD&M.pdf");
  });
downloadAIBUButton.addEventListener("click", () => {
    downloadFile(fileUrls.AIBU, "AI&BU.pdf");
  });

  function downloadFile(fileUrl, fileName) {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  }
  //disableing download option 
  function openFile(fileUrl) {
    window.open(fileUrl, '_blank');
  }
//ecet
const downloadSurveyECETButton = document.getElementById("downloadsurveyecet");
const downloadAgriImpECETButton = document.getElementById("downloadAgriImp");
const downloadTSystemsButton = document.getElementById("downloadTrSystems");
const downloadpqpecetButton = document.getElementById("downloadpqpecet");
const downloadpqpecettButton = document.getElementById("downloadpqpecett");
const downloadpqpecetttButton = document.getElementById("downloadpqpecettt");
const downloadpqpecettttButton = document.getElementById("downloadpqpecetttt");




// Define the file URLs for ECET materials
const ecetFileUrls = {
  SurveyECET: "Surveying&levelingecet.pdf",
  AgriImpECET: "AGIMPLEMENT.pdf",
  pqpecet: "ACEQP2020.pdf",
  pqpecett: "ACE_QP_23.pdf",
  pqpecettt: "ACE_QP_21.pdf",
  pqpecetttt: "ACE_QP_22.pdf",
  TSystems: "tractorsys.pdf"
};

// Add event listeners to the download buttons
downloadSurveyECETButton.addEventListener("click", () => {
  downloadFile(ecetFileUrls.SurveyECET, "Surveying&levelingecet.pdf");
});
downloadpqpecetButton.addEventListener("click", () => {
  downloadFile(ecetFileUrls.pqpecet, "ACEQP2020.pdf");
});
downloadpqpecettButton.addEventListener("click", () => {
  downloadFile(ecetFileUrls.pqpecett, "ACE_QP_23.pdf");
});
downloadpqpecetttButton.addEventListener("click", () => {
  downloadFile(ecetFileUrls.pqpecettt, "ACE_QP_21.pdf");
});
downloadpqpecettttButton.addEventListener("click", () => {
  downloadFile(ecetFileUrls.pqpecetttt, "ACE_QP_22.pdf");
});
downloadAgriImpECETButton.addEventListener("click", () => {
  downloadFile(ecetFileUrls.AgriImpECET, "AGIMPLEMENT.pdf");
});
downloadTSystemsButton.addEventListener("click", () => {
  downloadFile(ecetFileUrls.TSystems, "tractorsys.pdf");
});

//
const downloadpgpqpecetButton = document.getElementById("downloadpgpqpecet");
const downloadpgpqpecettButton = document.getElementById("downloadpgpqpecett");
const downloadpgpqpecetttButton = document.getElementById("downloadpgpqpecettt");
const downloadpgpqpecettttButton = document.getElementById("downloadpgpqpecetttt");
const downloadpgpqpecetttttButton = document.getElementById("downloadpgpqpecettttt");

const pgcetFileUrls = {
  pgpqpecet: "FT_QP_23.pdf",
  pgpqpecett: "FT_QP_22.pdf",
  pgpqpecettt: "FT_QP_21.pdf",
  pgpqpecetttt: "FT_QP_17.pdf",
  pgpqpecettttt: "FT_QP_16.pdf"
};
downloadpgpqpecetButton.addEventListener("click", () => {
  downloadFile(pgcetFileUrls.pgpqpecett, "FT_QP_23.pdf");
});
downloadpgpqpecettButton.addEventListener("click", () => {
  downloadFile(pgcetFileUrls.pgpqpecett, "FT_QP_22.pdf");
});
downloadpgpqpecetttButton.addEventListener("click", () => {
  downloadFile(pgcetFileUrls.pgpqpecettt, "FT_QP_21.pdf");
});
downloadpgpqpecettttButton.addEventListener("click", () => {
  downloadFile(pgcetFileUrls.pgpqpecetttt, "FT_QP_17.pdf");
});
downloadpgpqpecetttttButton.addEventListener("click", () => {
  downloadFile(pgcetFileUrls.pgpqpecettttt, "FT_QP_16.pdf");
});


// Function to download a file
function downloadFile(fileUrl, fileName) {
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = fileName;
  link.click();
}
//ecet close
  const homeLink = document.getElementById("home-link");
  const materialLink = document.getElementById("material-link");
  const quizLink = document.getElementById("quiz-link");
  const contactLink = document.getElementById("contact-link");
  const btechList = document.getElementById("btechlist");
  const ecetList = document.getElementById("ecetlist");
  const pgcetList = document.getElementById("pgcetlist");
  const afoList = document.getElementById("afolist");

  // Add click event listeners to the navigation links
  homeLink.addEventListener("click", function() {
    // Show the home section and hide the other sections
    document.getElementById("home-details").style.display = "block";
    document.getElementById("materials-list").style.display = "none";
    document.getElementById("quiz-details").style.display = "none";
    document.getElementById("contact-details").style.display = "none";

    
  });

  materialLink.addEventListener("click", function() {
    // Show the material section and hide the other sections
    document.getElementById("home-details").style.display = "none";
    document.getElementById("materials-list").style.display = "block";
    document.getElementById("quiz-details").style.display = "none";
    document.getElementById("contact-details").style.display = "none";
  });

  quizLink.addEventListener("click", function() {
    // Show the quiz section and hide the other sections
    document.getElementById("home-details").style.display = "none";
    document.getElementById("materials-list").style.display = "none";
    document.getElementById("quiz-details").style.display = "block";
    document.getElementById("contact-details").style.display = "none";
  });

  contactLink.addEventListener("click", function() {
    // Show the contact section and hide the other sections
    document.getElementById("home-details").style.display = "none";
    document.getElementById("materials-list").style.display = "none";
    document.getElementById("quiz-details").style.display = "none";
    document.getElementById("contact-details").style.display = "block";
  });

  function searchMaterials() {
    const searchTerm = document.getElementById("search-bar").value.trim().toLowerCase();
    const materialRows = document.querySelectorAll('#materials-list table tbody tr');
  
    materialRows.forEach(row => {
      const materialName = row.querySelector("td:first-child").textContent.trim().toLowerCase();
      const downloadButton = row.querySelector("button");
  
      if (materialName.includes(searchTerm)) {
        row.style.display = "table-row";
        downloadButton.style.display = "block";
      } else {
        row.style.display = "none";
        downloadButton.style.display = "none";
      }
    });
  }

// JavaScript code
function showMaterials() {
  document.getElementById("materials-list").style.display = "block";
  document.getElementById("quiz-details").style.display = "none";
  document.getElementById("register").style.display = "none";
  document.getElementById("renewal").style.display = "none";
  document.getElementById("home-details").style.display = "none";
  document.getElementById("contact-details").style.display = "none";
  document.getElementById("btechlist").style.display = "none";
  document.getElementById("ecetlist").style.display = "none";
  document.getElementById("afolist").style.display = "none";
  document.getElementById("").style.display = "none";
  document.getElementById("pgcetlist").style.display = "none"; 
  history.pushState({ page: "materials" }, "Materials", "#materials");
}

function openQuiz() {
  document.getElementById("materials-list").style.display = "none";
  document.getElementById("quiz-details").style.display = "block";
  document.getElementById("register").style.display = "none";
  document.getElementById("home-details").style.display = "none";
  document.getElementById("contact-details").style.display = "none";
  document.getElementById("btechlist").style.display = "none";
  document.getElementById("renewal").style.display = "none";
  document.getElementById("ecetlist").style.display = "none";
  document.getElementById("afolist").style.display = "none";
  document.getElementById("pgcetlist").style.display = "none"; 
  history.pushState({ page: "quiz" }, "Quiz", "#quiz");
}

function showContactDetails() {
  document.getElementById("materials-list").style.display = "none";
  document.getElementById("quiz-details").style.display = "none";
  document.getElementById("register").style.display = "none";
  document.getElementById("home-details").style.display = "none";
  document.getElementById("contact-details").style.display = "block";
  document.getElementById("btechlist").style.display = "none";
  document.getElementById("ecetlist").style.display = "none";
  document.getElementById("afolist").style.display = "none";
  document.getElementById("renewal").style.display = "none";
  document.getElementById("pgcetlist").style.display = "none"; 
  history.pushState({ page: "contact" }, "Contact", "#contact");
  var navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(function(link) {
    link.classList.remove("active");
  });

  // Add the "active" class to the clicked link
  document.querySelector("nav a[href='#contact']").classList.add("active");
}

function showHome() {
  document.getElementById("materials-list").style.display = "none";
  document.getElementById("quiz-details").style.display = "none";
  document.getElementById("register").style.display = "none";
  document.getElementById("home-details").style.display = "block";
  document.getElementById("contact-details").style.display = "none";
  document.getElementById("btechlist").style.display = "none";
  document.getElementById("ecetlist").style.display = "none";
  document.getElementById("afolist").style.display = "none";
  document.getElementById("pgcetlist").style.display = "none"; 
  history.pushState({ page: "home" }, "Home", "#home");
}

// 
// JavaScript
function showLoginForm() {
  // Hide materials list and display login form
  document.getElementById("btechlist").style.display = "none";
  document.getElementById("login-form-container").style.display = "block";
}

function showBtechList() {
  // Hide login form and display materials list
  document.getElementById("ecetlist").style.display = "none";
  document.getElementById("afolist").style.display = "none";
  document.getElementById("pgcetlist").style.display = "none"; 
  document.getElementById("materials-list").style.display = "none";
  document.getElementById("login-form-container").style.display = "none";
  document.getElementById("btechlist").style.display = "block";
}

function showRegistrationForm() {
  // Implement your logic to show the registration form here
}

function validateLogin() {
  var userId = document.getElementById("userId").value;
  var securityCode = document.getElementById("securityCode").value;

  // Add your login validation logic here
  // For demonstration purposes, assuming the validation always fails
  if ((userId === "vkachanti" && securityCode === "agriengg@")|| (userId === "saida" && securityCode === "96403") || 
  (userId === "8309127255" && securityCode === "83091") ||
(userId === "19JQ1A3528" && securityCode === "12345")||(userId === "Mohith8472" && securityCode === "Chandana@123")||
 (userId === "7993979558" && securityCode === "79939") || (userId === "Aravind" && securityCode === "Aravind@123")||(userId === "7993979558" && securityCode === "79939") || 
 (userId === "Prasad@2004" && securityCode === "Chinni@143")||(userId === "Jayasri" && securityCode === "jayasri237")
||(userId === "20NQ1A3501" && securityCode === "1432")) {
    // If login succeeds, display the B.Tech materials list
    showBtechList();
    document.getElementById("login-message").style.display = "none";
  } else {
    // If login fails, display error message
    document.getElementById("login-message").innerText = "Please enter the correct user ID and password.";
    document.getElementById("login-message").style.display = "block";
  }
}

function getregister(){
  document.getElementById("btechlist").style.display = "none";
  document.getElementById("register").style.display = "block";
  document.getElementById("ecetlist").style.display = "none";
  document.getElementById("afolist").style.display = "none";
  document.getElementById("pgcetlist").style.display = "none"; 
  document.getElementById("materials-list").style.display = "none";
  document.getElementById("quiz-details").style.display = "none";
  document.getElementById("home-details").style.display = "none";
  document.getElementById("contact-details").style.display = "none";
  document.getElementById("renewal").style.display = "none";
}
function renewaccount(){
  document.getElementById("renewal").style.display = "block";
  document.getElementById("btechlist").style.display = "none";
  document.getElementById("register").style.display = "none";
  document.getElementById("ecetlist").style.display = "none";
  document.getElementById("afolist").style.display = "none";
  document.getElementById("pgcetlist").style.display = "none"; 
  document.getElementById("materials-list").style.display = "none";
  document.getElementById("quiz-details").style.display = "none";
  document.getElementById("home-details").style.display = "none";
  document.getElementById("contact-details").style.display = "none";
  document.getElementById("renewal").style.display = "none";
}

function showecet() {
  document.getElementById("btechlist").style.display = "none";
  document.getElementById("ecetlist").style.display = "block";
  document.getElementById("register").style.display = "none";
  document.getElementById("afolist").style.display = "none";
  document.getElementById("pgcetlist").style.display = "none"; 
  document.getElementById("materials-list").style.display = "none";
  document.getElementById("quiz-details").style.display = "none";
  document.getElementById("home-details").style.display = "none";
  document.getElementById("contact-details").style.display = "none";
  document.getElementById("renewal").style.display = "none";
}
function showafo() {
  document.getElementById("btechlist").style.display = "none";
  document.getElementById("ecetlist").style.display = "none";
  document.getElementById("register").style.display = "none";
  document.getElementById("afolist").style.display = "block";
  document.getElementById("pgcetlist").style.display = "none";
  document.getElementById("materials-list").style.display = "none";
  document.getElementById("quiz-details").style.display = "none";
  document.getElementById("home-details").style.display = "none";
  document.getElementById("contact-details").style.display = "none";
  document.getElementById("renewal").style.display = "none";
}
function showpgcet() {
  document.getElementById("btechlist").style.display = "none";
  document.getElementById("ecetlist").style.display = "none";
  document.getElementById("register").style.display = "none";
  document.getElementById("pgcetlist").style.display = "block";
  document.getElementById("afolist").style.display = "none"; 
  document.getElementById("materials-list").style.display = "none";
  document.getElementById("quiz-details").style.display = "none";
  document.getElementById("home-details").style.display = "none";
  document.getElementById("contact-details").style.display = "none";
  document.getElementById("renewal").style.display = "none";
}
window.onload = showHome;


window.onpopstate = function(event) {
  if (event.state) {
    const page = event.state.page;
    if (page === "materials") {
      showMaterials();
    } else if (page === "quiz") {
      openQuiz();
    } else if (page === "contact") {
      showContactDetails();
    } else {
      showHome();
    }
  } else {
    showHome(); // Handle initial load or if there's no state
  }
};

window.onload = function() {
  const hash = window.location.hash;
  if (hash === "#materials") {
    showMaterials();
  } else if (hash === "#quiz") {
    openQuiz();
  } else if (hash === "#contact") {
    showContactDetails();
  } else {
    showHome();
  }
};

const pdfObject = document.getElementById("pdf-viewer");

// Disable right-click context menu
document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
});

// Try to disable download option from toolbar (limited effectiveness)
if (pdfObject.contentDocument && pdfObject.contentDocument.defaultView) {
  try {
    pdfObject.contentDocument.defaultView.document.execCommand("SaveAs", false, null); // Disable "Save As"
  } catch (error) {
    console.error("Disabling download might be restricted by browser:", error);
  }
}
function showjntukpqp() {
  // Check if the papers are available (replace this condition with your logic)
  var papersAvailable = false;

  if (papersAvailable) {
    // If papers are available, do something (e.g., redirect to another page)
    window.location.href = "papers-page.html";
  } else {
    // If papers are not available, display a message
    alert("Currently unavailable. Please try again later.");
  }
}

function showdiplomamaterils() {
  // Check if the papers are available (replace this condition with your logic)
  var papersAvailable = false;

  if (papersAvailable) {
    // If papers are available, do something (e.g., redirect to another page)
    window.location.href = "papers-page.html";
  } else {
    // If papers are not available, display a message
    alert("Currently unavailable. Please try again later.");
  }
}
function searchMaterials() {
  const query = document.getElementById('search-bar').value.toLowerCase();
  const rows = document.querySelectorAll('tbody tr');
  rows.forEach(row => {
    const materialName = row.querySelector('td').innerText.toLowerCase();
    if (materialName.includes(query)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}
function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

 function isMobile() {
            return /Mobi|Android/i.test(navigator.userAgent);
        }

        // Prompt user to enable desktop site if on mobile
        window.onload = function () {
            if (isMobile()) {
                alert("For a better experience, please enable the Desktop Site option in your browser settings.");
            }
        };
