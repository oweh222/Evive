var DummyLoginUtil = new DummyLoginUtil();

if (DummyLoginUtil.currentUser())
    window.location.href = "myaccount.html";

loadLoginForm(DummyLoginUtil, function() { window.location.href = "myaccount.html"; });
showLoginForm();
