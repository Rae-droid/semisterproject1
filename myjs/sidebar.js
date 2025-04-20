function openSidebar() {
  document.getElementById("sidebar").style.width = "250px"; 
  document.getElementById("openbtn").style.display = "none"; 
}

function closeSidebar() {
  document.getElementById("sidebar").style.width = "0"; 
  document.getElementById("openbtn").style.display = "block";
}

function openPopup() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
 
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}