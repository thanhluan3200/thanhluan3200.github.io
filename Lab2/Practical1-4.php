<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nguyễn Thành Luân</title>
</head>
<body>
    <?php
    $no=5;
    $value =13.5;
    $name="Bipin R. Prajapati";
    $var=true;
    $myarray =array(110,45,"Bipin",1.5,true);
    echo gettype($no)."<br/>";//Trả về kiểu dữ liệu biến
    echo gettype($value)."<br/>";
    echo gettype($name)."<br/>";
    echo gettype($var)."<br>";
    echo gettype($myarray)."<br/>";
    echo "<hr/>";
    $data = array(1,1.5,null,"Bipin",new stdclass,true);
    foreach($data as $value)// Mỗi vòng lặp giá trị của data sẽ được gán cho value
    {
        echo gettype($value)."|";
    }
    ?>
</body>
</html>