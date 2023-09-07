document.addEventListener("DOMContentLoaded", function () {
    var allowedUrls = ["www.myurl.com", "www.anotherurl.com"];
    var currentUrl = window.location.hostname;

    // Check if the current URL is not in the allowedUrls array
    if (!allowedUrls.includes(currentUrl)) {
        // Create an image element
        var img = document.createElement("img");
        img.src = "aglytch.jpg";
        img.alt = "aglytch";

        // Replace the content of the body with the image
        var body = document.body;
        body.innerHTML = ""; // Clear the body's content
        body.appendChild(img);
    }
});
