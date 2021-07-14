$(function(){
    $("form").submit(function(){
        $.get("/ans").done(function(data){
            $("#input").val(data);
        })
        return false;
    });
});