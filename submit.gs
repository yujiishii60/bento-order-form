function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("注文一覧"); // ← ★ここを変更：シート名
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),                   // タイムスタンプ
    data.name,                   // 名前
    data.bentoA,                 // 弁当A
    data.bentoB,                 // 弁当B
    data.bentoC,                 // 弁当C
    data.total,                  // 合計
    data.phone                   // 電話番号
  ]);

  return ContentService.createTextOutput("OK");
}

