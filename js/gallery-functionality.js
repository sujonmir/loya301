document.addEventListener("DOMContentLoaded", () => {
  const gallerySection = document.getElementById("gallery"); // Your main gallery section ID
  const fullscreenOverlay = document.getElementById("fullscreen-overlay");
  const fullscreenImage = document.getElementById("fullscreen-image");
  const closeButton = document.getElementById("close-button");

  // Event listener for clicks within the gallery section
  if (gallerySection) {
    gallerySection.addEventListener("click", (event) => {
      // Check if the clicked element is an image
      if (event.target.tagName === "IMG") {
        const clickedImageSrc = event.target.src;
        fullscreenImage.src = clickedImageSrc;
        fullscreenOverlay.classList.add("visible"); // Show the overlay
      }
    });
  }

  // Event listener to close the full-screen view
  closeButton.addEventListener("click", () => {
    fullscreenOverlay.classList.remove("visible"); // Hide the overlay
  });

  // Optional: Close full-screen view by pressing the Escape key
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      fullscreenOverlay.classList.contains("visible")
    ) {
      fullscreenOverlay.classList.remove("visible");
    }
  });

  // Optional: Close full-screen view by clicking anywhere on the overlay
  fullscreenOverlay.addEventListener("click", (event) => {
    if (event.target === fullscreenOverlay) {
      // Only close if clicking the background, not the image
      fullscreenOverlay.classList.remove("visible");
    }
  });
});
