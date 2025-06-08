document.getElementById('calculate-btn').addEventListener('click', () => {
  const type = document.getElementById('insurance-type').value;
  const coverage = parseFloat(document.getElementById('coverage-amount').value);
  const term = parseInt(document.getElementById('term').value);

  if (!coverage || !term || coverage < 10000 || term < 1) {
      document.getElementById('calculation-result').textContent = 'Введите корректные данные для расчета.';
      return;
  }

  let rate;
  switch (type) {
      case 'auto': rate = 0.05; break;
      case 'health': rate = 0.03; break;
      case 'property': rate = 0.04; break;
      default: rate = 0;
  }

  const cost = (coverage * rate * (term / 12)).toFixed(2);
  document.getElementById('calculation-result').textContent = `Стоимость полиса: ${cost} руб.`;
});
