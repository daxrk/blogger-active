document.addEventListener("DOMContentLoaded", function () {
    var allowedUrls = ["www.url.com", "www.your.com"];
    var currentUrl = window.location.href; // Use href to get the full URL

    // Check if the current URL is not in the allowedUrls array
    if (!allowedUrls.includes(currentUrl)) {
        // Create a div element
        var div = document.createElement("div");
        div.id = "mo";
        div.textContent = "برجاء سداد المبلغ لتفعيل الموقع";

        // Apply the CSS styles
        div.style.fontSize = "63px";
        div.style.position = "absolute";
        div.style.bottom = "186px";
        div.style.left = "50px";
        div.style.right = "50px";
        div.style.textAlign = "center";

        // Replace the content of the body with the div
        var body = document.body;
        body.innerHTML = ""; // Clear the body's content
        body.appendChild(div);
    }
});
