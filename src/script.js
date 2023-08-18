function laske() {
    const paketinMaara = parseFloat(document.getElementById('paketinMaara').value);
    const paketinHinta = parseFloat(document.getElementById('paketinHinta').value);

    if (!isNaN(paketinMaara) && !isNaN(paketinHinta) && paketinMaara > 0) {
        const yhdenPatukanHinta = paketinHinta / paketinMaara;
        document.getElementById('tulos').textContent = `Yhden patukan hinta: ${yhdenPatukanHinta.toFixed(2)} euroa`;
    } else {
        document.getElementById('tulos').textContent = 'Syötä kelvolliset arvot.';
    }
}