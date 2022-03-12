var valueexpenede = 0;

$(".expended-button").click(function() {
    if (valueexpenede == 0) {
        open();
    } else {
        close();
    }
});

$("#expended-close").click(close);

function open() {
    $(".expended-menu").css("transform", "none");
    $(".expended-button-text").css("transform", "rotateY(180deg)");
    valueexpenede = 1;
}

function close() {
    $(".expended-menu").css("transform", "translateX(21vw)");
    $(".expended-button-text").css("transform", "none");
    valueexpenede = 0;
}