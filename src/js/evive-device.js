function loadInlineSvg() {
    $('img.svg').each(function(){
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');

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
}

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

function goto(url){
    window.location.href = url;
}

function loadEviveNavigation(stage) {
    $("#eviveNavigation").load("evive_navigation.html", function() {
        (function() {
            $("[name='deviceNavigations']").addClass("button-icon-disabled");

            var $nav_deviceType = $("#nav_deviceType");
            var deviceType = JSON.parse(localStorage.deviceTypeObj);
            $nav_deviceType.find("small").text(deviceType.text);
            $nav_deviceType.find("img").attr("src", deviceType.image);
            $nav_deviceType.removeClass("button-icon-disabled");
            if (stage == "deviceType") {
                $nav_deviceType.addClass("button-icon-current");
                return;
            }
            $nav_deviceType.click(function () {
                goto("evive_device_type.html");
            });
            $nav_deviceType.addClass("button-icon-selected");

            var $nav_deviceBrand = $("#nav_deviceBrand");
            var deviceBrand = JSON.parse(localStorage.deviceBrandObj);
            $nav_deviceBrand.find("small").text(deviceBrand.text);
            $nav_deviceBrand.find("img").attr("src", deviceBrand.image);
            $nav_deviceBrand.removeClass("button-icon-disabled");
            if (stage == "deviceBrand") {
                $nav_deviceBrand.addClass("button-icon-current");
                return;
            }
            $nav_deviceBrand.click(function () {
                goto("evive_device_type.html");
            });
            $nav_deviceBrand.addClass("button-icon-selected");

            var $nav_deviceModel = $("#nav_deviceModel");
            $nav_deviceModel.find("small").text(JSON.parse(localStorage.deviceModelObj).text);
            $nav_deviceModel.removeClass("button-icon-disabled");
            if (stage == "deviceModel") {
                $nav_deviceModel.addClass("button-icon-current");
                return;
            }
            $nav_deviceModel.click(function () {
                goto("evive_device_type.html");
            });
            $nav_deviceModel.addClass("button-icon-selected");

            var $nav_deviceCondition = $("#nav_deviceCondition");
            $nav_deviceCondition.removeClass("button-icon-disabled");
            if (stage == "deviceCondition") {
                $nav_deviceCondition.addClass("button-icon-current");
                return;
            }
            $nav_deviceCondition.click(function () {
                goto("evive_device_condition.html");
            });
            $nav_deviceCondition.addClass("button-icon-selected");

            var $nav_deviceLocation = $("#nav_deviceLocation");
            $nav_deviceLocation.removeClass("button-icon-disabled");
            if (stage == "deviceLocation") {
                $nav_deviceLocation.addClass("button-icon-current");
                return;
            }
            $nav_deviceLocation.click(function () {
                goto("evive_device_location.html");
            });
            $nav_deviceLocation.addClass("button-icon-selected");

            var $nav_deviceUser = $("#nav_deviceUser");
            $nav_deviceUser.removeClass("button-icon-disabled");
            if (stage == "deviceUser") {
                $nav_deviceUser.addClass("button-icon-current");
                return;
            }
            $nav_deviceUser.click(function () {
                goto("evive_device_user.html");
            });
            $nav_deviceUser.addClass("button-icon-selected");
        })();

        loadInlineSvg();
    });
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

function getDeviceDesc() {
    var deviceCondition = Number(localStorage.deviceCondition), deviceConditionText;
    if (deviceCondition <= 2)
        deviceConditionText = "Like New";
    else if (deviceCondition <= 5)
        deviceConditionText = "Used";
    else
        deviceConditionText = "Broken";

    return {
        name: JSON.parse(localStorage.deviceBrandObj).text + " " + JSON.parse(localStorage.deviceModelObj).text,
        condition: deviceConditionText,
        conditionNote: localStorage.deviceConditionNote
    };
}
