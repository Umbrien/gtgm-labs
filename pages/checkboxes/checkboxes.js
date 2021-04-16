let good = false, cheap = false, fast = false;

document.getElementById('good').onclick = function() {
  if (!document.getElementById('good')["checked"]) {
  good = false;
  } else {
    good = true;
    if (fast && cheap) {
      fast = false;
    document.getElementById('fast').checked = false;
    }
  }
}

document.getElementById('cheap').onclick = function() {
  if (!document.getElementById('cheap')["checked"]) {
    cheap = false;
  } else {
    cheap = true;
    if (fast && good) {
      good = false;
      document.getElementById('good').checked = false;
    }
  }
}

document.getElementById('fast').onclick = function() {
    if (!document.getElementById('fast')["checked"]) {
      fast = false;
    } else {
      fast = true;
      if (cheap && good) {
        cheap = false;
        document.getElementById('cheap').checked = false;
      }
    }
}