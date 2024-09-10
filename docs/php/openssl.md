####1. 生成公钥和私钥
首先，你需要生成 RSA 公钥和私钥。你可以使用 openssl_pkey_new 函数生成密钥对。

示例代码：
```php
<?php
// 生成新的私钥
$config = array(
    "private_key_bits" => 2048, // 密钥长度
    "private_key_type" => OPENSSL_KEYTYPE_RSA, // 密钥类型
);
$privateKey = openssl_pkey_new($config);

// 将私钥保存到文件
openssl_pkey_export_to_file($privateKey, 'private_key.pem');

// 从私钥中提取公钥
$publicKey = openssl_pkey_get_details($privateKey);
$publicKey = $publicKey["key"];

// 将公钥保存到文件
file_put_contents('public_key.pem', $publicKey);

echo "公钥和私钥已生成并保存到文件中。\n";
?>
```
2. 加密数据
使用公钥对数据进行加密。

示例代码：
```php
 <?php
    // 读取公钥
    $publicKey = file_get_contents('public_key.pem');
    
    // 要加密的数据
    $data = "Hello, RSA2 encryption!";
    
    // 使用公钥加密数据
    openssl_public_encrypt($data, $encryptedData, $publicKey);
    
    // 将加密后的数据转换为 Base64 编码
    $encryptedDataBase64 = base64_encode($encryptedData);
    
    echo "加密后的数据 (Base64): " . $encryptedDataBase64 . "\n";
    ?>
```

3. 解密数据
使用私钥对加密后的数据进行解密。

示例代码：
```php
<?php
// 读取私钥
$privateKey = file_get_contents('private_key.pem');

// 加密后的数据 (Base64 编码)
$encryptedDataBase64 = "your_encrypted_data_base64_here";

// 将 Base64 编码的加密数据解码
$encryptedData = base64_decode($encryptedDataBase64);

// 使用私钥解密数据
openssl_private_decrypt($encryptedData, $decryptedData, $privateKey);

echo "解密后的数据: " . $decryptedData . "\n";
?>
```
4. 完整示例
以下是一个完整的示例代码，展示如何生成公钥和私钥、加密数据和解密数据。

示例代码：
```php
<?php
// 生成新的私钥
$config = array(
    "private_key_bits" => 2048, // 密钥长度
    "private_key_type" => OPENSSL_KEYTYPE_RSA, // 密钥类型
);
$privateKey = openssl_pkey_new($config);

// 将私钥保存到文件
openssl_pkey_export_to_file($privateKey, 'private_key.pem');

// 从私钥中提取公钥
$publicKey = openssl_pkey_get_details($privateKey);
$publicKey = $publicKey["key"];

// 将公钥保存到文件
file_put_contents('public_key.pem', $publicKey);

echo "公钥和私钥已生成并保存到文件中。\n";

// 读取公钥
$publicKey = file_get_contents('public_key.pem');

// 要加密的数据
$data = "Hello, RSA2 encryption!";

// 使用公钥加密数据
openssl_public_encrypt($data, $encryptedData, $publicKey);

// 将加密后的数据转换为 Base64 编码
$encryptedDataBase64 = base64_encode($encryptedData);

echo "加密后的数据 (Base64): " . $encryptedDataBase64 . "\n";

// 读取私钥
$privateKey = file_get_contents('private_key.pem');

// 将 Base64 编码的加密数据解码
$encryptedData = base64_decode($encryptedDataBase64);

// 使用私钥解密数据
openssl_private_decrypt($encryptedData, $decryptedData, $privateKey);

echo "解密后的数据: " . $decryptedData . "\n";
?>
```
总结
通过以上步骤，你可以在 PHP 中使用 OpenSSL 扩展进行 RSA2 加密和解密。确保在实际应用中进行充分的测试和验证，以确保操作的正确性和安全性。