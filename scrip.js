// xu ly data tho

// $.get("3-cauhoiTracnghiemPTTKHT_1.txt", function (data) {
//   let e = data.split("\n");
//   for (let i = 0; i < e.length; i++) {
//     e[i] = e[i].replace(/(\r\n|\n|\r)/gm, "");
//     e[i].trim();
//   }
//   console.log(e);
// });

let dates = [
  "﻿Khi khảo sát, phân tích viên cần khảo sát hiện trạng về:",
  "A) tổ chức",
  "B) nghiệp vụ",
  "C) Tin học",
  "D) tất cả các nội dung trên",
  "ANSWER: D",
  "Nên sửa lỗi ở giai đoạn càng sớm thì càng tốt.",
  "A) Đúng",
  "B) Sai",
  "ANSWER: A",
  "Phần mềm đạt tính đúng đắn khi chắc chắn không còn lỗi, đúng hay sai?",
  "A) Đúng",
  "B) Sai",
  "ANSWER: B",
  "Tính đúng đắn của của phần mềm gồm:",
  "A) Đầy đủ, tiện dụng",
  "B) Chính xác",
  "C) Tối ưu bộ nhớ, thời gian",
  "D) Đầy đủ, chính xác",
  "ANSWER: D",
  "Chức năng con của chức năng Quản lý loại thực thể chính gồm:",
  "A) Thêm, xóa, sửa",
  "B) Thêm, xóa, sửa, tra cứu",
  "C) Thêm, xóa, sửa, tìm kiếm",
  "D) Thêm, xóa, sửa, tìm kiếm, tra cứu",
  "ANSWER: D",
  "Mục đích của phương pháp phân tích SA là?",
  "A) Tiến hành phân tích chức năng của hệ thống để thành lập một mô hình logic về chức năng của hệ thống mới dưới dạng một biểu đồ luồng dữ liệu",
  "B) Tiến hành kỹ thuật phân cấp chức năng từ tổng thể đến chi tiết",
  "C) Tiến hành kỹ thuật chuyển đổi từ hệ thống cũ sang hệ thống mới",
  "D) Tất cả đều đúng",
  "ANSWER: D",
  "Khi gặp quan hệ nhiều - nhiều, thường thực hiện:",
  "A) Tách thành hai quan hệ một - nhiều. ",
  "B) Gộp hai tập thực thể thành một tập thực thể.",
  "C) Xoá đi một quan hệ",
  "D) Các câu đều sai.",
  "ANSWER:  A",
  "Khi gặp quan hệ từ 3 ngôi trở lên, ta nên tách thành các quan hệ 2 ngôi. Đúng hay sai?",
  "A) Sai",
  "B) Đúng",
  "ANSWER:  B",
  "Các giai đoạn trung tâm trong quá trình phát triển 1 Hệ thống thông tin là:",
  "A) Khảo sát và phân tích",
  "B) Phân tích và thiết kế ",
  "C) Thiết kế và lập trình",
  "D) Lập trình và kiểm thử",
  "ANSWER: B",
  "“Điểm môn học phải trong khoảng từ 0 đến 10” là:",
  "A) Ràng buộc miền giá trị",
  "B) Ràng buộc liên thuộc tính",
  "C) Ràng buộc liên bộ",
  "D) Tất cả đều đúng",
  "ANSWER: A",
  "“Ngày sinh phải nhỏ hơn ngày nhập học” là:",
  "A) Ràng buộc miền giá trị",
  "B) Ràng buộc liên thuộc tính",
  "C) Ràng buộc liên bộ",
  "D) Tất cả đều đúng",
  "ANSWER: B",
  "“Mỗi dòng trong bảng hóa đơn phải có ít nhất một dòng trong bảng chi tiết hóa đơn” là:",
  "A) Ràng buộc miền giá trị",
  "B) Ràng buộc liên thuộc tính liên quan hệ",
  "C) Ràng buộc liên bộ liên quan hệ",
  "D) Tất cả đều đúng",
  "ANSWER: C",
  "Phát biểu nào sau đây là đúng khi nói về sơ đồ dòng dữ liệu (DFD):",
  "Một hệ thống thông tin được xây dựng nhằm mục đích?",
  "A) Lặp lại tất cả các quy trình của hệ thống cũ.",
  "B) Mang lại lợi ích nghiệp vụ, lợi ích kinh tế, lợi ích sử dụng đồng thời khắc phục các khuyết điểm của hệ thống cũ.",
  "C) Nâng cao ưu điểm của hệ thống.",
  "ANSWER: B",
  "Đặc điểm của biểu đồ phân cấp chức năng là?",
  "A) Cho cách nhìn tổng quát, dễ hiểu từng nhiệm vụ cần thực hiện",
  "B) Rất dễ thành lập bằng cách phân rã dần dần các chức năng từ trên xuống",
  "C) Cả 2 đáp án trên đều đúng",
  "ANSWER: C",
  "Trong phương thức xử lý thông tin, quá trình xử lý thông tin được thực hiện từng phần, xem kẽ giữa phần thực hiện bởi người và phần thực hiện bởi máy tính, hai bên trao đổi qua lại với nhau dưới hình thức đối thoại được gọi là?",
  "A) Xử lý giao dịch",
  "B) Xử lý tương tác",
  "C) Xử lý theo lô",
  "ANSWER: B",
  'Mức nhận thức nào của các loại mô hình nhằm trả lời câu hỏi "Làm gì?" mà bỏ qua câu hỏi “Làm như thế nào”?',
  "A) quan niệm",
  "B) tổ chức",
  "C) vật lý",
  "ANSWER: A",
  "Trong biểu đồ luồng dữ liệu, một chức năng được biểu diễn bởi?",
  "A) Một hình chữ nhật",
  "B) Một hình thoi",
  "C) Một hình tròn hay một hình ôvan",
  "ANSWER: A",
  "Một dòng dữ liệu vào/ra của một chức năng nào đó được gọi là?",
  "A) Một thông tin biểu diễn",
  "B) Một luồng dữ liệu",
  "C) Kho dữ liệu",
  "ANSWER: B",
  "Tác nhân ngoài là gì?",
  "A) Một thực thể ngoài hệ thống",
  "B) Thực thể có chức năng trao đổi thông tin với hệ thống",
  "C) Cả 2 đáp án trên đều đúng",
  "ANSWER:  C",
  "Để biểu diễn một kho dữ liệu trong biểu đồ Luồng dữ liệu người ta thường?",
  "A) Vẽ 2 đoạn thẳng nằm ngang, ghi tên của kho dữ liệu ở giữa",
  "B) Vẽ một hình chữ nhật trong đó ghi tên của kho",
  "C) Vẽ một hình tròn có ghi tên kho trong đó",
  "ANSWER: A",
  "Trong mô hình BFD, chức năng Quản trị hệ thống thường gồm những chức năng con nào?",
  "A) Hướng dẫn",
  "B) Sao lưu/Phục hồi",
  "C) Quản lý người dùng, Hướng dẫn, Sao lưu/Phục hồi",
  "D) Quản lý người dùng, Sao lưu/Phục hồi, Hướng dẫn, Báo cáo doanh thu",
  "ANSWER: C",
  "Trong mô hình BFD, chức năng con của chức năng Quản trị loại thực thể chính gồm:",
  "A) Thêm, xóa, sửa",
  "B) Thêm, xóa, sửa, tìm kiếm, tra cứu",
  "C) Thêm, xóa, sửa, tìm kiếm",
  "D) Thêm, xóa, sửa, tra cứu",
  "ANSWER: B",
  "Trong mô hình BFD, chức năng quản lý Tác giả là chức năng chính hay chức năng con trong hệ thống quản lý thư viện?",
  "A) Chức năng con",
  "B) Chức năng chính",
  "ANSWER: A",
  "Trong mô hình BFD, chức năng Quản lý hàng hóa thuộc loại chức năng nào trong hệ thống quản lý bán hàng?",
  "A) Quản trị danh mục",
  "B) Quản lý thực thể phụ",
  "C) Khác",
  "D) Quản lý thực thể chính",
  "ANSWER: D",
  "Mô hình phân rã chức năng cho biết:",
  "A) Hệ thống thực hiện những công việc gì.",
  "B) Mô hình dữ liệu của hệ thống.",
  "C) Quá trình xử lý của hệ thống.",
  "D) Lựa chọn khác",
  "ANSWER: A",
  "Mục đích của quá trình khảo sát hiện trạng nhằm để",
  "A) Thiết kế hệ thống",
  "B) Thương lượng với khách hàng để ký kết hợp đồng",
  "C) Tiếp cận với nghiệp vụ chuyên môn, môi trường hoạt động của hệ thống",
  "D) Tất cả đều đúng",
  "ANSWER: C",
  "Thuộc tính dùng để phân biệt thực thể là:",
  "A) Thuộc tính tên gọi ",
  "B) Thuộc tính định danh ",
  "C) Thuộc tính mô tả ",
  "D) Thuộc tính lặp",
  "ANSWER: B",
  "Các đặc trưng của quan hệ là ",
  "A) Bậc",
  "B) Bản số ",
  "C) Loại",
  "D) Cả 3 yếu tố trên",
  "ANSWER: D",
  "Mục tiêu nghiên cứu hệ thống nhằm: ",
  "A) Dể hiểu biết rõ hơn về hệ thống ",
  "B) Để tác động lên hệ thống một cách hiệu quả ",
  "C) Để hoàn thiện hệ thống hay thiết kế hệ thống mới ",
  "D) Bao gồm các mục tiêu trên",
  "ANSWER: D",
  "Hai thành phần cơ bản của hệ thống thông tin là?",
  "A) dữ liệu và xử lý",
  "B) dữ liệu và điều khiển",
  "C) điều khiển và xử lý",
  "ANSWER: A",
  "Mô hình thiết kế dữ liệu logic bao gồm những gì?",
  "A) Các  quan hệ đã được chuẩn hóa và tích hợp cùng với một sơ đồ của mô hình cho ta biểu diễn mối quan hệ của các bảng quan hệ.",
  "B) Các thực thể và  các thuộc tính cùng với các quan hệ của chúng.",
  "C) Các bản ghi  và các thuộc tính cùng với mối quan hệ giữa các bảng.",
  "D) Các bản ghi và  các kho dữ liệu.",
  "ANSWER: A",
  "Trong mô hình dữ liệu quan hệ, khái niệm ''quan hệ '' được hiểu là đối tượng nào?",
  "A) Bản ghi",
  "B) Mối liên kết giữa các bảng",
  "C) Bảng",
  "D) Thuộc tính",
  "ANSWER: C",
  "Khi chuyển mô hình thực thể sang mô hình quan hệ hành động nào trong các hành động sau là đúng?",
  "A) Thực thể  chuyển thành quan hệ.",
  "B) Thuộc tính của thực thể chuyển thành thuộc tính của quan hệ.",
  "C) Tất đều đúng.",
  "D) Thuộc tính khóa của thực thể chuyển thành thuộc tính khóa cuả quan hệ.",
  "ANSWER: C",
  "Một cuộc phỏng vấn thường không quá bao nhiêu phút?",
  "A) 25",
  "B) 35",
  "C) 45",
  "D) 55",
  "ANSWER: C",
  "Khảo sát hiện trạng về nghiệp vụ, phân tích viên phải xác định tối thiểu các chức năng:",
  "A) Lưu trữ, tra cứu, tính toán, báo biểu",
  "B) Tổ chức, khảo sát, tính toán, tra cứu",
  "C) Tiện dụng, chính xác, lưu trữ, tra cứu",
  "D) Lưu trữ, tra cứu, thống kê, khảo sát",
  "ANSWER: A",
  "Máy bán hàng tự động có phải là một hệ thống không?",
  "A) Phải",
  "B) Không phải",
  "ANSWER: A",
  "Giải pháp tốt nhất để chuyển từ thiết kế dữ liệu mức quan niệm sang mức vật lý là gì?",
  "A) Sử dụng hệ quản trị CSDL.",
  "B) Sử dụng công cụ hỗ trợ thiết kế dữ liệu.",
  "C) Sử dụng ngôn ngữ lập trình nào đó.",
  "ANSWER: B",
  "Khi thiết kế hệ thống, người thiết kế đã đặt lệnh lưu tài liệu vào trong hệ thống bằng cách dùng một lúc tổ hợp 3 phím C ,H, P. Người thiết kế này đã mắc sai lầm nào?",
  "A) Các phím rất khó nhớ và không liên quan đến đối tượng gợi nhớ nào.",
  "B) Các phím cách nhau quá xa gây ra hiện tượng khó bấm 3 phím đồng thời.",
  "C) Tất cả các ý đã nêu.",
  "D) Làm chậm các thao tác trong quá trình sử dụng phần mềm vì vậy hiệu quả lao động thấp.",
  "ANSWER: C",
  "Phân rã hệ thống giúp cho người phân tích viên: ",
  "A) Hiểu được cấu trúc phân cấp của hệ thống ",
  "B) Chỉ ra những khuyết điểm của hệ thống ",
  "C) Chỉ ra phạm vi giải quyết vấn đề ",
  "D) Chỉ B và C đúng ",
  "ANSWER: A ",
  "Lược đồ nào sau đây không được tạo ra từ việc phân rã hệ thống: ",
  "A) ERD và DFD ",
  "B) DFD ",
  "C) ERD ",
  "D) BFD ",
  "ANSWER: A ",
  "Các công cụ chủ yếu diễn tả dữ liệu bao gồm:",
  "A) Mã hoá dữ liệu",
  "B) Từ điển dữ liệu",
  "C) Mô hình thực thể liên kết, mô hình quan hệ",
  "D) Tất cả các công cụ trên",
  "ANSWER: D ",
  "Nhiệm vụ của giai đoạn phân tích là phải trả lời những câu hỏi:",
  "A) Đầu vào (input) của hệ thống là gì, Đầu ra (output): kết quả xử lý của hệ thống là gì?",
  "B) Những quá trình cần xử lý trong hệ thống, hay hệ thống phần mềm sẽ xử lý những cái gì?",
  "C) Những ràng buộc trong hệ thống, chủ yếu là mối quan hệ giữa đầu vào và đầu ra như thế nào?",
  "D) Trả lời tất cả những câu hỏi trên",
  "ANSWER: D",
  "Tên của một chức năng trong mô hình DFD là:",
  "A) Danh từ + bổ ngữ",
  "B) Tính từ + bổ ngữ",
  "C) Trạng từ + bổ ngữ",
  "ANSWER: A",
  "Phân tích viên có nên sử dụng thuật ngữ chuyên ngành trong khi phỏng vấn với khách hàng hay không?",
  "A) Nên",
  "B) Không",
  "C) Tùy người",
  "ANSWER: B",
  "Có bạn phát biểu: Tra cứu là tìm kiếm. Đúng hay sai ?",
  "A) Đúng",
  "B) Sai",
  "ANSWER: B",
  "Muốn thể hiện quá trình hoạt động của một quyển sách (thể hiện chi tiết những lần mượn: ai mượn, ngày mượn, ngày trả…) thì dùng chức năng nào?",
  "A) Tra cứu ",
  "B) Tìm kiếm",
  "ANSWER: A",
  "Tên của chức năng trong mô hình phân cấp chức năng sử dụng từ loại gì? ",
  "A) Động từ.",
  "B) Tính từ.",
  "C) Danh từ",
  "ANSWER: A",
  "Trong phương pháp chuyển đổi trực tiếp, hệ thống mới",
  "A) Là được phân các giai đoạn",
  "B) Thay thế hệ thống cũ tại thời điểm chuyển đổi",
  "C) Và hệ thống cũ cùng tồn tại với nhau",
  "D) Được thử nghiệm bởi một công ty bên ngoài",
  "ANSWER: B",
  "Mô hình chức năng của hệ thống (BFD) cho biết ?",
  "A) Hệ thống thực hiện những công việc gì",
  "B) Mô hình dữ liệu của hệ thống",
  "C) Quá trình xử lý của hệ thống",
  "D) Lựa chọn khác",
  "ANSWER: A",
  "Trong mô hình DFD, có thể có dòng dữ liệu đi từ đầu cuối đến đầu cuối. Đúng hay sai?",
  "A) Đúng",
  "B) Sai",
  "ANSWER: B",
  "Trong mô hình DFD, có thể có dòng dữ liệu đi từ đầu cuối đến kho dữ liệu. Đúng hay sai?",
  "A) Đúng",
  "B) Sai",
  "ANSWER: B",
  "Trong mô hình DFD, có thể có dòng dữ liệu đi từ ô xử lý đến ô xử lý. Đúng hay sai?",
  "A) Đúng",
  "B) Sai",
  "ANSWER: A",
  "Mô hình nào sau đây thể hiện được ý đồ “Mỗi sinh viên có thể đăng ký một hoặc nhiều môn học”.",
  "A) DFD",
  "B) BFD",
  "C) ERD",
  "ANSWER: C",
  "Khái niệm nào sau đây biểu diễn được ý nghĩa “Mỗi sinh viên có thể đăng ký một hoặc nhiều môn học”.",
  "A) Thực thể",
  "B) Mối kết hợp",
  "C) Bản số của mối kết hợp",
  "D) Số ngôi của mối kết hợp",
  "ANSWER: C",
  "Để thể hiện ý nghĩa “Mỗi khi giao hàng thì phải có đầy đủ các thông tin của người giao, người nhận và gói hàng nào”, sử dụng khái niệm nào sau đây:",
  "A) Thực thể",
  "B) Mối kết hợp",
  "C) Bản số của mối kết hợp",
  "D) Số ngôi của mối kết hợp",
  "ANSWER: C",
  "Để biểu diễn được ý nghĩa “Mỗi sinh viên có thể đăng ký một hoặc nhiều môn học và một môn học có thể được đăng ký bởi nhiều sinh viên”, sử dụng mối kết hợp nào sau đây:",
  "A) 1 - 1",
  "B) 1 - n",
  "C) n - n",
  "D) 1 - 5",
  "ANSWER: C",
  "Để biểu diễn được ý nghĩa “Mỗi sinh viên có một thẻ thư viện duy nhất”, sử dụng mối kết hợp nào sau đây:",
  "A) 1 - 1",
  "B) 1 - n",
  "C) n - n",
  "D) 1 - 5",
  "ANSWER: A",
  "Mỗi thực thể chỉ tồn tại tối đa 1 mối kết hợp, đúng hay sai:",
  "A) Đúng",
  "B) Sai",
  "ANSWER: B",
  "Có ý kiến cho rằng “Mô hình thực thể kết hợp và mô hình quan hệ là một”, đúng hay sai:",
  "A) Đúng",
  "B) Sai",
  "ANSWER: B",
  "Có thể tồn tại một mối kết hợp giữa thực thể và một mối kết hợp, đúng hay sai:",
  "A) Đúng",
  "B) Sai",
  "ANSWER: B",
  "Một thực thể có thể tham gia vào nhiều mối kết hợp, đúng hay sai:",
  "A) Đúng",
  "B) Sai",
  "ANSWER: A",
  "Có thể tồn tại một mối kết hợp chỉ có một thể hiện hay không?",
  "A) Có ",
  "B) Không",
  "ANSWER: B",
  "Có thể tồn tại một mối kết hợp chỉ có một thể hiện hay không?",
  "A) Có ",
  "B) Không",
  "ANSWER: B",
  "Tập thực thể là thực thể, đúng hay sai?",
  "A) Sai",
  "B) Đúng",
  "ANSWER: A",
  "Một sự kiện hay khái niệm không phải là một đối tượng tồn tại ở dạng vật lý nên nó không là thực thể, đúng hay sai?",
  "A) Sai",
  "B) Đúng",
  "ANSWER: A",
  "Thực thể được đặt tên là:",
  "A) Tính từ",
  "B) Danh từ",
  "C) Động từ",
  "ANSWER: B",
  "Có thể có mối kết hợp giữa một thực thể với chính nó hay không?",
  "A) Có",
  "B) Không",
  "ANSWER: A",
  "Trong mô hình thực thể kết hợp, có thể tồn tại các loại mối kết hợp nào sau đây:",
  "A) Đa phân",
  "B) Nhị phân",
  "C) Phản thân",
  "D) Tất cả đều đúng",
  "ANSWER: D",
  "Trong mô hình thực thể kết hợp có thể có các thuộc tính được tính toán từ các thuộc tính khác.",
  "A) Đúng ",
  "B) Sai",
  "ANSWER: B",
  "Trong mô hình thực thể kết hợp có thể có các thuộc tính đa trị.",
  "A) Đúng ",
  "B) Sai",
  "ANSWER: B",
];
// tao class

