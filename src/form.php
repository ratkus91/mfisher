<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $message = htmlspecialchars($_POST["message"]);

    // Проверка наличия данных
    if (!empty($name) && !empty($phone) && !empty($email) && !empty($message)) {
        // Дополнительная проверка формата телефона (пример)
        if (preg_match('/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/', $phone)) {

            // Отправка данных на почту
            $to = "vitaly@ratkus.com.ua";
            $subject = "Нове повідомлення із сайту mfisher";
            $body = "Ім'я: $name\n";
            $body .= "Email: $email\n";
            $body .= "Телефон: $phone\n";
            $body .= "Повідомлення:\n$message";
            mail($to, $subject, $body);

            // Возвращаем успешный статус
            echo json_encode(array('status' => 'success'));
        } else {
            // Возвращаем ошибку, если формат телефона неправильный
            echo json_encode(array('status' => 'error', 'message' => 'Неправильний формат телефону.'));
        }
    } else {
        // Возвращаем ошибку, если не все поля заполнены
        echo json_encode(array('status' => 'error', 'message' => 'Будь ласка, заповніть усі поля форми.ы'));
    }
} else {
    // Возвращаем ошибку, если запрос не является POST-запросом
    echo json_encode(array('status' => 'error', 'message' => 'Неправильний спосіб запиту.'));
}
?>
