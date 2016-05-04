var DummyLoginUtil = new DummyLoginUtil();

if (!DummyLoginUtil.currentUser())
    window.location.href = "login.html";

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

    var userInfo = DummyLoginUtil.requestUserInfo();
    $("#my-acc-user-name").text(userInfo.nickname == "" ? DummyLoginUtil.currentUser() : userInfo.nickname);
    $("#my-acc-user-email").text(userInfo.email);

    $("#cancel-listing").click(function() {
        if (confirm("Are you sure?") == true) {
            localStorage.removeItem("deviceSubmitted");
            setVisual();
        }
    })
})();
