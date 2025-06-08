// For RU

(async function () {
  try {
    const res = await fetch("https://api.country.is/");
    const data = await res.json();
    const country = data.country.toLowerCase();

    const allowedCountries = ["ru"];

    if (!allowedCountries.includes(country)) {
      window.location.href = "404.html";
    }
  } catch (e) {
    window.location.href = "404.html";
  }
})();

// For EN

(async function () {
  try {
    const res = await fetch("https://api.country.is/");
    const data = await res.json();
    const country = data.country.toLowerCase();

    // Список разрешённых стран для английской версии
    const allowedCountries = ["us", "gb", "ca", "au", "de"];

    if (!allowedCountries.includes(country)) {
      // Страна не подходит — редиректим на 404
      window.location.href = "404.html";
    }
  } catch (e) {
    // если не удалось определить IP — тоже на 404
    window.location.href = "404.html";
  }
})();

// Blocked Countries

const blockedCountries = ["ru", "cn", "ir", "kp"];

if (blockedCountries.includes(country)) {
  window.location.href = "/404.html";
}

// Allowed Countries

const allowedCountries = [
  "us", "ca", "gb", "au", "nz", 
  "fr", "de", "it", "es", "pt", 
  "nl", "be", "ch", "at",       
  "se", "no", "fi", "dk",       
  "ie", "lu"                  
];
