var library = require("./index");

var locales = [
  require("./langs/br.json"),
  require("./langs/cs.json"),
  require("./langs/de.json"),
  require("./langs/en.json"),
  require("./langs/fr.json"),
  require("./langs/is.json")
];

for (var i = 0; i < locales.length; i++) {
  library.registerLocale(locales[i]);
}

module.exports = library;
