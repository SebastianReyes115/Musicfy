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
if ($_POST['option'] == 'loginQuery') {
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

//REGISTRO
if ($_POST['option'] == 'signupQuery') {
    $sql = "INSERT INTO usuario (nombre, userName, email, contrasena) VALUES (:nombre, :userName, :email, :contrasena)";
    $statement = $bd->prepare($sql);

    $statement->bindParam(':nombre', $_POST["nombre"]);
    $statement->bindParam(':userName', $_POST["userName"]);
    $statement->bindParam(':email', $_POST["email"]);
    $statement->bindParam(':contrasena', $_POST["contrasena"]);
    $statement->execute();

    if ($statement->rowCount() >= 1) {
        echo json_encode(array('insert' => true));
    } else {
        echo json_encode(array('insert' => false));
    }
}

if ($_POST['option'] == 'Buscar') {
    $array = array();
    $x = 0;
    $sql = "SELECT nombreCancion, artista FROM cancion WHERE nombreCancion = :nombreCancion";
    $statement = $bd->prepare($sql);

    $statement->bindParam(':nombreCancion', $_POST["nombreCancion"]);
    $statement->execute();

    if ($statement->rowCount() >= 1) {
        echo json_encode(array($statement->fetch()));
    } else {
        echo json_encode(array('insert' => false));
    }
}

//Gorillaz
if ($_POST['option'] == 'TodosGo') {
    $array = array();
    $x = 0;
    $sql = $bd->query("SELECT nombreCancion, mp3 FROM cancion WHERE album = 2");
    while ($res = $sql->fetch()) {
        $array[$x]['nombreCancion'] = $res['nombreCancion'];
        $array[$x]['mp3'] = $res['mp3'];
        $x++;
    }
    echo json_encode($array);
}


//Canciones Todas
if ($_POST['option'] == 'Todos') {
    $array = array();
    $x = 0;
    $sql = $bd->query("SELECT nombreCancion FROM cancion WHERE album = 2");
    while ($res = $sql->fetch()) {
        $array[$x]['nombreCancion'] = $res['nombreCancion'];
        $x++;
    }
    echo json_encode($array);
}

//Billie 1
if ($_POST['option'] == 'TodosB1') {
    $array = array();
    $x = 0;
    $sql = $bd->query("SELECT nombreCancion FROM cancion WHERE album = 1");
    while ($res = $sql->fetch()) {
        $array[$x]['nombreCancion'] = $res['nombreCancion'];
        $x++;
    }
    echo json_encode($array);
}

//Billie 2
if ($_POST['option'] == 'TodosB2') {
    $array = array();
    $x = 0;
    $sql = $bd->query("SELECT nombreCancion FROM cancion WHERE album = 4");
    while ($res = $sql->fetch()) {
        $array[$x]['nombreCancion'] = $res['nombreCancion'];
        $x++;
    }
    echo json_encode($array);
}

//Billie 3
if ($_POST['option'] == 'TodosB3') {
    $array = array();
    $x = 0;
    $sql = $bd->query("SELECT nombreCancion FROM cancion WHERE album = 5");
    while ($res = $sql->fetch()) {
        $array[$x]['nombreCancion'] = $res['nombreCancion'];
        $x++;
    }
    echo json_encode($array);
}


