// Function to format the current date
function getCurrentDate() {
  var today = new Date();
  var weekday = today.toLocaleDateString("vi-VN", { weekday: "long" });
  var day = today.getDate();
  var month = today.toLocaleDateString("vi-VN", { month: "long" });
  var year = today.getFullYear();

  return weekday + ", " + day + " " + month + " " + year;
}

// Update date on page load
window.onload = function () {
  var currentDate = getCurrentDate();
  document.getElementById("dateNow").textContent = currentDate;
};

document.addEventListener("DOMContentLoaded", function () {
  var countdownElement = document.getElementById("countdown");
  var progressBar = document.querySelector(".progress-bar");

  // Lấy thời gian hiện tại
  var currentTime = new Date();

  // Thiết lập thời gian bắt đầu đếm ngược đến giờ mới
  var targetTime = new Date(currentTime);
  targetTime.setHours(currentTime.getHours() + 1, 0, 0, 0); // Thiết lập giờ mới là giờ tiếp theo, phút và giây là 0

  function updateCountdown() {
    var now = new Date();
    var timeRemaining = targetTime - now;

    if (timeRemaining <= 0) {
      progressBar.style.width = "100%";
    } else {
      // Tính toán số giờ, phút, giây còn lại
      var hours = Math.floor(timeRemaining / (1000 * 60 * 60));
      var minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      // Hiển thị đồng hồ đếm ngược
      // countdownElement.textContent = `Thời gian: ${hours} giờ ${minutes} phút ${seconds} giây` +`<i class="fa-solid fa-bolt"></i>`;
      countdownElement.innerHTML = `<i class="fas fa-bolt"></i> Thời gian: ${hours} giờ ${minutes} phút ${seconds} giây `;

      // Tính toán % tiến độ
      var progress = (timeRemaining / (60 * 60 * 1000)) * 100; // Tính theo giờ
      progressBar.style.width = `${100 - progress}%`;
    }
  }

  // Gọi hàm updateCountdown ban đầu
  updateCountdown();

  // Cập nhật đồng hồ đếm ngược mỗi giây
  setInterval(updateCountdown, 1000);
});

