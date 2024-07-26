<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
</head>
<body>

    <form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">

        <label>Enter your Username: </label>
        <input type="text" id="username" name="username" />
        <br /><br />
        <label>Enter your Passowrd: </label>
        <input type="text" id="password" name="password" />

        <br /><br />
        <input type="submit" value="Submit" />
    </form>

    <?php 
    
    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        $username = $_POST['username'];
        $password = $_POST['password'];

        // Read the file
        $file = 'credentials.txt';
        $users = file($file, FILE_IGNORE_NEW_LINES);

        foreach ($users as $user) {
            list($storedUsername, $storedPassword) = explode(',', $user);
            if ($username == $storedUsername && $password == $storedPassword) {
                echo "Login Credentials are valid\n Welcome " . $username;
                return;
            } 
        }
            
        echo "Login Credentials are invalid";

    } 

    ?>
</body>
</html>