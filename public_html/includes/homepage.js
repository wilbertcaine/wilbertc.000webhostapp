var u=true;
var r=true;

$(document).ready(function(){
    $("#reg").attr("disabled", true);
    $("#username").on('keyup change', function(){
        var username=$("#username").val();
        if (username!=""){
            $("#message").html("Checking availability...");
            $.ajax({
                type:"post",
                url:"../username_check.php",
                data:"username="+username,
                success:function(data){
                    if(data==0){
                        $("#message").html(username+" is available!");
                        $("#password").val(""); 
                        u=false;
                    }
                    else{
                        $("#message").html(username+" is already in use!");
                        $("#password").val(""); 
                        u=true;
                    }
                }
            });
        }
        else{
            u=true;
        }
    });
    $("#password").on('keyup change', function(){
        $("#reg").attr("disabled", (u || ($("#password").val()=="")));
    });

    $("#login").attr("disabled", true);
    $("#user").on('keyup change', function(){
        var user=$("#user").val();
        if (user!=""){
            $("#match").html("Checking...");
            $.ajax({
                type:"post",
                url:"../username_check.php",
                data:"username="+user,
                success:function(data){
                    if(data!=0){
                        $("#match").html("please enter your password for "+user);
                        $("#pass").val(""); 
                        r=false;
                    }
                    else{
                        $("#match").html("no match found!");
                        $("#pass").val(""); 
                        r=true;
                    }
                }
            });
        }
        else{
            r=true;
        }
    });
    $("#pass").on('keyup change', function(){
        $("#login").attr("disabled", (r || ($("#pass").val()=="")));
    });
 });