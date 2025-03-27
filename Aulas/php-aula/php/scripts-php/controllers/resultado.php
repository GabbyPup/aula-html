<?php
require_once '/var/www/scripts/database/config.php';

$database = new DB();


if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nome = $_POST['nome'];
    $idade = $_POST['idade'];

    $conn = $database->getConnection();
    $query = "INSERT INTO pessoas   (nome, idade) VALUES (?, ?)";

    $stmt
        = $conn->prepare($query);

        $stmt->bindParam(1, $nome);
        $stmt->bindParam(2, $idade);
        $result = $stmt->execute();

    echo $result;
}


$pessoas = [
    ['nome' => 'Alice', 'idade' => 30],
];

?>