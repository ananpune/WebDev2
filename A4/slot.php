<!DOCTYPE html>
<?php
    $num1 = rand(1,3); $num2 = rand(1,3); $num3 = rand(1,3);
    
?>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Slot Machine Game</title>
</head>

<body>
    <h1>
        Slot Machine Game
    </h1>
    <br>

        <img src="fruit/<?php echo $num1 ?>.png" width=100 height=100 id="apple">
        <img src="fruit/<?php echo $num2 ?>.png" width=100 height=100 id="cherry">
        <img src="fruit/<?php echo $num3 ?>.png" width=100 height=100 id="grapes">

        <?php

        if (($num1===$num2) and ($num1===$num3)){
            echo "You Win";
        } 
        else if(($num1===$num2) or ($num1===$num3) or ($num2===$num3)){
            echo "You Win";
        }
        else{
            echo "You Lose";
        }


    
          
        ?>
        <br>
        <button id="butt">Play Again</button>
        <script>
            const buttonclicked = document.getElementById("butt");
            buttonclicked.addEventListener("click", e => { 
                location.reload();

            })
        </script>

    

</body>

</html>