<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $to = 'vitaly@ratkus.com.ua';
    $subject = 'New Request from Order Form';

    // Сбор данных из формы
    $userName = htmlspecialchars($_POST['user-name'] ?? 'Unknown');
    $userEmail = htmlspecialchars($_POST['user-email'] ?? 'Unknown');
    $userPhone = htmlspecialchars($_POST['user-phone'] ?? 'Not provided');
    $userComment = htmlspecialchars($_POST['user-comment'] ?? 'No comment provided');
    $userBudget = htmlspecialchars($_POST['user-budget'] ?? 'Not specified');
    $userNda = isset($_POST['user-nda']) ? 'Yes' : 'No';

    $message = "
        Name: $userName
        Email: $userEmail
        Phone: $userPhone
        Budget: $userBudget
        NDA: $userNda
        Comment: $userComment
    ";

    // Обработка файлов
    $allowedExtensions = ['doc', 'docx', 'pdf', 'ppt', 'pptx', 'xlsx', 'zip', 'rar'];
    $maxFileSize = 30 * 1024 * 1024; // 30 MB
    $uploadedFiles = [];

    if (!empty($_FILES['files']['name'][0])) {
        foreach ($_FILES['files']['name'] as $key => $fileName) {
            $fileTmpPath = $_FILES['files']['tmp_name'][$key];
            $fileSize = $_FILES['files']['size'][$key];
            $fileError = $_FILES['files']['error'][$key];
            $fileExtension = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

            if ($fileError === UPLOAD_ERR_OK) {
                if (!in_array($fileExtension, $allowedExtensions)) {
                    echo "File $fileName has an unsupported format.";
                    http_response_code(400);
                    exit;
                }

                if ($fileSize > $maxFileSize) {
                    echo "File $fileName exceeds the maximum size of 30MB.";
                    http_response_code(400);
                    exit;
                }

                $uploadedFiles[] = [
                    'path' => $fileTmpPath,
                    'name' => $fileName
                ];
            } else {
                echo "Error uploading file $fileName.";
                http_response_code(500);
                exit;
            }
        }
    }

    // Создание MIME-сообщения с вложениями
    $boundary = md5(time());
    $headers = [
        "From: $userEmail",
        "Reply-To: $userEmail",
        "MIME-Version: 1.0",
        "Content-Type: multipart/mixed; boundary=\"$boundary\""
    ];

    $emailBody = "--$boundary\r\n";
    $emailBody .= "Content-Type: text/plain; charset=utf-8\r\n\r\n";
    $emailBody .= "$message\r\n";

    // Добавление файлов к письму
    foreach ($uploadedFiles as $file) {
        $fileContent = chunk_split(base64_encode(file_get_contents($file['path'])));
        $emailBody .= "--$boundary\r\n";
        $emailBody .= "Content-Type: application/octet-stream; name=\"{$file['name']}\"\r\n";
        $emailBody .= "Content-Transfer-Encoding: base64\r\n";
        $emailBody .= "Content-Disposition: attachment; filename=\"{$file['name']}\"\r\n\r\n";
        $emailBody .= "$fileContent\r\n";
    }

    $emailBody .= "--$boundary--";

    // Отправка письма
    if (mail($to, $subject, $emailBody, implode("\r\n", $headers))) {
        http_response_code(200);
        echo 'Email sent successfully!';
    } else {
        http_response_code(500);
        echo 'Failed to send email.';
    }
} else {
    http_response_code(405);
    echo 'Method not allowed.';
}
<?php
echo json_encode(["status" => "success", "message" => "PHP script reached"]);
?>
