const data = [
  {
    images: "./images/Máy năng lượng mặt trời MEGASUN.png",
    title: "Máy năng lượng mặt trời MEGASUN",
    price: "7.100.000",
  },
  {
    images: "./images/may-loc-nuoc-ro-kangaroo-kg10a4-vtu-10-loi-0-600x600.jpg",
    title: "Máy lọc nước R.O nóng nguội lạnh Hydrogen Kangaroo",
    price: "12.990.000",
  },
  {
    images: "./images/samsung-rt22m4032by-sv-300x300.jpg",
    title: "Tủ lạnh Samsung Inverter 236 lít RT22M4032BY/SV",
    price: "7.390.000",
  },
  {
    images: "./images/tu-lanh-lg-inverter-266-lit-gv-b262wb50-600x600.jpg",
    title: "Tủ lạnh LG Inverter 266 Lít GV-B262WB",
    price: "6.990.000",
  },
  {
    images: "./images/delites-ncg1805-thumb-300x300.jpg",
    title: "Nồi cơm điện nắp gài Delites 1.8 lít NCG1805",
    price: "385.000",
  },
  {
    images: "./images/delites-ncr1502-281022-033255-600x600.jpg",
    title: "Nồi cơm điện Delites 1.5 lít NCR1502",
    price: "350.000",
  },
  {
    images:
      "./images/may-nuoc-nong-truc-tiep-casper-4500w-en-45th11-021221-040517-600x600.jpg",
    title: "Máy nước nóng trực tiếp Casper 4500W EN-45TH11",
    price: "1.290.000",
  },
  {
    images: "./images/centon-8338e-300x300.jpg",
    title: "Máy nước nóng trực tiếp Centon 4500W WH8338E EMC",
    price: "2.050.000",
  },
  {
    images: "./images/b28fc698a518a09ff61c42192a89f7e0.png.webp",
    title: "Máy Nước Nóng Năng Lượng Mặt Trời Empire Plus 140 lít",
    price: "7.280.000",
  },
  {
    images: "./images/doi-lap-am-ava-ly-ds3s-1.-600x600.jpg",
    title: "Bếp từ đôi lắp âm AVA LY-DS3S",
    price: "3.900.000",
  },
];

const productEl = document.querySelector(".product .grid");

// Map array
let html = data.map((product, key) => {
  return `
    <div class="product-container" data-id="${key}">
    <div class="product-image">
      <img src="${product.images}"
        alt="product"
      />
    </div>
    <div class="product-title">${product.title}</div>
    <div class="product-price">${product.price}</div>
    <a href="#" class="btn-addcart">THÊM VÀO GIỎ</a>
  </div>
    `;
});

// Render HTML
productEl.innerHTML = html.join("");

const btnAddCartList = document.querySelectorAll(".btn-addcart");

btnAddCartList.forEach((item) => {
  item.addEventListener("click", (e) => {
    alert("Tính năng đang phát triển\nVui lòng thử lại sau");
  });
});
