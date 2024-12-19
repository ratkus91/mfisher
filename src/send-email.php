<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
echo('hello'); exit();
    $to = 'vitaly@ratkus.com.ua';
    $subject = 'New Request from Order Form';

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

    $attachments = [];
    if (!empty($_FILES['files']['name'][0])) {
        foreach ($_FILES['files']['tmp_name'] as $key => $tmpName) {
            $fileName = $_FILES['files']['name'][$key];
            $fileType = $_FILES['files']['type'][$key];
            $fileContent = file_get_contents($tmpName);

            $attachments[] = [
                'name' => $fileName,
                'type' => $fileType,
                'content' => $fileContent,
            ];
        }
    }

    $boundary = md5(time());
    $headers = [
        "From: $userEmail",
        "Reply-To: $userEmail",
        "MIME-Version: 1.0",
        "Content-Type: multipart/mixed; boundary=\"$boundary\"",
    ];

    $body = "--$boundary\r\n";
    $body .= "Content-Type: text/plain; charset=utf-8\r\n";
    $body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $body .= $message . "\r\n";

    foreach ($attachments as $attachment) {
        $body .= "--$boundary\r\n";
        $body .= "Content-Type: " . $attachment['type'] . "; name=\"" . $attachment['name'] . "\"\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n";
        $body .= "Content-Disposition: attachment; filename=\"" . $attachment['name'] . "\"\r\n\r\n";
        $body .= chunk_split(base64_encode($attachment['content'])) . "\r\n";
    }

    $body .= "--$boundary--";

    if (mail($to, $subject, $body, implode("\r\n", $headers))) {
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
