function analisa() {
  const keluhan = document.getElementById("keluhan").value.toLowerCase();
  const hasil = document.getElementById("hasil");

  if (!keluhan) {
    hasil.innerHTML = "⚠️ Silakan isi keluhan dulu";
    return;
  }

  if (keluhan.includes("sesak") || keluhan.includes("pingsan")) {
    hasil.innerHTML = "🚨 LEVEL 3 (DARURAT)<br>Segera ke rumah sakit atau hubungi 119!";
  } 
  else if (keluhan.includes("demam") || keluhan.includes("batuk")) {
    hasil.innerHTML = "🟡 LEVEL 1 (RINGAN)<br>Istirahat, minum air, bisa konsumsi obat ringan.";
  } 
  else {
    hasil.innerHTML = "🟠 LEVEL 2 (MENENGAH)<br>Sebaiknya periksa ke dokter.";
  }
}
