function sc() {
    // nhập vào 1 khoảng dữ liệu nếu khác 2 thì hiện bảng thông báoinvalid range
    rng = prompt('Enter the range');
    res = rng.split("-");
    if (res.length != 2) {
        alert("invalid range ");
        return;
    }
    // ép kiểu (parseInt) về số nếu số đầu lớn hơn số thứ 2 thì hiện bảng thông báo invalid range
    first = parseInt(res[0]);
    second = parseInt(res[1]);
    if (first > second) {
    alert("invalid range ");
    return;
    }
    // cho số với số đầu > số 2 thì sẽ hiện bảng popup
    str = "<table border=2><tr><th>Number</th><th>Square</th><th>Cube</th></tr>";
    for (i = first; i <= second; i++) {
    str = str + "<tr><td>" + i + "<td>" + (i * i) + "<td>" + (i * i * i);
    }
    document.write(str);
   }