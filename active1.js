  $(document).ready(function () {
    var allowedUrls = ["www.myurl.com", "www.anotherurl.com"]; // Add allowed URLs to this array
    var currentUrl = window.location.hostname;

    // Check if the current URL is not in the allowedUrls array
    if (!allowedUrls.includes(currentUrl)) {
        // Create an image element
        var img = $('<div dir="ltr" style="text-align: left;" trbidi="on"><br /><div class="remain"><br /><br /><br /><br /><div class="redirect"><div class="ops"><br /><br /><br /><style>.keypage {text-align: center;font-size: 12px;font-family: cairo;background: #ff0808;color: #fff;padding: 24px;margin: 0 auto;width: 63%}.keypage h2, h4 {padding-top: 10px;}</style><br /> <div class="keypage"> <div class="activetheme"><i class="fa fa-exclamation-triangle"></i><br /><h2> يجب عليك تفعيل القالب</h2><h4>    هذا القالب ليس ملك اي مدونة آخرى غير مدونة  Aglytch</h4>   اما اذا حصلت على القالب مجانا من أحد الأشخاص أو المواقع فلن يعمل القالب معك</div></div><br /></div></div></div></div>');

        // Replace the content of the body with the image
        $("body").empty().append(img);
    }
});
