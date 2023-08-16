$(document).ready(function () {
    var allowedUrls = ["www.myurl.com", "www.anotherurl.com"]; // Add allowed URLs to this array
    var currentUrl = window.location.hostname;

    // Check if the current URL is not in the allowedUrls array
    if (!allowedUrls.includes(currentUrl)) {
        // Create an image element
        var img = $("<img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxxHJSKgGIrce0zsp_8gFya3xL9JXdOkCCbwoEE1mEg-B0judYkpGvzeZaN5RDBX2q-WTZIeMlXnaKi_KljlbMkP54JOWog5rGRKxA5DrX-m0q9pnQk8epohwD_V-wvwP9waSCAsP6aB2rV2l1Wezwi1htHqVMnUOWZy6I-D2OZ9l4lv7mMjywwHji838/s320/aglytch.jpg' alt='aglytch'></img>");

        // Replace the content of the body with the image
        $("body").empty().append(img);
    }
});
