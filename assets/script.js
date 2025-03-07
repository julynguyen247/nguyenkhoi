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
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "🩷";  // Biểu tượng trái tim
    heart.classList.add("heart");
    document.body.appendChild(heart);

    // Định vị ngẫu nhiên
    heart.style.position="absolute";
    heart.style.top="-10px"
    heart.style.left = Math.random() * 80 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Thời gian rơi từ 3-5s
    heart.style.fontSize = Math.random() * 20 + 30 + "px"; // Kích thước ngẫu nhiên

    // Xóa trái tim sau khi rơi xong
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Tạo mưa tim liên tục
setInterval(createHeart, 200);
