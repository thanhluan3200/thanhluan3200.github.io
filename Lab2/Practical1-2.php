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
    $a=1;
    $b=4;
    $c=3;
    if($a>$b)
    {
        if($a>$c)
        echo "Maximum num a = $a";
        else
        echo "Maximum num c = $c";

    }
    else
    {
        if($c>$b)
        echo "Maximum num c = $c";
        else
        echo "Maximum num b = $b";

    }
    ?>
</body>
</html>