function Questions(quest, a, b, c, d, answer) {
  this.quest = quest;
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
  this.answer = answer;
}

// tao du lieu
const ListQuestion = [];
for (let i = 0; i < dates.length; ) {
  const quest = new Questions("", "", "", "", "", "");
  quest.quest = dates[i];
  i++;
  quest.a = dates[i];
  i++;
  quest.b = dates[i];
  i++;
  if (dates[i].slice(0, 2) == "C)") {
    quest.c = dates[i];
    i++;
  }
  if (dates[i].slice(0, 2) == "D)") {
    quest.d = dates[i];
    i++;
  }
  quest.answer = dates[i];
  i++;
  ListQuestion.push(quest);
}

// bam nut bat dau
$("#starts").click(function (e) {
  const nb = $("#nb").val(); // get val
  const max = $("input").val();
  if (Number(max) > 71) {
    alert("Số không được lớn hơn 105");
    location.reload();
  }

  const ListDatas = [...ListQuestion]; // nhan ban bien

  ListDatas.sort((a, b) => 0.5 - Math.random()); // ngau nhien cau hoi

  const questlist = []; // tao mang de luu

  // sử lý css
  $(".form").css("visibility", "visible"); // hiện khung câu hỏi
  $("#starts").hide();
  $(".reset").show();
  $("#nb").css("user-select", "none").css("pointer-events", "none");

  // reset trang
  $(".reset").click(() => {
    location.reload();
  });
  // tao ds cau hoi bat dau (ben phai do)
  for (let i = 0; i < nb; i++) {
    questlist.push(ListDatas[i]);
    let stt = i + 1;
    $("#end").append('<div class="idquest" id="idquest">' + stt + "</div>");
  }

  let z = 0;
  $(".result").css("background-color", "white");
  $("#question").html("Bấm số bên phải để hiện câu hỏi");

  $(".idquest").click(function () {
    z = Number(this.innerHTML) - 1;
    // doi mau
    this.style.backgroundColor = "yellow";
    //tao cau hoi (ben trai)
    $(".result").css("background-color", "white");
    $("#question").html(questlist[z].quest);
    $("#a").html(questlist[z].a);
    $("#b").html(questlist[z].b);
    $("#c").html(questlist[z].c);
    $("#d").html(questlist[z].d);
    // su ly bam dap an dung

    $(".❔").click(function (e) {
      if (questlist[z].answer.slice(-1) == this.innerHTML.slice(0, 1)) {
        $(".result").css("background-color", "green");
        const audio = new Audio("Correct Answer - Sound Effect.mp3");
        audio.play();
      } else {
        $(".result").css("background-color", "red");
        const audio = new Audio("Wrong-answer-sound-effect.mp3");
        audio.volume = 0.13;
        audio.play();
      }
    });
  });
});

// k cho bam ky ta dac biet
$("input").on("keypress", function (event) {
  var regex = new RegExp("^[a-zA-Z0-9]+$");
  var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
});
