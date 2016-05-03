var DummyLoginUtil = new DummyLoginUtil();

setVisual();

function setVisual() {
    if (!localStorage.deviceSubmitted) {
        $("#my-acc-num-list").text("0");
        $("#first-listing").hide();
    }
    else {
        $("#my-acc-num-list").text("1");
        var deviceDesc = getDeviceDesc();
        $("#listing-device-type").text(deviceDesc.name);
        $("#listing-device-condition").text(deviceDesc.condition);
    }
}

(function(){
    document.getElementById("log-out-btn").onclick = function() {
        DummyLoginUtil.logOutUser();
        window.location = "index.html";
    }

    document.getElementById("my-acc-user-name").innerHTML = DummyLoginUtil.currentUser();
    document.getElementById("my-acc-user-email").innerHTML = DummyLoginUtil.requestUserInfo().email;

    $("#cancel-listing").click(function() {
        if (confirm("Are you sure?") == true) {
            localStorage.removeItem("deviceSubmitted");
            setVisual();
        }
    })
})();
