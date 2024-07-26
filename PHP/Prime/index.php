<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Check if a number is a Prime Number</title>
</head>
<body>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
        <label>Enter a Number</label>
        <input type="text" id="num" name="num"/>
        <input type="submit" value="Check"/>
    </form>
    <?php

    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        $num = $_POST['num'];
        if (isPrime($num)){
            echo "Number is Prime";
        } else {
            echo "Number is Not Prime";
        }
    }
    
    function isPrime($num){
        if ($num <= 1){
            return false;
        }

        for ($i = 2; $i <= sqrt($num); $i++){
            if (($num % $i) == 0) {
                return false;
            }
        }
        return true;
    }
    
    ?>
</body>
</html>