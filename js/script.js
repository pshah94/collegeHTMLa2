function accordionClick(btn) {
    resetAccordion(btn);
    btn.classList.toggle("active");
    var panel = btn.nextElementSibling;
    //alert(panel.style.maxHeight);
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
};

function resetAccordion(skipBtn) {
    var accordions = $('.accordion');
    for (var i = 0; i < accordions.length; i++) {
        var btn = accordions[i];
        if (btn != skipBtn) {
            btn.classList.remove("active");
            var panel = btn.nextElementSibling;
            panel.style.maxHeight = null;
        }
    }
}
var changeImage = function(src) {
        $(".images .content_section .image_display_area img")[0].src = src;
    }
    //$(".thumbnails_listing li figure img").hover(function() { console.log(this) });
    //to make both left and right aside of same height. (left aside is always long in context to sites content)
$((function() {
    $(".rightAside").css('height', $(".leftAside").css('height'));
}));