"use strict";

// For RU
(function _callee() {
  var res, data, country, allowedCountries;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("https://api.country.is/"));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(res.json());

        case 6:
          data = _context.sent;
          country = data.country.toLowerCase();
          allowedCountries = ["ru"];

          if (!allowedCountries.includes(country)) {
            window.location.href = "404.html";
          }

          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          window.location.href = "404.html";

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
})(); // For EN


(function _callee2() {
  var res, data, country, allowedCountries;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(fetch("https://api.country.is/"));

        case 3:
          res = _context2.sent;
          _context2.next = 6;
          return regeneratorRuntime.awrap(res.json());

        case 6:
          data = _context2.sent;
          country = data.country.toLowerCase(); // Список разрешённых стран для английской версии

          allowedCountries = ["us", "gb", "ca", "au", "de"];

          if (!allowedCountries.includes(country)) {
            // Страна не подходит — редиректим на 404
            window.location.href = "404.html";
          }

          _context2.next = 15;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          // если не удалось определить IP — тоже на 404
          window.location.href = "404.html";

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 12]]);
})();