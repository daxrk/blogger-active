$(document).ready(function () {
    var allowedUrls = ["www.myurl.com", "www.anotherurl.com"]; // Add allowed URLs to this array
    var currentUrl = window.location.hostname;
    
    // Check if the current URL is not in the allowedUrls array
    if (!allowedUrls.includes(currentUrl)) {
        // Create an image element
        var img = $("<img src='aglytch.jpg' alt='aglytch'></img>");
        
        // Replace the content of the body with the image
        $("body").empty().append(img);
    }
});

