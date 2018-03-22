$(document).ready(function(){
    var a = $("#a").val();
    var b = $("#b").val();   
    $("#submit").on("click", function(){
        var sum = a + b;
        alert(sum);         
    })
})
