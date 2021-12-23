function f(d) {
    // nếu d = str c thì sẽ trả về một ký tự rỗng
    if (d == 'c') {
        document.getElementById('res').value = "";
        return
    }
    // nếu res = = thì trả d về = 0, nếu d là + - * / thì num sẽ chuyển thành kiểu float 
    res = document.getElementById('res').value;
    if (res == 0 && d == 0)
        return;
    if (d == '+' || d == '-' || d == '*' || d == '/') {
        opr = d;
        num = parseFloat(res);
        document.getElementById('res').value = d;
        return;
    }
    // d là dấu = thì dấu + - * / sẽ bằng thực hiện số num + - * / với num 1, khi thực hiện phép tính xong sẽ kết thúc.
    if (d == '=') {
        num1 = parseFloat(res);
        switch (opr) {
            case '+': ans = num + num1; break;
            case '-': ans = num - num1; break;
            case '*': ans = num * num1; break;
            case '/': ans = parseInt(num / num1); break;
        }
        document.getElementById('res').value = ans;
        return;
    }
     // nếu d = -- thì sẽ nhân số với -
    if (d == '--') {
        document.getElementById('res').value *= -1;
        return;
    }
    // nếu nhập chuỗi bị dư như ** hoặc -- thì sẽ xuất ra NaN
    if (!isNaN(document.getElementById('res').value))
        document.getElementById('res').value += d;
    else
        document.getElementById('res').value = d;
}