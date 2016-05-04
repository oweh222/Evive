function loadLoginForm(DummyLoginUtil, complete) {
    var loginSubmit = function(complete) {
        var username = $("#loginUsername").val();
        var password = $("#loginPassword").val();
        if (DummyLoginUtil.validateUser(username, password)) {
            complete();
        }
        else {
            var $loginUsernameGroup = $("#loginUsernameGroup");
            var $loginPasswordGroup = $("#loginPasswordGroup");
            $loginUsernameGroup.addClass("has-error");
            $loginPasswordGroup.addClass("has-error");
            $loginUsernameGroup.effect("shake");
            $loginPasswordGroup.effect("shake");
        }
    };

    $("#loginForm").load("login_form.html", function() {
        var $loginUsername = $("#loginUsername");
        var $loginPassword = $("#loginPassword");

        $loginUsername.keypress(function(event) { keyEnterEvent(event, function() { $loginPassword.focus(); }); });
        $loginPassword.keypress(function(event) { keyEnterEvent(event, loginSubmit, complete); });
        $("#loginSubmit").click(function() { loginSubmit(complete); });

        $("#loginLostPassword").click(function() {
            var user = DummyLoginUtil.resetUserInfo();
            $loginUsername.val(user.username);
            $loginPassword.val(user.password);
        });

        $("[name='loginLogout']").click(function() {
            DummyLoginUtil.logOutUser();
            complete();
        })
    });
}

function showLoginForm() {
    $("#loginUsername").focus();
}
