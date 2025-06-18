const MAX_TOTAL = 5;

document.getElementById('bentoForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const bentoA = parseInt(document.getElementById("bentoA").value) || 0;
  const bentoB = parseInt(document.getElementById("bentoB").value) || 0;
  const bentoC = parseInt(document.getElementById("bentoC").value) || 0;
  const bentoD = parseInt(document.getElementById("bentoD").value) || 0;
  const bentoE = parseInt(document.getElementById("bentoE").value) || 0;
  const bentoF = parseInt(document.getElementById("bentoF").value) || 0;

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const pickup = document.getElementById("pickup").value;

  const total = bentoA + bentoB + bentoC + bentoD + bentoE + bentoF;

  if (total > MAX_TOTAL) {
    document.getElementById('errorMessage').textContent =
      `注文合計は最大${MAX_TOTAL}個までです（現在：${total}個）`;
    return;
  }

  // GASへ送信
  fetch('https://script.google.com/macros/s/AKfycbwsC5__q4XCFmtiaXyjxvg0-KQr4imh1bbm1qVWE_3naq9IKf7IW767jIvjCA78zj2U/exec', {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: name,
      phone: phone,
      pickup: pickup,
      bentoA: bentoA,
      bentoB: bentoB,
      bentoC: bentoC,
      bentoD: bentoD,
      bentoE: bentoE,
      bentoF: bentoF,
      total: total
    })
  });

  document.getElementById("bentoForm").reset();
  alert('注文を受け付けました！');
});
