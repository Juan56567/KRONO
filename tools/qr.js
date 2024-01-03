const qrcode = require("qrcode");
const opcionesQR = {
  errorCorrectionLevel: "H", // Niveles: 'L', 'M', 'Q', 'H'
  scale: 4, // Tamaño del código QR
};

module.exports = function genQr(data) {
  qrcode.toString(data, opcionesQR, (err, qrCode) => {
    if (err) {
      console.error(err);
    } else {
      console.log(qrCode);
      console.log(data);
    }
  });
};
