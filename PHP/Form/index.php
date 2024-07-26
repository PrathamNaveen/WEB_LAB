<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form</title>
</head>
<body>
    <form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
    <label>Enter a string within the Text Box</label>
    <br /><br />
    <textarea rows="4" cols="40" id="msg" name="msg" required></textarea>

    <br /><br />
    <input type="submit" value="Submit"/>
    <input type="reset" value="Reset"/>

    <?php 
    
    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        $msg = $_POST['msg'];
        
        // Get the file
        $file = 'sample.txt';
        file_put_contents($file, $msg, FILE_APPEND | LOCK_EX);

        echo "<p><h3>Form Data:</h3>" . $msg . "</p>";
    }
    
    ?>
</body>
</html>