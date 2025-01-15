function display() {
            if (document.getElementById('GFG').checked) {
                document.getElementById("disp").innerHTML
                    = document.getElementById("GFG").value
                    + " radio button checked";
            }
            else if (document.getElementById('HTML').checked) {
                document.getElementById("disp").innerHTML
                    = document.getElementById("HTML").value
                    + " radio button checked";
            }
            else if (document.getElementById('JS').checked) {
                document.getElementById("disp").innerHTML
                    = document.getElementById("JS").value
                    + " ";
            }
			 else if (document.getElementById('JSa').checked) {
                document.getElementById("disp").innerHTML
                    = document.getElementById("JSa").value
                    + " ";
            }
			else if (document.getElementById('JSb').checked) {
                document.getElementById("disp").innerHTML
                    = document.getElementById("JSb").value
                    + " ";
            }
			else if (document.getElementById('JSc').checked) {
                document.getElementById("disp").innerHTML
                    = document.getElementById("JSc").value
                    + " ";
            }
			else if (document.getElementById('JSd').checked) {
                document.getElementById("disp").innerHTML
                    = document.getElementById("JSd").value
                    + " ";
            }
			else if (document.getElementById('JSe').checked) {
                document.getElementById("disp").innerHTML
                    = document.getElementById("JSe").value
                    + " ";
            }
			else if (document.getElementById('JSf').checked) {
                document.getElementById("disp").innerHTML
                    = document.getElementById("JSf").value
                    + " ";
            }
			else if (document.getElementById('JSg').checked) {
                document.getElementById("disp").innerHTML
                    = document.getElementById("JSg").value
                    + " ";
            }
			else if (document.getElementById('JSh').checked) {
                document.getElementById("disp").innerHTML
                    = document.getElementById("JSh").value
                    + " ";
            }
			else if (document.getElementById('JSi').checked) {
                document.getElementById("disp").innerHTML
                    = document.getElementById("JSi").value
                    + " ";
            }
			else if (document.getElementById('JSj').checked) {
                document.getElementById("disp").innerHTML
                    = document.getElementById("JSj").value
                    + " ";
            }
			else if (document.getElementById('JSk').checked) {
                document.getElementById("disp").innerHTML
                    = document.getElementById("JSk").value
                    + " ";
            }
			else if (document.getElementById('JSl').checked) {
                document.getElementById("disp").innerHTML
                    = document.getElementById("JSl").value
                    + " ";
            }
			else if (document.getElementById('JSm').checked) {
                document.getElementById("disp").innerHTML
                    = document.getElementById("JSm").value
                    + " ";
            }
			else if (document.getElementById('JSn').checked) {
                document.getElementById("disp").innerHTML
                    = document.getElementById("JSn").value
                    + " ";
            }
			else if (document.getElementById('JSo').checked) {
                document.getElementById("disp").innerHTML
                    = document.getElementById("JSo").value
                    + " ";
            }
			else if (document.getElementById('JSp').checked) {
                document.getElementById("disp").innerHTML
                    = document.getElementById("JSp").value
                    + " ";
            }
			else if (document.getElementById('JSq').checked) {
                document.getElementById("disp").innerHTML
                    = document.getElementById("JSq").value
                    + " ";
            }
			else if (document.getElementById('JSr').checked) {
                document.getElementById("disp").innerHTML
                    = document.getElementById("JSr").value
                    + " ";
            }
			else if (document.getElementById('JSs').checked) {
                document.getElementById("disp").innerHTML
                    = document.getElementById("JSs").value
                    + " ";
            }
			else if (document.getElementById('JSt').checked) {
                document.getElementById("disp").innerHTML
                    = document.getElementById("JSt").value
                    + " ";
            }
			else if (document.getElementById('JSu').checked) {
                document.getElementById("disp").innerHTML
                    = document.getElementById("JSu").value
                    + " ";
            }
			
            else {
                document.getElementById("disp").innerHTML
                    = "No  selected ";
            }
        }




 $(".login-form").hide();
$(".login").css("background", "none");
 $(".login1-form").hide();
$(".login1").css("background", "none");
 $(".login2-form").hide();
$(".login2").css("background", "none");
 $(".login3-form").hide();
$(".login3").css("background", "none");
 $(".login4-form").hide();
$(".login4").css("background", "none");


$(".login").click(function(){
 $(".login1-form").hide();	
  $(".login2-form").hide();	
   $(".login3-form").hide();
 $(".login4-form").hide();	   
  $(".signup-form").hide();
  $(".login-form").show();
  $(".login1").css("background", "none");
   $(".login2").css("background", "none");
   $(".login3").css("background", "none");
   $(".login4").css("background", "none");
  $(".signup").css("background", "none");
  $(".login").css("background", "#fff");
});

$(".signup").click(function(){
  $(".signup-form").show();
  $(".login-form").hide();
  $(".login1-form").hide();
   $(".login2-form").hide();
   $(".login3-form").hide();
 $(".login4-form").hide();
  $(".login").css("background", "none");
  $(".login1").css("background", "none");
   $(".login2").css("background", "none");
   $(".login3").css("background", "none");
   $(".login4").css("background", "none");
  $(".signup").css("background", "#fff");
});
$(".login1").click(function(){
 $(".login-form").hide();	
 $(".login2-form").hide();
$(".login3-form").hide();
 $(".login4-form").hide(); 
  $(".signup-form").hide();
  $(".login1-form").show();
  $(".login").css("background", "none");
  $(".login2").css("background", "none");
  $(".login3").css("background", "none");
   $(".login4").css("background", "none");
  $(".signup").css("background", "none");
  $(".login1").css("background", "#fff");
});
$(".login2").click(function(){
 $(".login-form").hide();	
 $(".login1-form").hide();	
  $(".signup-form").hide();
  $(".login3-form").hide();
 $(".login4-form").hide();
  $(".login2-form").show();
  $(".login").css("background", "none");
  $(".login1").css("background", "none");
  $(".signup").css("background", "none");
  $(".login3").css("background", "none");
   $(".login4").css("background", "none");
  $(".login2").css("background", "#fff");
});
$(".login3").click(function(){
 $(".login-form").hide();	
 $(".login1-form").hide();	
  $(".signup-form").hide();
  $(".login2-form").hide();
 $(".login4-form").hide();
  $(".login3-form").show();
  $(".login").css("background", "none");
  $(".login1").css("background", "none");
  $(".signup").css("background", "none");
  $(".login2").css("background", "none");
   $(".login4").css("background", "none");
  $(".login3").css("background", "#fff");
});
$(".login4").click(function(){
 $(".login-form").hide();	
 $(".login1-form").hide();	
  $(".signup-form").hide();
  $(".login2-form").hide();
 $(".login3-form").hide();
  $(".login4-form").show();
  $(".login").css("background", "none");
  $(".login1").css("background", "none");
  $(".signup").css("background", "none");
  $(".login2").css("background", "none");
   $(".login3").css("background", "none");
  $(".login4").css("background", "#fff");
});
$(".btn").click(function(){
  $(".input").val("");
});

