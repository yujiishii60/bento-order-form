const MAX_TOTAL = 5;

document.getElementById('bentoForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;

  const bentoA = parseInt(form.bentoA.value) || 0;
  const bentoB = parseInt(form.bentoB.value) || 0;
  const bentoC = parseInt(form.bentoC.value) || 0;
  const bentoD = parseInt(form.bentoD.value) || 0;
  const bentoE = parseInt(form.bentoE.value) || 0;
  const bentoF = parseInt(form.bentoF.value) || 0;

  const total = bentoA + bentoB + bentoC + bentoD + bentoE + bentoF;

  if (total > MAX_TOTAL) {
    document.getElementById('errorMessage').textContent =
      `注文合計は最大${MAX_TOTAL}個までです（現在：${total}個）`;
    return;
  } else {
    document.getElementById('errorMessage').textContent = '';
  }

  const data = new URLSearchParams({
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,  // ← これを追加！
    pickup: form.pickup.value,
    bentoA: bentoA,
    bentoB: bentoB,
    bentoC: bentoC,
    bentoD: bentoD,
    bentoE: bentoE,
    bentoF: bentoF,
    total: total
  });

  fetch('https://script.google.com/macros/s/AKfycbyaV9sog2nxc7rRQD6uDeGI-ctUP_tIJvuQva45AFfseF7fcC3Kn-2j9KgJZIz2Jdaa/exec', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: data.toString()
  });

  form.reset();
  alert('注文を受け付けました！');
});
