// ✅ WhatsApp form submission
function sendWhatsApp(event) {
    event.preventDefault();
  
    const name = document.querySelector('form input:nth-child(1)').value.trim();
    const message = document.querySelector('form input:nth-child(2)').value.trim();
  
    if (!name || !message) {
      alert("Please enter your name and message.");
      return;
    }
  
    const phoneNumber = "919096367755"; // 🔁 Replace with your WhatsApp number (with country code, no +)
    const encodedMessage = encodeURIComponent(`Hello! I'm ${name}. ${message}`);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
    window.open(whatsappURL, "_blank");
  }
  
  // ✅ Language switcher (English ⇄ Marathi)
  let isEnglish = true;
  
  function toggleLanguage() {
    isEnglish = !isEnglish;
  
    if (isEnglish) {
      document.getElementById("hero-title").innerText = "✨ Kanya’s Beauty Salon ✨";
      document.getElementById("hero-tagline").innerText = "Where Elegance Meets Excellence";
      document.getElementById("about-title").innerText = "Welcome";
      document.getElementById("about-text").innerText = "Kanya’s Beauty Salon is your go-to destination for timeless beauty and personalized care in Pune.";
      document.getElementById("services-title").innerText = "💄 Our Services";
      document.getElementById("services-list").innerHTML = `
        <li>Bridal & Party Makeup</li>
        <li>Haircuts, Styling & Color</li>
        <li>Facials & Skin Treatments</li>
        <li>Mehndi (Henna) Art</li>
        <li>Manicure & Pedicure</li>
        <li>Threading & Waxing</li>
        <li>Saree Draping & More</li>
      `;
    } else {
      document.getElementById("hero-title").innerText = "✨ कन्याज ब्युटी सलून ✨";
      document.getElementById("hero-tagline").innerText = "जिथे सौंदर्याला मिळते उत्कृष्टतेची साथ";
      document.getElementById("about-title").innerText = "स्वागत आहे";
      document.getElementById("about-text").innerText = "कन्याज ब्युटी सलून हे पुण्यातील तुमचं सौंदर्यवर्धनाचं ठिकाण आहे.";
      document.getElementById("services-title").innerText = "💄 आमच्या सेवा";
      document.getElementById("services-list").innerHTML = `
        <li>विवाह व पार्टी मेकअप</li>
        <li>केस कटिंग, स्टायलिंग आणि कलर</li>
        <li>फेशियल आणि स्किन ट्रीटमेंट</li>
        <li>मेहंदी (हिना) कला</li>
        <li>मॅनिक्युअर आणि पेडिक्युअर</li>
        <li>थ्रेडिंग आणि वॅक्सिंग</li>
        <li>साडी ड्रेपिंग व इतर सेवा</li>
      `;
    }
  }
  
  window.onload = function () {
    alert("Welcome to Kanya’s Beauty Salon!\n\nWe're so glad you're here.\nThank you for choosing us — your beauty is our passion!");
  };
  