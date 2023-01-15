

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST['name'])){
       
            $name_error = "Name error, try again";
        }

    
    if(empty($_POST['email']) ) {
       
            $email_error = "Email error, try again";
        
    }

    if(empty($_POST['phonenumber']) or (!ctype_digit($_POST['phonenumber'])) or (strlen($_POST['phonenumber']) != 10)){
       
            $pNumber_error = "Phone number error, try again";
        
    }

    if (empty($_POST['age']) or (!ctype_digit($_POST['age'])) or ($_POST['age'] < 18) or ($_POST['age'] > 99)){
            $age_error = "Age error, try again";
        } 
    
    if(empty($_POST['password']) or (strlen($_POST['password']) < 8)){
        
            $password_error = "Password must be at least 8 characters";
        
    }
}



?>
<html>
<head>
    <title>Form Validation</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <span><?php if(isset($name_error)) echo $name_error; ?></span>
    <span><?php if(isset($email_error)) echo $email_error; ?></span>
    <span><?php if(isset($pNumber_error)) echo $pNumber_error; ?></span>
    <span><?php if(isset($age_error)) echo $age_error; ?></span>
    <span><?php if(isset($password_error)) echo $password_error; ?></span>
    <br>
        <button id="butt">Try Again</button>
        <script>
            const buttonclicked = document.getElementById("butt");
            buttonclicked.addEventListener("click", e => { 
                location.href = "https://ananpune.dev.fast.sheridanc.on.ca/10199/a5/index.html";

            })
        </script>
    
</body>

</html>