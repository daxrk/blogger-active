$(document).ready(function () {
    var allowedUrls = ["www.myurl.com", "www.anotherurl.com"]; // Add allowed URLs to this array
    var currentUrl = window.location.hostname;

    // Check if the current URL is not in the allowedUrls array
    if (!allowedUrls.includes(currentUrl)) {
        // Create an image element
        var img = $("<img src='https://i.postimg.cc/9zyw8JZB/photo-2023-08-16-18-26-14.jpg' alt='aglytch'></img>");

        // Replace the content of the body with the image
        $("body").empty().append(img);
    }
});
