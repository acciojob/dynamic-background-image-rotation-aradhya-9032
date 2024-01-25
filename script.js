//your JS code here. If required.
function updateBackgroundImage() {
    var body = document.body;
    var landscapeImageURL = "https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg";
    var portraitImageURL = "https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg";

    // Check screen orientation
    var isPortrait = window.matchMedia("(orientation: portrait)").matches;

    // Set the background image based on screen orientation
    body.style.backgroundImage = isPortrait ? `url('${portraitImageURL}')` : `url('${landscapeImageURL}')`;
}

// Initial call to set the background image on page load
updateBackgroundImage();

// Listen for orientation change events and update the background image accordingly
window.addEventListener("orientationchange", updateBackgroundImage);
