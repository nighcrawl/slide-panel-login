jQuery(document).ready(function($){
    $(".slide").on("click", function(event) {
        event.preventDefault();
        $(this).prev(".panel").slideToggle("slow");
        $(this).toggleClass("active");
    });
});
