//Dynamic Year//
const currentYearElement = document.getElementById("currentYear");
currentYearElement.textContent = new Date().getFullYear();

//Last Modified Date//
const LastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = "Last Modified: " + document.lastModified;