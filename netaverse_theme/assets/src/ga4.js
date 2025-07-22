export function attachGA4ProductClicks() {
  document.querySelectorAll('[data-product-id]').forEach(el => {
    el.addEventListener('click', () => {
      console.log('GA4 product click', el.dataset.productId);
    });
  });
}
