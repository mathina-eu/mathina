export const preloadImage = src =>
  new Promise(r => {
    const image = new Image();
    image.onload = r;
    image.onerror = r;
    image.src = src;
  });
