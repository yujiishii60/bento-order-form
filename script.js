<<<<<<< HEAD
// ★ここを変更：最大注文数を仮で設定（将来的に本番値へ）
const MAX_TOTAL = 5;  // 最大合計注文数（仮設定）

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
      `注文合計は最大${MAX_TOTAL}個までです（現在：${total}個）`; // ← ★ここも自動連動
    return;
  }

  // OK → Google Apps Script へ送信
  // ★ここを変更：送信先のGASエンドポイント（あとで貼る）
    fetch('https://script.google.com/macros/s/AKfycbwsC5__q4XCFmtiaXyjxvg0-KQr4imh1bbm1qVWE_3naq9IKf7IW767jIvjCA78zj2U/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name.value,
        bentoA: bentoA,
        bentoB: bentoB,
        bentoC: bentoC,
        bentoD: bentoD,
        bentoE: bentoE,
        bentoF: bentoF,
        phone: form.phone.value,
        total: total,
        pickup: form.pickup.value // ← ★追加：お渡し時間
      })
    });

    form.reset();
    alert('注文を受け付けました！');
  });
=======
// ★ここを変更：最大注文数を仮で設定（将来的に本番値へ）
const MAX_TOTAL = 5;  // 最大合計注文数（仮設定）

document.getElementById('bentoForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const bentoA = parseInt(form.bentoA.value) || 0;
  const bentoB = parseInt(form.bentoB.value) || 0;
  const bentoC = parseInt(form.bentoC.value) || 0;
  const total = bentoA + bentoB + bentoC;

  if (total > MAX_TOTAL) {
    document.getElementById('errorMessage').textContent =
      `注文合計は最大${MAX_TOTAL}個までです（現在：${total}個）`; // ← ★ここも自動連動
    return;
  }

  // OK → Google Apps Script へ送信
  // ★ここを変更：送信先のGASエンドポイント（あとで貼る）
    fetch('https://script.google.com/macros/s/AKfycbwsC5__q4XCFmtiaXyjxvg0-KQr4imh1bbm1qVWE_3naq9IKf7IW767jIvjCA78zj2U/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name.value,
        bentoA: bentoA,
        bentoB: bentoB,
        bentoC: bentoC,
        phone: form.phone.value,
        total: total,
        pickup: form.pickup.value // ← ★追加：お渡し時間
      })
    });

    form.reset();
    alert('注文を受け付けました！');
  });
>>>>>>> e66e9c89a6cde62eb8615f45f2ad4f8f9a6c26c1
