/**
 * Created by Bell on 5/3/2016.
 */
function loadNavigation() {
    $("#mainNavigation").load("navigation.html");
}

function keyEnterEvent(event, submit, complete) {
    if (event.which == 13) {
        event.preventDefault();
        submit(complete);
    }
}

loadNavigation();
