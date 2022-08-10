   
<?php
$recepient = "troloko8@gmail.com";
 $siteName = "AwesomeAI";

 $name = trim($_POST["name"]);
 $surname = trim($_POST["surname"]);
 $email = trim($_POST["email"]);
 $phone = trim($_POST["phone"]);
 $data = trim($_POST["data&time"]);


 $message = "Имя: $name \n Фамилия: $surname \n email: $email \n Телефон: $phone \n Дата и время: $data;
 $pagetitle = "Заявка с сайта \"$siteName\"";
 mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>

