/**
 * prices.js — автоподстановка цен из WoodFlow (Supabase)
 * Подключить на страницы с ценами:
 * <script src="/assets/prices.js"></script>
 *
 * На ячейках с ценой добавить атрибут: data-price-id="ID"
 * Например: <td class="prod_price" data-price-id="13" data-price-field="price_m3_1">
 *
 * data-price-field: price_m3_1 | price_m3_2 | price_pcs_1
 */
(function() {
  const PRICES_URL = '/prices.php';

  function fmt(val) {
    if (!val && val !== 0) return '—';
    return Number(val).toLocaleString('ru-RU');
  }

  function applyPrices(items) {
    const map = {};
    items.forEach(item => { map[item.id] = item; });

    document.querySelectorAll('[data-price-id]').forEach(el => {
      const id = parseInt(el.getAttribute('data-price-id'));
      const field = el.getAttribute('data-price-field') || 'price_m3_1';
      const item = map[id];
      if (!item) return;

      const val = item[field];
      const strong = el.querySelector('strong');
      if (strong) {
        strong.textContent = fmt(val);
      } else {
        el.textContent = fmt(val);
      }
    });

    // Обновляем мета-теги og:title и description с минимальной ценой
    updateMetaPrices(items);
  }

  function updateMetaPrices(items) {
    // Находим минимальные цены по категориям для мета-тегов
    const minPrices = {};
    items.forEach(item => {
      const prices = [item.price_m3_1, item.price_m3_2, item.price_pcs_1]
        .filter(p => p != null && p > 0)
        .map(Number);
      if (!prices.length) return;
      const min = Math.min(...prices);
      const cat = item.category;
      if (!minPrices[cat] || min < minPrices[cat]) minPrices[cat] = min;
    });

    // Обновляем элементы с data-min-price-category
    document.querySelectorAll('[data-min-price-cat]').forEach(el => {
      const cat = el.getAttribute('data-min-price-cat');
      if (minPrices[cat] != null) {
        el.textContent = fmt(minPrices[cat]);
      }
    });
  }

  // Загружаем цены
  fetch(PRICES_URL)
    .then(r => r.json())
    .then(applyPrices)
    .catch(function() {}); // тихо падаем — цены останутся из HTML
})();
