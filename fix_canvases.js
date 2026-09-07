const gargantuaCanvas = document.getElementById("gargantuaBgCanvas");
if (gargantuaCanvas) {
  new ResizeObserver((entries) => {
    for (let entry of entries) {
      if (entry.contentRect.width > 0 && window.gargantua3DInstance) {
        window.gargantua3DInstance.resize();
      }
    }
  }).observe(gargantuaCanvas.parentElement);
}

const spectrumCanvas = document.getElementById("spectrumCanvas");
if (spectrumCanvas) {
  new ResizeObserver((entries) => {
    for (let entry of entries) {
      if (entry.contentRect.width > 0) {
        const slider = document.getElementById("spectrumSlider");
        if (slider) {
          slider.dispatchEvent(new Event('input'));
        }
      }
    }
  }).observe(spectrumCanvas.parentElement);
}
