<?php
$dsn = 'mysql:host=localhost;dbname=musicfy';
$user = 'root';
$pwd = '';
try {
    $bd = new PDO($dsn, $user, $pwd);
} catch (PDOException $e) {
    echo "Error db";
    die();
}

//LOGIN
if ($_POST['login'] == 'loginQuery') {
    $sql = "SELECT * FROM usuario WHERE userName = :userName AND contrasena = :contrasena";
    $statement = $bd->prepare($sql);

    $statement->bindParam(':userName', $_POST["userName"]);
    $statement->bindParam(':contrasena', $_POST["contrasena"]);
    $statement->execute();

    if ($statement->rowCount() >= 1) {
        echo json_encode(array('login' => true));
    } else {
        echo json_encode(array('login' => false));
    }
}

