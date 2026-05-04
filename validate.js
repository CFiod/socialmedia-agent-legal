const fs = require('fs');

['privacy.html','terms.html','deletion.html'].forEach(file => {
  if (!fs.existsSync(file)) {
    throw new Error(`${file} não encontrado`);
  }
});

console.log("OK - arquivos válidos");
