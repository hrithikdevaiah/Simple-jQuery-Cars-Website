$(document).ready(function(){
    $("#sname,#semail,#snum,#scars").focus(function(){
        $(this).css("background","lime");
    });
    $("#sname,#semail,#snum,#scars").blur(function(){
        $(this).css("background","");
    });
    $("#scars").change(function(){
        var a = $(this).val();
        $("#test").html(a)
    });
    $("#sname,#semail,#snum").select(function(){
        $(this).css("background","yellow");
    });
    $("#sform").submit(function(){
        alert("Form Submitted.");
    });
});