var itemsPerPage = 9;
var productList = [
  // Quần bé trai
  {
    name: "Quần kaki dài bé trai",
    image: "../images/QuanBTrai/qd1.webp",
    category: "Quần bé trai",
    description:
      "Quần kaki là sự kết hợp hoàn hảo giữa phong cách năng động và tiện dụng.",
    price: 339000,
    discountPercent: 20,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 95% cotton 5% spandex",
      "- Size: Phù hợp với bé trai cân nặng từ 12 - 37kg, từ 3 - 13 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
      "- Size M: 10 - 11 tuổi",
    ],
  },
  {
    name: "Quần thun dài bé trai",
    image: "../images/QuanBTrai/qd2.webp",
    category: "Quần bé trai",
    description: "Quần dài in họa tiết chú khủng long dễ thương.",
    price: 520000,
    discountPercent: 15,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé trai cân nặng từ 12 - 37kg, từ 3 - 13 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
      "- Size M: 10 - 11 tuổi",
    ],
  },
  {
    name: "Quần nỉ dài bé trai",
    image: "../images/QuanBTrai/qd3.webp",
    category: "Quần bé trai",
    description: "Quần nỉ dài mặc thu đông cho bé trai, in họa tiết ngôi sao.",
    price: 490000,
    discountPercent: 25,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé trai cân nặng từ 12 - 37kg, từ 3 - 13 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
      "- Size M: 10 - 11 tuổi",
    ],
  },
  {
    name: "Quần jean dài bé trai",
    image: "../images/QuanBTrai/qd4.webp",
    category: "Quần bé trai",
    description: "Quần jean dài cho bé trai, chất liệu mềm mại và thoải mái.",
    price: 480000,
    discountPercent: 30,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé trai cân nặng từ 12 - 37kg, từ 3 - 13 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
      "- Size M: 10 - 11 tuổi",
    ],
  },
  {
    name: "Quần dài kaki jogger bé trai",
    image: "../images/QuanBTrai/qd5.webp",
    category: "Quần bé trai",
    description:
      "Quần dài kaki jogger cho bé trai, thiết kế năng động và thoải mái.",
    price: 510000,
    discountPercent: 20,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé trai cân nặng từ 12 - 37kg, từ 3 - 13 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
      "- Size M: 10 - 11 tuổi",
    ],
  },
  {
    name: "Quần kaki dài Marvel Avengers ",
    image: "../images/QuanBTrai/qd6.webp",
    category: "Quần bé trai",
    description:
      "Quần kaki dài cho bé trai, in hình siêu anh hùng Marvel Avengers.",
    price: 530000,
    discountPercent: 10,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé trai cân nặng từ 12 - 37kg, từ 3 - 13 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
      "- Size M: 10 - 11 tuổi",
    ],
  },
  {
    name: "Quần dài kaki bé trai sọc quân đội",
    image: "../images/QuanBTrai/qd7.webp",
    category: "Quần bé trai",
    description: "Quần dài kaki bé trai, thiết kế sọc quân đội cá tính.",
    price: 490000,
    discountPercent: 15,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé trai cân nặng từ 12 - 37kg, từ 3 - 13 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
      "- Size M: 10 - 11 tuổi",
    ],
  },
  {
    name: "Quần jean đen dài bé trai",
    image: "../images/QuanBTrai/qd8.webp",
    category: "Quần bé trai",
    description:
      "Quần jean dài bé trai, chất liệu mềm mại và thoải mái cho bé.",
    price: 540000,
    discountPercent: 20,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé trai cân nặng từ 12 - 37kg, từ 3 - 13 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
      "- Size M: 10 - 11 tuổi",
    ],
  },
  {
    name: "Quần kaki thời trang bé trai",
    image: "../images/QuanBTrai/qd9.webp",
    category: "Quần bé trai",
    description:
      "Quần kaki thời trang bé trai, thiết kế trẻ trung và năng động.",
    discountPercent: 25,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé trai cân nặng từ 12 - 37kg, từ 3 - 13 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
      "- Size M: 10 - 11 tuổi",
    ],
  },

  // Phụ kiện
  {
    name: "Giày thể thao",
    image: "../images/pkien/pk1.webp",
    category: "Phụ kiện",
    description: "Giày thể thao thời trang, chất liệu thoáng khí và nhẹ nhàng.",
    price: 800000,
    discountPercent: 30,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: Da Pu cao cấp",
      "- Size: Phù hợp với bé chân từ 16cm",
      "- Size 25: 16cm",
      "- Size 26: 17cm",
      "- Size 27: 18cm",
    ],
  },
  {
    name: "Giày quay hậu thể thao bé trai",
    image: "../images/pkien/pk2.webp",
    category: "Phụ kiện",
    description: "Giày thể thao có bánh xe, thiết kế độc đáo và tiện lợi.",
    price: 820000,
    discountPercent: 25,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: Vải Canvas cao cấp",
      "- Size: Phù hợp với bé chân từ 16cm",
      "- Size 25: 16cm",
      "- Size 26: 17cm",
      "- Size 27: 18cm",
    ],
  },
  {
    name: "Guốc công chúa xinh xắn bé gáigái",
    image: "../images/pkien/pk3.webp",
    category: "Phụ kiện",
    description: "Guốc công chúa xinh xắn, thiết kế dễ thương và thoải mái.",
    price: 780000,
    discountPercent: 20,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: Nhựa PVC cao cấp",
      "- Size: Phù hợp với bé chân từ 16cm",
      "- Size 25: 16cm",
      "- Size 26: 177cm",
      "- Size 27: 18cm",
    ],
  },
  {
    name: "Giày quay hậu thể thao độn đế bé trai",
    image: "../images/pkien/pk4.webp",
    category: "Phụ kiện",
    description:
      "Giày thể thao độn đế, thiết kế thời trang và năng động cho bé.",
    price: 850000,
    discountPercent: 15,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: nhựa tổng hợp cao cấp",
      "- Size: Phù hợp với bé chân từ 16cm",
      "- Size 25: 16cm",
      "- Size 26: 177cm",
      "- Size 27: 18cm",
    ],
  },
  {
    name: "Giày hình gấu dễ thương",
    image: "../images/pkien/pk5.webp",
    category: "Phụ kiện",
    description: "Giày hình gấu dễ thương, thiết kế độc đáo và phong cách.",
    price: 790000,
    discountPercent: 30,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: Vải Canvas cao cấp",
      "- Size: Phù hợp với bé chân từ 16cm",
      "- Size 25: 16cm",
      "- Size 26: 17cm",
      "- Size 27: 18cm",
    ],
  },
  {
    name: "Giày búp bê cho bé gái",
    image: "../images/pkien/pk6.webp",
    category: "Phụ kiện",
    description: "Giày búp bê cho bé gái, thiết kế dễ thương và thoải mái.",
    price: 830000,
    discountPercent: 25,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: nhựa PVC cao cấp",
      "- Size: Phù hợp với bé chân từ 16cm",
      "- Size 25: 16cm",
      "- Size 26: 177cm",
      "- Size 27: 18cm",
    ],
  },
  {
    name: "Giày họa tiết hoạt hình đáng yêu cho bé gái",
    image: "../images/pkien/pk7.webp",
    category: "Phụ kiện",
    description:
      "Giày họa tiết hoạt hình đáng yêu, thiết kế thời trang và phong cách.",
    price: 820000,
    discountPercent: 20,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: Vải Canvas cao cấp",
      "- Size: Phù hợp với bé chân từ 16cm",
      "- Size 25: 16cm",
      "- Size 26: 177cm",
      "- Size 27: 18cm",
    ],
  },
  {
    name: "Giày búp bê cho họa tiết đáng yêu cho bbé gái",
    image: "../images/pkien/pk8.webp",
    category: "Phụ kiện",
    description:
      "Giày búp bê cho bé gái, họa tiết đáng yêu và thiết kế thời trang.",
    price: 860000,
    discountPercent: 10,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: nhựa PVC cao cấp",
      "- Size: Phù hợp với bé chân từ 16cm",
      "- Size 25: 16cm",
      "- Size 26: 177cm",
      "- Size 27: 18cm",
    ],
  },
  {
    name: "Giày quay hậu họa tiết đáng yêu cho bé gái",
    image: "../images/pkien/pk9.webp",
    category: "Phụ kiện",
    description:
      "Giày quay hậu họa tiết đáng yêu, thiết kế thời trang và phong cách.",
    price: 800000,
    discountPercent: 15,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: da PU cao cấp",
      "- Size: Phù hợp với bé chân từ 16cm",
      "- Size 25: 16cm",
      "- Size 26: 177cm",
      "- Size 27: 18cm",
    ],
  },

  //Áo thun bé trai
  {
    name: "Áo thun bé trai - Mẫu 1",
    image: "../images/athunbetrai/att1.webp",
    category: "Áo thun bé trai",
    description: "Áo thun bé trai, thiết kế năng động và thoải mái.",
    price: 400000,
    discountPercent: 15,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- chất liệu: 100% cotton",
      "- Size: Phù hợp với bé trai cân nặng từ 12 - 37kg, từ 3 - 155 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
  {
    name: "Áo thun bé trai - Mẫu 2",
    image: "../images/athunbetrai/att2.webp",
    category: "Áo thun bé trai",
    description: "Áo thun bé trai, thiết kế họa tiết hoạt hình dễ thương.",
    price: 420000,
    discountPercent: 10,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé trai cân nặng từ 12 - 37kg, từ 3 - 155 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
  {
    name: "Áo thun bé trai - Mẫu 3",
    image: "../images/athunbetrai/att3.webp",
    category: "Áo thun bé trai",
    description: "Áo thun bé trai, thiết kế họa tiết ngôi sao thời trang.",
    price: 430000,
    discountPercent: 20,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé trai cân nặng từ 12 - 37kg, từ 3 - 155 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
  {
    name: "Áo thun bé trai - Mẫu 4",
    image: "../images/athunbetrai/att4.webp",
    category: "Áo thun bé trai",
    description: "Áo thun bé trai, thiết kế họa tiết hoạt hình dễ thương.",
    price: 410000,
    discountPercent: 15,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé trai cân nặng từ 12 - 37kg, từ 3 - 155 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
  {
    name: "Áo thun bé trai - Mẫu 5",
    image: "../images/athunbetrai/att5.webp",
    category: "Áo thun bé trai",
    description: "Áo thun bé trai, thiết kế họa tiết ngôi sao thời trang.",
    price: 390000,
    discountPercent: 25,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé trai cân nặng từ 12 - 37kg, từ 3 - 155 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
  {
    name: "Áo thun bé trai - Mẫu 6",
    image: "../images/athunbetrai/att6.webp",
    category: "Áo thun bé trai",
    description: "Áo thun bé trai, thiết kế họa tiết hoạt hình dễ thương.",
    price: 420000,
    discountPercent: 30,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé trai cân nặng từ 12 - 37kg, từ 3 - 155 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
  {
    name: "Áo thun bé trai - Mẫu 7",
    image: "../images/athunbetrai/att7.webp",
    category: "Áo thun bé trai",
    description: "Áo thun bé trai, thiết kế họa tiết ngôi sao thời trang.",
    price: 400000,
    discountPercent: 15,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé trai cân nặng từ 12 - 37kg, từ 3 - 155 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
  {
    name: "Áo thun bé trai - Mẫu 8",
    image: "../images/athunbetrai/att8.webp",
    category: "Áo thun bé trai",
    description: "Áo thun bé trai, thiết kế họa tiết hoạt hình dễ thương.",
    price: 410000,
    discountPercent: 55,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé trai cân nặng từ 12 - 37kg, từ 3 - 155 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },

  //Quần bé gái
  {
    name: "Quần thun dài xinh xắn bé gái",
    image: "../images/QuanBGai/q1.webp",
    category: "Quần bé gái",
    description:
      "Quần thun dài xinh xắn, thiết kế họa tiết đáng yêu cho bé gái.",
    price: 600000,
    discountPercent: 25,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé gái cân nặng từ 12 - 37kg, từ 3 - 15 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
  {
    name: "Quần kaki ngắn bé gái",
    image: "../images/QuanBGai/q2.webp",
    category: "Quần bé gái",
    description: "Quần kaki ngắn bé gái, thiết kế thời trang và thoải mái.",
    price: 620000,
    discountPercent: 35,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé gái cân nặng từ 12 - 37kg, từ 3 - 15 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
  {
    name: "Quần jean dài bé gái",
    image: "../images/QuanBGai/q3.webp",
    category: "Quần bé gái",
    description: "Quần jean dài bé gái, thiết kế thời trang và thoải mái.",
    price: 590000,
    discountPercent: 20,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé gái cân nặng từ 12 - 37kg, từ 3 - 15 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
  {
    name: "Quần kaki ngắn họa tiết xinh xắn bé gái",
    image: "../images/QuanBGai/q4.webp",
    category: "Quần bé gái",
    description:
      "Quần kaki ngắn họa tiết xinh xắn, thiết kế thời trang và thoải mái.",
    price: 580000,
    discountPercent: 40,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé gái cân nặng từ 12 - 37kg, từ 3 - 15 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
  {
    name: "Quần thun dài họa tiết đáng yêu bé Trần Long Thuận",
    image: "../images/QuanBGai/q5.webp",
    category: "Quần bé gái",
    description:
      "Quần thun dài họa tiết đáng yêu, thiết kế thời trang và thoải mái.",
    price: 999999999999,
    discountPercent: 25,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé gái cân nặng từ 12 - 37kg, từ 3 - 15 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },

  //Đồ bộ bé gái
  {
    name: "Đồ bộ bé gái - Mẫu 1",
    image: "../images/dbbegai/dbg1.webp",
    category: "Đồ bộ bé gái",
    description: "Đồ bộ bé gái, thiết kế đáng yêu và thoải mái.",
    price: 300000,
    discountPercent: 10,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé gái cân nặng từ 12 - 37kg, từ 3 - 15 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
  {
    name: "Đồ bộ bé gái - Mẫu 2",
    image: "../images/dbbegai/dbg2.webp",
    category: "Đồ bộ bé gái",
    description: "Đồ bộ bé gái, thiết kế họa tiết hoạt hình dễ thương.",
    price: 320000,
    discountPercent: 15,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé gái cân nặng từ 12 - 37kg, từ 3 - 15 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
  {
    name: "Đồ bộ bé gái - Mẫu 3",
    image: "../images/dbbegai/dbg3.webp",
    category: "Đồ bộ bé gái",
    description: "Đồ bộ bé gái, thiết kế họa tiết ngôi sao thời trang.",
    price: 310000,
    discountPercent: 20,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé gái cân nặng từ 12 - 37kg, từ 3 - 15 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
  {
    name: "Đồ bộ bé gái - Mẫu 4",
    image: "../images/dbbegai/dbg4.webp",
    category: "Đồ bộ bé gái",
    description: "Đồ bộ bé gái, thiết kế họa tiết hoạt hình dễ thương.",
    price: 300000,
    discountPercent: 25,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé gái cân nặng từ 12 - 37kg, từ 3 - 15 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
  {
    name: "Đồ bộ bé gái - Mẫu 5",
    image: "../images/dbbegai/dbg5.webp",
    category: "Đồ bộ bé gái",
    description: "Đồ bộ bé gái, thiết kế họa tiết ngôi sao thời trang.",
    price: 330000,
    discountPercent: 10,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé gái cân nặng từ 12 - 37kg, từ 3 - 15 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
  {
    name: "Đồ bộ bé gái - Mẫu 6",
    image: "../images/dbbegai/dbg6.webp",
    category: "Đồ bộ bé gái",
    description:
      "Đồ bộ bé gái, thiết kế họa tiết hoạt hình dễ thương và thoải mái.",
    price: 315000,
    discountPercent: 20,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé gái cân nặng từ 12 - 37kg, từ 3 - 15 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
  {
    name: "Đồ bộ bé gái - Mẫu 7",
    image: "../images/dbbegai/dbg7.webp",
    category: "Đồ bộ bé gái",
    description: "Đồ bộ bé gái, thiết kế họa tiết ngôi sao thời trang.",
    price: 325000,
    discountPercent: 15,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé gái cân nặng từ 12 - 37kg, từ 3 - 15 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
  {
    name: "Đồ bộ bé gái - Mẫu 8",
    image: "../images/dbbegai/dbg8.webp",
    category: "Đồ bộ bé gái",
    description: "Đồ bộ bé gái, thiết kế họa tiết hoạt hình dễ thương.",
    price: 310000,
    discountPercent: 30,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé gái cân nặng từ 12 - 37kg, từ 3 - 15 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
  {
    name: "Đồ bộ bé gái - Mẫu 9",
    image: "../images/dbbegai/dbg9.webp",
    category: "Đồ bộ bé gái",
    description: "Đồ bộ bé gái, thiết kế họa tiết ngôi sao thời trang.",
    price: 300000,
    discountPercent: 20,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé gái cân nặng từ 12 - 37kg, từ 3 - 15 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },

  // Đồ bộ bé trai
  {
    name: "Đồ bộ bé trai - Mẫu 1",
    image: "../images/dbbetrai/dbt1.webp",
    category: "Đồ bộ bé trai",
    description:
      "Đồ bộ bé trai, thiết kế họa tiết ngôi sao thời trang và thoải mái.",
    price: 250000,
    discountPercent: 0,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé gái cân nặng từ 12 - 37kg, từ 3 - 15 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
  {
    name: "Đồ bộ bé trai - Mẫu 2",
    image: "../images/dbbetrai/dbt2.webp",
    category: "Đồ bộ bé trai",
    description:
      "Đồ bộ bé trai, thiết kế họa tiết hoạt hình dễ thương và thoải mái.",
    price: 260000,
    discountPercent: 10,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé gái cân nặng từ 12 - 37kg, từ 3 - 15 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
  {
    name: "Đồ bộ bé trai - Mẫu 3",
    image: "../images/dbbetrai/dbt3.webp",
    category: "Đồ bộ bé trai",
    description:
      "Đồ bộ bé trai, thiết kế họa tiết ngôi sao thời trang và thoải mái.",
    price: 255000,
    discountPercent: 5,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé gái cân nặng từ 12 - 37kg, từ 3 - 15 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
  {
    name: "Đồ bộ bé trai - Mẫu 4",
    image: "../images/dbbetrai/dbt4.webp",
    category: "Đồ bộ bé trai",
    description:
      "Đồ bộ bé trai, thiết kế họa tiết hoạt hình dễ thương và thoải mái.",
    price: 270000,
    discountPercent: 15,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé gái cân nặng từ 12 - 37kg, từ 3 - 15 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
  {
    name: "Đồ bộ bé trai - Mẫu 5",
    image: "../images/dbbetrai/dbt5.webp",
    category: "Đồ bộ bé trai",
    description:
      "Đồ bộ bé trai, thiết kế họa tiết ngôi sao thời trang và thoải mái.",
    price: 245000,
    discountPercent: 0,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé gái cân nặng từ 12 - 37kg, từ 3 - 15 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
  {
    name: "Đồ bộ bé trai - Mẫu 6",
    image: "../images/dbbetrai/dbt6.webp",
    category: "Đồ bộ bé trai",
    description:
      "Đồ bộ bé trai, thiết kế họa tiết hoạt hình dễ thương và thoải mái.",
    price: 260000,
    discountPercent: 10,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé gái cân nặng từ 12 - 37kg, từ 3 - 15 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
  {
    name: "Đồ bộ bé trai - Mẫu 7",
    image: "../images/dbbetrai/dbt7.webp",
    category: "Đồ bộ bé trai",
    description:
      "Đồ bộ bé trai, thiết kế họa tiết ngôi sao thời trang và thoải mái.",
    price: 250000,
    discountPercent: 0,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé gái cân nặng từ 12 - 37kg, từ 3 - 15 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
  {
    name: "Đồ bộ bé trai - Mẫu 8",
    image: "../images/dbbetrai/dbt8.webp",
    category: "Đồ bộ bé trai",
    description:
      "Đồ bộ bé trai, thiết kế họa tiết hoạt hình dễ thương và thoải mái.",
    price: 265000,
    discountPercent: 5,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé gái cân nặng từ 12 - 37kg, từ 3 - 15 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
  {
    name: "Đồ bộ bé trai - Mẫu 9",
    image: "../images/dbbetrai/dbt9.webp",
    category: "Đồ bộ bé trai",
    description:
      "Đồ bộ bé trai, thiết kế họa tiết ngôi sao thời trang và thoải mái.",
    price: 255000,
    discountPercent: 10,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé gái cân nặng từ 12 - 37kg, từ 3 - 15 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },

  //Áo thun bé gái
  {
    name: "Áo thun bé gái - Mẫu 1",
    image: "../images/athunbegai/atg1.webp",
    category: "Áo thun bé gái",
    description:
      "Áo thun bé gái, thiết kế họa tiết ngôi sao thời trang và thoải mái.",
    price: 100000,
    discountPercent: 10,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé gái cân nặng từ 12 - 37kg, từ 3 - 15 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
  {
    name: "Áo thun bé gái - Mẫu 2",
    image: "../images/athunbegai/atg2.webp",
    category: "Áo thun bé gái",
    description: "Áo thun bé gái, thiết kế họa tiết hoạt hình dễ thương.",
    price: 120000,
    discountPercent: 15,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé gái cân nặng từ 12 - 37kg, từ 3 - 15 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
  {
    name: "Áo thun bé gái - Mẫu 3",
    image: "../images/athunbegai/atg3.webp",
    category: "Áo thun bé gái",
    description: "Áo thun bé gái, thiết kế họa tiết ngôi sao thời trang.",
    price: 90000,
    discountPercent: 5,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé gái cân nặng từ 12 - 37kg, từ 3 - 15 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
  {
    name: "Áo thun bé gái - Mẫu 4",
    image: "../images/athunbegai/atg4.webp",
    category: "Áo thun bé gái",
    description: "Áo thun bé gái, thiết kế họa tiết hoạt hình dễ thương.",
    price: 95000,
    discountPercent: 0,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé gái cân nặng từ 12 - 37kg, từ 3 - 15 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
  {
    name: "Áo thun bé gái - Mẫu 5",
    image: "../images/athunbegai/atg5.webp",
    category: "Áo thun bé gái",
    description: "Áo thun bé gái, thiết kế họa tiết ngôi sao thời trang.",
    price: 110000,
    discountPercent: 20,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé gái cân nặng từ 12 - 37kg, từ 3 - 15 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
  {
    name: "Áo thun bé gái - Mẫu 6",
    image: "../images/athunbegai/atg6.webp",
    category: "Áo thun bé gái",
    description:
      "Áo thun bé gái, thiết kế họa tiết hoạt hình dễ thương và thoải mái.",
    price: 105000,
    discountPercent: 10,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé gái cân nặng từ 12 - 37kg, từ 3 - 15 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
  {
    name: "Áo thun bé gái - Mẫu 7",
    image: "../images/athunbegai/atg7.webp",
    category: "Áo thun bé gái",
    description: "Áo thun bé gái, thiết kế họa tiết ngôi sao thời trang.",
    price: 115000,
    discountPercent: 25,
    get discountPrice() {
      return this.price * (1 - this.discountPercent / 100);
    },
    details: [
      "- Chất liệu: 100% cotton",
      "- Size: Phù hợp với bé gái cân nặng từ 12 - 37kg, từ 3 - 15 tuổi",
      "- Size XL: 14 - 15 tuổi",
      "- Size L: 12 - 13 tuổi",
    ],
  },
];

//Hiển thị sản phẩmphẩm
function displayProducts(productList, categoryName) {
  var itemsPerPage = 12;
  var currentPage = 1;

  // Lọc danh sách sản phẩm theo danh mục nếu categoryName không phải là 'all'
  var filteredProducts =
    categoryName === "all"
      ? productList
      : productList.filter(function (product) {
          return product.category === categoryName;
        });

  // Function to render products based on pagination
  function renderProducts(page) {
    $("#productList").empty();

    var startIndex = (page - 1) * itemsPerPage;
    var endIndex = Math.min(startIndex + itemsPerPage, filteredProducts.length);
    var productListHtml = "";

    for (var i = startIndex; i < endIndex; i++) {
      var product = filteredProducts[i];
      var hasDiscount = product.discountPercent > 0;

      var productHtml = `
                <div class="col-md-4 col-lg-3 col-6 my-1 px-1">
                    <div class="product-card" data-product='${JSON.stringify(
                      product
                    )}'>
                        <img src="${product.image}" alt="${
        product.name
      }" class="product-image img-fluid">
                        <div class="product-content d-flex flex-column">
                            <div class="product-title">${product.name}</div>
                            <div class="product-description">${
                              product.description
                            }</div>
                            <div class="product-price-container">
                                ${
                                  hasDiscount
                                    ? `<div class="product-discount">${product.price.toLocaleString()}₫</div>`
                                    : ""
                                }
                                <div class="product-price">${product.discountPrice.toLocaleString()}₫</div>
                            </div>
                        </div>
                        <div class="btn-discount ${
                          hasDiscount ? "" : "d-none"
                        }">${
        hasDiscount ? `-${product.discountPercent.toLocaleString()}%` : ""
      }</div>
                    </div>
                </div>
            `;

      productListHtml += productHtml;
    }

    $("#productList").html(productListHtml);

    // Create pagination
    var totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    $("#pagination").empty();
    for (var i = 1; i <= totalPages; i++) {
      var activeClass = i === currentPage ? "active" : "";
      $("#pagination").append(`
                <li class="page-item ${activeClass}"><a class="page-link" href="#" data-page="${i}">${i}</a></li>
            `);
    }
  }

  // Display initial products
  renderProducts(currentPage);

  // Handle pagination click
  $(document).on("click", "#pagination .page-link", function (e) {
    e.preventDefault();
    currentPage = $(this).data("page");
    renderProducts(currentPage);
    // Scroll to top of the page
    $("html, body").animate({ scrollTop: $("#top").offset().top }, "slow");
  });
}

// Khai báo hàm khi tài liệu đã sẵn sàng hiển thị modal
$(document).ready(function () {
  // Sự kiện click vào .product-card
  $(document).on("click", ".product-card", function () {
    var product = $(this).data("product");
    showModal(product);
  });

  function showModal(product) {
    $("#productModalLabel").text(product.name);

    var modalContent = `
            <div class="row">
                <div class="col-md-6 col-lg-4 col-12">
                    <div class="zoomImg p-4">
                        <img src="${product.image}" alt="${product.name}" class="img-fluid">
                    </div>
                </div>
                <div class="col-md-6 col-lg-8 col-12">
                    <p><strong>Loại sản phẩm:</strong> ${product.category}</p>
                    <p><strong>Mô tả:</strong> ${product.description}</p>
                
        `;

    console.log(product.discountPercent + "và" + product.discountPrice);

    // Kiểm tra và hiển thị chi tiết sản phẩm nếu có
    if (product.details && product.details.length > 0) {
      modalContent += `<p><strong>Chi tiết sản phẩm:</strong></p>`;
      modalContent += `<ul style="list-style:none">`;
      product.details.forEach((detail) => {
        modalContent += `<li>${detail}</li>`;
      });
      modalContent += `</ul>`;
    }

    if (product.discountPercent > 0) {
      modalContent += `
            <div class="product-price-container">
                <div class="product-discount"><strong>Giá gốc:</strong>  ${product.price.toLocaleString()}₫</div>
                <div class="product-price"><strong>Giá khuyến mãi:</strong> ${product.discountPrice.toLocaleString()}₫</div>
                <div class="btn-discount"><strong>Giảm giá:</strong> ${
                  product.discountPercent
                }%</div>
           </div>
            `;
    } else {
      // Kiểm tra và xử lý phần trăm giảm giá
      if (!isNaN(product.discountPercent)) {
        modalContent += `
                        <div class="product-price-container">
                            <div class="product-price "><strong>Giá bán: </strong> ${product.discountPrice.toLocaleString()} ₫</div>
                        </div>
                `;
      }
    }

    modalContent += `
            <div class="input-group mt-3">
                <span class="input-group-btn">
                    <button type="button" class="btn btn-outline-secondary btn-minus">-</button>
                </span>
                <input type="number" class="form-control text-center product-quantity" value="1">
                <span class="input-group-btn">
                    <button type="button" class="btn btn-outline-secondary btn-plus">+</button>
                </span>
            </div>
            <div class="d-flex flex-column flex-md-row  justify-content-between">
            <button class="btn btn-info  btn-add-to-cart m-2 w-100" data-name="${product.name}" data-price="${product.discountPrice}"> <i class="fa-solid fa-cart-plus text-light"></i> Thêm vào giỏ hàng</button>
            <button class="btn btn-warning  btn-buy-now m-2 w-100" data-name="${product.name}" data-price="${product.discountPrice}">Mua ngay</button>
            </div>
        </div>
        </div>`;

    $("#productModalBody").html(modalContent);
    $("#productModal").modal("show");

    // xử lý các nút bấm
    // Xử lý sự kiện click nút thêm số lượng
    $(document).on("click", ".btn-plus", function () {
      var input = $(this)
        .closest(".input-group")
        .find("input.product-quantity");
      var value = parseInt(input.val());
      input.val(value + 1);
    });

    // Xử lý sự kiện click nút trừ số lượng
    $(document).on("click", ".btn-minus", function () {
      var input = $(this)
        .closest(".input-group")
        .find("input.product-quantity");
      var value = parseInt(input.val());
      if (value > 1) {
        input.val(value - 1);
      }
    });

    //demo gpt

    function displayAddToCartAlert(name, discountPrice, quantity) {
      var alertHtml = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>${quantity} x ${name}</strong> đã được thêm vào giỏ hàng với đơn giá ${discountPrice.toLocaleString()} VND.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        `;

      // Hiển thị thông báo trong phần tử có id là 'alertContainer'
      $("#alertContainer").html(alertHtml);
    }

    // Xử lý sự kiện thêm sản phẩm vào giỏ hàng trong modal
    $(document).on("click", "#productModal .btn-add-to-cart", function () {
      // Lấy thông tin sản phẩm từ thuộc tính data-product trong modal

      // Lấy thông tin sản phẩm
      var name = product.name;
      var price = product.price; // Sử dụng giá khuyến mãi
      var discountPrice = product.discountPrice;
      var discountPercent = product.discountPercent;
      var image = product.image;
      var quantity = parseInt($("#productModal .product-quantity").val());

      // Thêm sản phẩm vào giỏ hàng
      addToCart(name, price, discountPrice, discountPercent, image, quantity);

      // Hiển thị thông báo khi sản phẩm được thêm vào giỏ hàng
      displayAddToCartAlert(name, discountPrice, quantity);

      // Cập nhật dropdown menu giỏ hàng
      updateCartDropdown();
    });

    // // Hàm cập nhật dropdown menu giỏ hàng
    // function updateCartDropdown() {
    //     // Lấy giỏ hàng từ localStorage
    //     var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    //     // Lấy phần tử chứa danh sách sản phẩm trong giỏ hàng
    //     var cartItemsContainer = $('.cart-items-container');

    //     // Kiểm tra nếu giỏ hàng rỗng
    //     if (cartItems.length === 0) {
    //         // Ẩn danh sách sản phẩm trong giỏ hàng và hiển thị thông báo "Chưa có sản phẩm nào trong giỏ hàng"
    //         cartItemsContainer.hide();
    //         $('.empty-cart-message').show();
    //     } else {
    //         // Hiển thị danh sách sản phẩm trong giỏ hàng và ẩn thông báo
    //         $('.empty-cart-message').hide();
    //         cartItemsContainer.empty(); // Xóa nội dung hiện tại của danh sách sản phẩm trong giỏ hàng

    //         // Duyệt qua từng sản phẩm trong giỏ hàng và hiển thị
    //         cartItems.forEach(function (item) {
    //             var productHtml = `
    //         <div class="dropdown-item">
    //             <div class="d-flex justify-content-between align-items-center">
    //                 <div class="d-flex align-items-center">
    //                     <img src="${item.image}" alt="${item.name}" class="mr-3" style="width: 50px;">
    //                     <div>
    //                         <div class="font-weight-bold">${item.name}</div>
    //                         <div>${item.quantity} x ${item.discountPrice.toLocaleString()} VND</div>
    //                     </div>
    //                 </div>
    //                 <button class="btn btn-danger btn-sm remove-from-cart" data-name="${item.name}">Xóa</button>
    //             </div>
    //         </div>
    //     `;
    //             // Thêm sản phẩm vào danh sách sản phẩm trong giỏ hàng
    //             cartItemsContainer.append(productHtml);
    //         });
    //         // Hiển thị danh sách sản phẩm trong giỏ hàng
    //         cartItemsContainer.show();
    //     }
    //     // Thêm sự kiện cho nút "Xóa" để loại bỏ sản phẩm khỏi giỏ hàng khi nhấn
    //     // Thay đổi phần gán sự kiện cho nút "Xóa" trong hàm updateCartDropdown()
    //     $('body').on('click', '.remove-from-cart', function () {
    //         var productName = $(this).data('name');
    //         removeFromCart(productName);
    //     });

    //     // Cập nhật số lượng sản phẩm trong biểu tượng giỏ hàng
    //     updateCartIcon(cartItems.length);
    // }

    // $(document).ready(function () {
    //     updateCartDropdown();
    // });

    // // Hàm loại bỏ sản phẩm khỏi giỏ hàng
    // function removeFromCart(productName) {
    //     // Lấy giỏ hàng từ localStorage
    //     var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    //     // Lọc sản phẩm có tên trùng khớp với tên được chọn để loại bỏ
    //     var updatedCartItems = cartItems.filter(function (item) {
    //         return item.name !== productName;
    //     });

    //     // Lưu giỏ hàng đã được cập nhật vào localStorage
    //     localStorage.setItem('cart', JSON.stringify(updatedCartItems));

    //     // Cập nhật dropdown menu giỏ hàng
    //     updateCartDropdown();
    // }

    // function updateCartIcon(numItems) {
    //     // Cập nhật số lượng sản phẩm trong biểu tượng giỏ hàng
    //     $('.num-item-in-cart').text(numItems);
    // }

    // Function to add product to cart
    function addToCart(
      name,
      price,
      discountPrice,
      discountPercent,
      image,
      quantity
    ) {
      var product = {
        name: name,
        price: price,
        discountPrice: discountPrice,
        discountPercent: discountPercent,
        image: image,
        quantity: quantity,
      };

      // Lấy giỏ hàng từ localStorage
      var cartItems = JSON.parse(localStorage.getItem("cart")) || [];

      // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
      var existingProductIndex = cartItems.findIndex(
        (item) => item.name === name
      );
      if (existingProductIndex !== -1) {
        // Nếu sản phẩm đã tồn tại trong giỏ hàng, chỉ cập nhật số lượng
        cartItems[existingProductIndex].quantity += quantity;
      } else {
        // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm vào giỏ hàng
        cartItems.push(product);
      }

      // Lưu giỏ hàng vào localStorage
      localStorage.setItem("cart", JSON.stringify(cartItems));

      // Cập nhật số lượng sản phẩm trong biểu tượng giỏ hàng
      updateCartIcon(cartItems.length);

      // Log để kiểm tra
      console.log("Đã thêm sản phẩm vào giỏ hàng:", product);
    }

    // Handle "Mua ngay" button click
    $(document).on("click", ".btn-buy-now", function () {
      // Lấy thông tin sản phẩm
      var name = product.name;
      var price = product.price; // Sử dụng giá khuyến mãi
      var discountPrice = product.discountPrice;
      var discountPercent = product.discountPercent;
      var image = product.image;
      var quantity = parseInt($("#productModal .product-quantity").val());

      // Thêm sản phẩm vào giỏ hàng
      addToCart(name, price, discountPrice, discountPercent, image, quantity);
      displayCheckoutRedirectAlert(name, discountPrice, quantity);
      updateCartIcon(cartItems.length);

      // Log để kiểm tra
      console.log("Đã thêm sản phẩm vào giỏ hàng:", product);
      console.log("Đang mua sản phẩm và chuyển hướng sang thanh toán");
    });

    // Hàm hiển thị thông báo khi mua ngay và chuyển hướng sang trang thanh toán
    function displayCheckoutRedirectAlert(name, discountPrice, quantity) {
      var total = discountPrice * quantity; // Tính tổng giá
      var alertHtml = `
                <div class="alert alert-primary alert-dismissible fade show" role="alert">
                    <strong>${quantity} x ${name}</strong> đã được mua với giá ${discountPrice.toLocaleString()} VND.
                    <br>
                    <strong>Total: ${total.toLocaleString()} VND</strong>
                    <div class="spinner-border"></div>
                    <p> Đang chuyển hướng sang trang thanh toán sau 3 giây ...</p>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            `;

      // Hiển thị thông báo trong phần tử có id là 'alertContainer'
      $("#alertContainer").html(alertHtml);

      // Tự động đóng thông báo sau 10 giây
      setTimeout(function () {
        $(".alert").alert("close");

        // Chuyển hướng người dùng sang trang thanh toán sau 3 giây ...
        window.location.href = "../html/gio-hang.html"; // Thay 'trang-thanh-toan.html' bằng đường dẫn đến trang thanh toán của bạn
      }, 3000); // 3 giây
    }
  }
});

$(document).ready(function () {
  var images = $(".image-container img");
  var currentIndex = 0;

  function showImage(index) {
    images.removeClass("active");
    images.eq(index).addClass("active");
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  // Tự động chuyển ảnh sau mỗi 3 giây
  setInterval(nextImage, 5000);
});
$(document).ready(function () {
  // Lấy dữ liệu thành viên từ localStorage nếu có
  var users = JSON.parse(localStorage.getItem("users")) || [];

  // Hiển thị danh sách thành viên
  function displayMembers() {
    var memberTable = $("#memberList");
    memberTable.empty();
    users.forEach(function (user) {
      var row = $("<tr>");
      row.append("<td>" + user.fullName + "</td>");
      row.append("<td>" + user.username + "</td>");
      row.append("<td>" + user.email + "</td>");
      row.append("<td>" + user.phone + "</td>");
      row.append("<td>" + user.dob + "</td>");
      row.append("<td>" + user.address + "</td>");
      memberTable.append(row);
    });
  }

  displayMembers();

  $("#registerForm").submit(function (e) {
    e.preventDefault();
    if (this.checkValidity()) {
      var formData = $(this).serializeArray();
      var userObject = {};
      $.each(formData, function (i, field) {
        userObject[field.name] = field.value;
      });
      users.push(userObject);
      localStorage.setItem("users", JSON.stringify(users)); // Lưu vào localStorage
      displayMembers(); // Hiển thị lại danh sách thành viên
      alert("Đăng ký thành công!");
      $("#registerForm")[0].reset();
    } else {
      e.stopPropagation();
      $(this).addClass("was-validated");
    }
  });

  $("#loginForm").submit(function (e) {
    e.preventDefault();
    var username = $("#loginUsername").val();
    var password = $("#loginPassword").val();
    var foundUser = users.find(function (user) {
      return user.username === username && user.password === password;
    });
    if (foundUser) {
      alert("Đăng nhập thành công!");
      // Thực hiện các hành động sau khi đăng nhập thành công
    } else {
      alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
  });
});

// Hàm cập nhật dropdown menu giỏ hàng
function updateCartDropdown() {
  // Lấy giỏ hàng từ localStorage
  var cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  // Lấy phần tử chứa danh sách sản phẩm trong giỏ hàng
  var cartItemsContainer = $(".cart-items-container");

  // Kiểm tra nếu giỏ hàng rỗng
  if (cartItems.length === 0) {
    // Ẩn danh sách sản phẩm trong giỏ hàng và hiển thị thông báo "Chưa có sản phẩm nào trong giỏ hàng"
    cartItemsContainer.hide();
    $(".empty-cart-message").show();
  } else {
    // Hiển thị danh sách sản phẩm trong giỏ hàng và ẩn thông báo
    $(".empty-cart-message").hide();
    cartItemsContainer.empty(); // Xóa nội dung hiện tại của danh sách sản phẩm trong giỏ hàng

    // Duyệt qua từng sản phẩm trong giỏ hàng và hiển thị
    cartItems.forEach(function (item) {
      var productHtml = `
        <div class="dropdown-item">
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                    <img src="${item.image}" alt="${
        item.name
      }" class="mr-3" style="width: 50px;">
                    <div>
                        <div class="font-weight-bold">${item.name}</div>
                        <div>${
                          item.quantity
                        } x ${item.discountPrice.toLocaleString()} VND</div>
                    </div>
                </div>
                <button class="btn btn-danger btn-sm remove-from-cart" data-name="${
                  item.name
                }">Xóa</button>
            </div>
        </div>
    `;
      // Thêm sản phẩm vào danh sách sản phẩm trong giỏ hàng
      cartItemsContainer.append(productHtml);
    });
    // Hiển thị danh sách sản phẩm trong giỏ hàng
    cartItemsContainer.show();
  }
  // Cập nhật số lượng sản phẩm trong biểu tượng giỏ hàng
  updateCartIcon(cartItems.length);
}

$(document).ready(function () {
  updateCartDropdown();
});

// Gán sự kiện cho nút "Xóa" bằng cách sử dụng $(document).on()
$(document).on("click", ".remove-from-cart", function () {
  var productName = $(this).data("name");
  removeFromCart(productName);
});

// Hàm loại bỏ sản phẩm khỏi giỏ hàng
function removeFromCart(productName) {
  // Lấy giỏ hàng từ localStorage
  var cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  // Lọc sản phẩm có tên trùng khớp với tên được chọn để loại bỏ
  var updatedCartItems = cartItems.filter(function (item) {
    return item.name !== productName;
  });

  // Lưu giỏ hàng đã được cập nhật vào localStorage
  localStorage.setItem("cart", JSON.stringify(updatedCartItems));

  // Cập nhật dropdown menu giỏ hàng
  updateCartDropdown();
}

function updateCartIcon(numItems) {
  // Cập nhật số lượng sản phẩm trong biểu tượng giỏ hàng
  $(".num-item-in-cart").text(numItems);
}

$(document).ready(function () {
  // Trích xuất dữ liệu từ Local Storage
  var cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  // Lấy phần tử chứa danh sách sản phẩm trong giỏ hàng
  var cartItemsContainer = $("#cart-items-container");

  // Hiển thị danh sách sản phẩm trong giỏ hàng
  if (cartItems.length === 0) {
    cartItemsContainer.html("<p>Giỏ hàng của bạn đang trống.</p>");
  } else {
    cartItemsContainer.empty();
    cartItems.forEach(function (item) {
      // Tính tổng cộng
      var total = item.discountPrice * item.quantity;
      var discountPercent =
        ((item.price - item.discountPrice) / item.price) * 100;

      var productHtml = `
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${item.image}" alt="${
        item.name
      }" class="img-fluid rounded-start">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${item.name}</h5>
                                <p class="product-discount">Giá gốc: ${item.price.toLocaleString()} VND</p>
                                <p class="product-price">Giá giảm: ${item.discountPrice.toLocaleString()} VND</p>
                                <p class="btn btn-danger text-center">-${discountPercent}%</p>   <span class="card-text">Số lượng: ${
        item.quantity
      }</span>
                              
                            </div>
                        </div>
                    </div>
                </div>
            `;
      cartItemsContainer.append(productHtml);
    });
  }
});

$(document).ready(function () {
  // Trích xuất dữ liệu từ Local Storage
  var cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  // Lấy phần tử chứa bảng hóa đơn
  var billTable = $("#bill-table");

  // Hiển thị bảng hóa đơn
  if (cartItems.length === 0) {
    billTable.html("<p>Không có sản phẩm nào trong giỏ hàng.</p>");
  } else {
    // Tạo header cho bảng hóa đơn
    var tableHtml = `
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Giá gốc (VND)</th>
                        <th scope="col">Giá giảm (VND)</th>
                        <th scope="col">Phần trăm khuyến mãi (%)</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Tổng cộng (VND)</th>
                    </tr>
                </thead>
                <tbody id="bill-body">
                </tbody>
            </table>
        `;

    billTable.html(tableHtml);

    var billBody = $("#bill-body");

    // Duyệt qua từng sản phẩm và thêm vào bảng hóa đơn
    cartItems.forEach(function (item, index) {
      var total = item.discountPrice * item.quantity;
      var discountPercent =
        ((item.price - item.discountPrice) / item.price) * 100;

      var rowHtml = `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${item.name}</td>
                    <td>${item.price.toLocaleString()}</td>
                    <td>${item.discountPrice.toLocaleString()}</td>
                    <td>${discountPercent.toFixed(2)}</td>
                    <td>${item.quantity}</td>
                    <td>${total.toLocaleString()}</td>
                </tr>
            `;
      billBody.append(rowHtml);
    });
  }
});
