/**
 * Created by Sihao on 2016/5/1.
 */
var DummyLoginUtil = new DummyLoginUtil();

(function(){
    document.getElementById("log-out-btn").onclick = function(){
        DummyLoginUtil.logOutUser();
        window.location = "index.html";
    }

    document.getElementById("my-acc-user-name").innerHTML = localStorage.eviveCurUser;
    document.getElementById("my-acc-user-email").innerHTML = localStorage.eviveCurEmail;

    $("#cancel-listing").click(function(){
        if (confirm("Are you sure?") == true)
        {
            $("#first-listing").hide();
            $("#my-acc-num-list").html(0);
        }
    })
})();
