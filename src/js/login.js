var DummyLoginUtil = new DummyLoginUtil();

if (DummyLoginUtil.currentUser())
    window.location.href = "myaccount.html";

(function() {
    document.getElementById("login-btn").onclick = function(){
        var username = $("#login-name").val();
        var password = $("#login-pw").val();
        if (DummyLoginUtil.validateUser(username, password))
            window.location.href = "myaccount.html";
        else {
            var $loginUsernameGroup = $("#loginUsernameGroup");
            var $loginPasswordGroup = $("#loginPasswordGroup");
            $loginUsernameGroup.addClass("has-error");
            $loginPasswordGroup.addClass("has-error");
            $loginUsernameGroup.effect("shake");
            $loginPasswordGroup.effect("shake");
        }
    };

    document.getElementById("reset-user").onclick = function(){
        var user = DummyLoginUtil.resetUserInfo();
        $("#login-name").val(user.username);
        $("#login-pw").val(user.password);
    };
})();
