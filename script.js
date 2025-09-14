let rollBtn = document.getElementById("roll");
let lotteryContainer = document.getElementById("lottery-container");
let results = document.getElementById("results");
let coinSound = new Audio("coin.mp3");
let winningSound = new Audio("winningSound.wav");

let gifts = [
  "Watch",
  "iPhone 17 Air",
  "₹100 Gift Card",
  "Headset",
  "Samsung S25",
  "Shirt",
  "Laptop",
  "Pen",
  "Book",
  "Earphones",
  "Bluetooth Speaker",
  "Fitness Band",
  "Wireless Mouse",
  "Laptop Sleeve",
  "Mechanical Keyboard",
  "Smart Plug",
  "USB-C Charger",
  "LED Desk Lamp",
  "Scented Candles",
  "Wallet",
  "Perfume",
  "Coffee Mug",
  "Graphic Tee",
  "Hoodie",
  "Cap",
  "Sunglasses",
  "Toiletry Kit",
  "Grooming Kit",
  "Skincare Set",
  "Chocolate Hamper",
  "Photo Frame",
  "Desk Organizer",
  "Journal",
  "Art Supplies",
  "Board Game",
  "Bluetooth Tracker",
  "Dairy milk",
  "Mini Projector",
  "Kindle",
  "Streaming Stick",
  "Smart Bulbs",
  "Phone Stand",
  "Tripod",
  "Microphone",
  "External SSD",
  "Memory Card",
  "Gaming Controller",
  "Water Bottle",
  "Indoor Plant",
  "Handmade Craft",
];
// Dynamically keeping Gifts in Html
gifts.forEach(function (gift, i) {
  let giftBox = `<span class="giftitem" id="${i + 1}">${gift}</span>`;
  lotteryContainer.insertAdjacentHTML("beforeend", giftBox);
});
// On click on Roll Button
rollBtn.addEventListener("click", function () {
  results.innerHTML = "Please Wait...";
  let randomNumber = Math.floor(Math.random() * gifts.length) + 1;
  let wonItem = gifts[randomNumber - 1];
  for (let i = 1; i <= gifts.length; i++) {
    document.getElementById(i).classList.remove("highlightedBox");
  }

  let counter = 0;
  // Setting interval for 0.2s for to highlight the gift item
  let intervalId = setInterval(() => {
    coinSound.pause();
    coinSound.currentTime = 0;
    coinSound.play();
    let randomBox = Math.floor(Math.random() * gifts.length) + 1;
    //Setting styles highlighted for random gifts
    for (let j = 1; j <= gifts.length; j++) {
      if (j === randomBox) {
        document.getElementById(j).classList.add("wonBox");
      } else {
        document.getElementById(j).classList.remove("wonBox");
      }
    }

    counter++;

    if (counter === 10) {
      clearInterval(intervalId);
      winningSound.pause();
      winningSound.currentTime = 0;
      winningSound.play();
      results.innerHTML = `<h3 class="result">🎉 You won : ${wonItem}! 🎉</h3>`;

      for (let k = 1; k <= gifts.length; k++) {
        document.getElementById(k).classList.remove("wonBox");
      }
      document.getElementById(randomNumber).classList.add("highlightedBox");
    }
  }, 200);
});
