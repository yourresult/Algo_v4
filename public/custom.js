$(".card.ordWindow").draggable({ cancel: ".card-body" }); //  containment: "body", scroll: false
$("input#qty").keyup(function(d){
    $("span.qty").text($(this).val())
})