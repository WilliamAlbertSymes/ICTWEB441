<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="CSSSTYLE.css"></link>
</head>
<body>
        <form></form>
    <h1 id="statement">Hello World!</h1>
    <div id="changebackground">

        <p>This is my RSS container</p>
    </div>
    <button  onclick="myFunction()" id="testbutton1">Try this button!</button>
    <button  onclick="dark_theme()" id="testtoggle1">Try this toggle!</button>
    
    <script>
        function myFunction() {
            document.getElementById("statement").innerHTML ="Button Clicked!.";
            //object name.function

            alert(document.getElementById("statement").innerHTML);
            //generates an alert message after clicking 'Try this button!'
        }
        function dark_theme() {
            //alert("Here I am");
            //document.getElementById("changebackground").classList.toggle("body_dark"); 
            document.body.classList.toggle("body_dark");
            //conects document to html through to the body
        }
    </script>

</body>
</html>