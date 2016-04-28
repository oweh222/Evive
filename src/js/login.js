
var DummyLoginUtil = new DummyLoginUtil();

(function(){
    DummyLoginUtil.resetUserInfo(); // Debugger
    console.log(localStorage.eviveUsers[0]);


    document.getElementById("login-btn").onclick = function(){
        var username = document.getElementById("login-name").value;
        var password = document.getElementById("login-pw").value;
        DummyLoginUtil.validateUser(username, password);

    }

})();
