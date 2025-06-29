const numberEl = document.getElementById("number");
    const readingEl = document.getElementById("reading");
    const showBtn = document.getElementById("showBtn");
    const nextBtn = document.getElementById("nextBtn");

    function readPart(num) {
  const units = ["", "いち", "に", "さん", "よん", "ご", "ろく", "なな", "はち", "きゅう"];
  let res = "";

  const sen = Math.floor(num / 1000);
  const hyaku = Math.floor((num % 1000) / 100);
  const juu = Math.floor((num % 100) / 10);
  const ichi = num % 10;

  if (sen > 0) {
    if (sen === 1) res += "せん";
    else if (sen === 3) res += "さんぜん";
    else if (sen === 8) res += "はっせん";
    else res += units[sen] + "せん";
  }

  if (hyaku > 0) {
    if (hyaku === 1) res += "ひゃく";
    else if (hyaku === 3) res += "さんびゃく";
    else if (hyaku === 6) res += "ろっぴゃく";
    else if (hyaku === 8) res += "はっぴゃく";
    else res += units[hyaku] + "ひゃく";
  }

  if (juu > 0) {
    if (juu === 1) res += "じゅう";
    else res += units[juu] + "じゅう";
  }

  if (ichi > 0) {
    res += units[ichi];
  }

  return res;
}


    let currentNumber = 0;

    function generateNumber() {
      currentNumber = Math.floor(Math.random() * 500000) + 1;
      numberEl.textContent = "¥" + currentNumber.toLocaleString();
      readingEl.textContent = "";
    }

    function numberToJapanese(num) {
      const units = ["", "いち", "に", "さん", "よん", "ご", "ろく", "なな", "はち", "きゅう"];

      let result = "";

      const man = Math.floor(num / 10000);
      const sen = Math.floor((num % 10000) / 1000);
      const hyaku = Math.floor((num % 1000) / 100);
      const juu = Math.floor((num % 100) / 10);
      const ichi = num % 10;

      // Man (万)
      if (man > 0) {
  if (man === 1) {
    result += "いちまん";
  } else {
    result += readPart(man) + "まん";
  }
}


      // Sen (千)
      if (sen > 0) {
        if (sen === 1) {
          result += "せん";
        } else if (sen === 3) {
          result += "さんぜん";
        } else if (sen === 8) {
          result += "はっせん";
        } else {
          result += units[sen] + "せん";
        }
      }

      // Hyaku (百)
      if (hyaku > 0) {
        if (hyaku === 1) {
          result += "ひゃく";
        } else if (hyaku === 3) {
          result += "さんびゃく";
        } else if (hyaku === 6) {
          result += "ろっぴゃく";
        } else if (hyaku === 8) {
          result += "はっぴゃく";
        } else {
          result += units[hyaku] + "ひゃく";
        }
      }

      // Juu (十)
      if (juu > 0) {
        if (juu === 1) {
          result += "じゅう";
        } else {
          result += units[juu] + "じゅう";
        }
      }

      // Ichi (1-9)
      if (ichi > 0) {
        result += units[ichi];
      }

      result += "えん";

      return result;
    }

    showBtn.addEventListener("click", () => {
      const reading = numberToJapanese(currentNumber);
      readingEl.textContent = reading;
    });

    nextBtn.addEventListener("click", () => {
      generateNumber();
    });

    // Initialize
    generateNumber();
 