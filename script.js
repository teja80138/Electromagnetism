document.addEventListener("DOMContentLoaded", () => {
    const wire = document.getElementById("wire");
    const battery = document.getElementById("battery");
    const nail = document.getElementById("nail");
    const resetButton = document.getElementById("reset");
  
    let isElectromagnetActive = false;
  
    // Drag and Drop Simulation
    wire.addEventListener("click", () => {
      if (!isElectromagnetActive) {
        nail.style.backgroundColor = "gold";
        nail.innerHTML = "Magnetized!";
        isElectromagnetActive = true;
      }
    });
  
    resetButton.addEventListener("click", () => {
      nail.style.backgroundColor = "silver";
      nail.innerHTML = "";
      isElectromagnetActive = false;
    });
  });