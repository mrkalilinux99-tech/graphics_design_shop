const CONFIG = {
  SHOP_NAME: "शरदाई ग्राफिक्स",
  WHATSAPP_NUMBER: "+919022494650",
  OWNER: "आशिष राठोड / रोहन राठोड",
  PHONE: "+919022494650/+918080480173",
  EMAIL: "ashishrathod1996@gmail.com",
  ADDRESS: "MURTIZAPUR MAIN ROAD BT MALL DIST AKOLA, MAHARASHTRA"
};

document.title = CONFIG.SHOP_NAME + " | Graphics Design";

document.getElementById("shopName").textContent = CONFIG.SHOP_NAME;
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("phoneText").textContent = CONFIG.PHONE;
document.getElementById("emailText").textContent = CONFIG.EMAIL;
document.getElementById("addressText").textContent = CONFIG.ADDRESS;

const wa = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello, I need a graphics design.")}`;
document.getElementById("heroWhatsapp").href = wa;
document.getElementById("floatWhatsapp").href = wa;

document.querySelector(".menu").addEventListener("click", () => {
  const nav = document.querySelector("nav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  nav.style.flexDirection = "column";
  nav.style.position = "absolute";
  nav.style.top = "70px";
  nav.style.right = "4%";
  nav.style.background = "#fff";
  nav.style.padding = "15px 20px";
  nav.style.borderRadius = "12px";
  nav.style.boxShadow = "0 15px 40px #0002";
});

document.getElementById("orderForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const status = document.getElementById("formStatus");
  status.textContent = "Sending...";
  const data = Object.fromEntries(new FormData(e.target).entries());
  try {
    const res = await fetch("/api/order", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    });
    const result = await res.json();
    status.textContent = result.message;
    if (result.ok) e.target.reset();
  } catch {
    status.textContent = "Backend is not running. Please use WhatsApp for enquiries.";
  }
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("/static/service-worker.js"));
}
