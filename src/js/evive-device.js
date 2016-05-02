// Some general UI pack related JS
// Extend JS String with repeat method
String.prototype.repeat = function (num) {
    return new Array(num + 1).join(this);
};

jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});

function goto(url){
    window.location.href = url;
}

function setNavigation(stage) {
    $("[name='deviceNavigations']").addClass("button-icon-disabled");

    var $nav_deviceType = $("#nav_deviceType");
    $nav_deviceType.removeClass("button-icon-disabled");
    if (stage == "deviceType") {$nav_deviceType.addClass("button-icon-current"); return; }
    $nav_deviceType.click(function (){ goto("evive_device_type.html"); });
    $nav_deviceType.addClass("button-icon-selected");

    var $nav_deviceBrand = $("#nav_deviceBrand");
    $nav_deviceBrand.removeClass("button-icon-disabled");
    if (stage == "deviceBrand") {$nav_deviceBrand.addClass("button-icon-current"); return; }
    $nav_deviceBrand.click(function (){ goto("evive_device_type.html"); });
    $nav_deviceBrand.addClass("button-icon-selected");

    var $nav_deviceModel = $("#nav_deviceModel");
    $nav_deviceModel.removeClass("button-icon-disabled");
    if (stage == "deviceModel") {$nav_deviceModel.addClass("button-icon-current"); return; }
    $nav_deviceModel.click(function (){ goto("evive_device_type.html"); });
    $nav_deviceModel.addClass("button-icon-selected");

    var $nav_deviceCondition = $("#nav_deviceCondition");
    $nav_deviceCondition.removeClass("button-icon-disabled");
    if (stage == "deviceCondition") {$nav_deviceCondition.addClass("button-icon-current"); return; }
    $nav_deviceCondition.click(function (){ goto("evive_device_condition.html"); });
    $nav_deviceCondition.addClass("button-icon-selected");

    var $nav_deviceLocation = $("#nav_deviceLocation");
    $nav_deviceLocation.removeClass("button-icon-disabled");
    if (stage == "deviceLocation") {$nav_deviceLocation.addClass("button-icon-current"); return; }
    $nav_deviceLocation.click(function (){ goto("evive_device_location.html"); });
    $nav_deviceLocation.addClass("button-icon-selected");

    var $nav_deviceUser = $("#nav_deviceUser");
    $nav_deviceUser.removeClass("button-icon-disabled");
    if (stage == "deviceUser") {$nav_deviceUser.addClass("button-icon-current"); return; }
    $nav_deviceUser.click(function (){ goto("evive_device_user.html"); });
    $nav_deviceUser.addClass("button-icon-selected");
}

function clearStorage() {
    localStorage.removeItem("deviceType");
    localStorage.removeItem("deviceBrand");
    localStorage.removeItem("deviceModel");
    localStorage.removeItem("deviceCondition");
    localStorage.removeItem("deviceLocation");
    localStorage.removeItem("deviceUser");
    setVisual();
}
