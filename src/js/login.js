
var DummyLoginUtil = new DummyLoginUtil();

(function(){

    document.getElementById("login-btn").onclick = function(){
        var username = document.getElementById("login-name").value;
        var password = document.getElementById("login-pw").value;
        if (DummyLoginUtil.validateUser(username, password))
            window.location.href = "myaccount.html";
        else
            alert("Login Failed!");
    };

    document.getElementById("reset-user").onclick = function(){
        DummyLoginUtil.resetUserInfo();
        return alert("An email was sent to your email address, follow the instruction to reset your password.");
    };

})();
