function open_letter() {
    document.getElementsByClassName("letter-close")[0].style.display = 'none'
    document.getElementsByClassName("letter-open")[0].style.display = 'block'
}

// Import the data to customize and insert them into page
const fetchData = () => {
    fetch("../customize.json")
        .then(data => data.json())
        .then(data => {
            Object.keys(data).map(customData => {
                if (data[customData] !== "") {
                    document.getElementById(customData).innerText = data[customData];
                }
            });
        });
};

const resolveFetch = () => {
    return new Promise((resolve, reject) => {
        fetchData();
        resolve("Fetch done!");
    });
};

resolveFetch();
function Khoi() {
    const heart = document.createElement("img");
    heart.src = "./assets/meo.jpg"; // Sử dụng ảnh có sẵn
    heart.classList.add("heart");
    document.body.appendChild(heart);
  
    // Kích thước ngẫu nhiên nhưng đảm bảo chiều rộng = chiều cao
    const size = Math.random() * 20 + 50 + "px";
  
    // Thiết lập kiểu dáng cho hiệu ứng rơi
    heart.style.position = "absolute";
    heart.style.top = "-10px";
    heart.style.left = Math.random() * 80 + "vw";
    heart.style.width = size;
    heart.style.borderRadius = "50%"; // Làm tròn ảnh
    heart.style.objectFit = "cover"; // Giữ tỷ lệ ảnh không bị méo
    heart.style.animation = `fall ${Math.random() * 2 + 5}s linear`;
    heart.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.1)"; // Hiệu ứng bóng nhẹ
  
    // Xóa hình ảnh sau khi rơi xong
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
  setInterval(Khoi, 100);
