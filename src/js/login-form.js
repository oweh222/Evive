function loadLoginForm(DummyLoginUtil, complete) {
    $("#loginForm").load("login_form.html", function() {
        $("#loginSubmit").click(function() {
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
        });

        $("#loginLostPassword").click(function() {
            var user = DummyLoginUtil.resetUserInfo();
            $("#loginUsername").val(user.username);
            $("#loginPassword").val(user.password);
        });

        $("[name='loginLogout']").click(function() {
            DummyLoginUtil.logOutUser();
            complete();
        })
    });
}
