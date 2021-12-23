function findLMV() {
    // Nhập vào một chuỗi ký tự, đếm từ đầu bên trái chuỗi, kiểm tra các phụ âm aieou đếm phụ ấm
    // rồi xuất ra vị trí số phụ ấm đầu tiên trong chuỗi ký tự, nếu ko có phụ âm thì trả về No vowel found for string
    var str = document.getElementById('t1').value
    for (i = 0; i < str.length; i++) {
    if (str.charAt(i) == 'a' || str.charAt(i) == 'e'
        || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u')
        return ("Left most vowel of " + str + " is at location " + (i + 1));
     }
    return ("No vowels found for string " + str);
}
  // vị trí đảo ngược chạy từ đầu, khi nhập chuỗi số khác 0 vào chia lấy dư từng phần, rồi viết phần đã tách ra để lên đầu và kế tiếp
  // lặp đi lặp lại đến khi hết chuỗi và xuất ra kết quả
function reverse (num) {
    rnum = 0;
    temp = num;
    if (isNaN(num)) {
        return "invalid number";
    }
    while (num != 0) {
        rnum *= 10; // lấy số dư vd 123 lấy số 3
        rnum += num % 10; // 
        num -= num % 10;
        num = Math.floor(num / 10);
    }
    return "Reverse of num " + temp + " is " +rnum;
}