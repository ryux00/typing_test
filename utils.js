document.addEventListener("DOMContentLoaded", function(event) {
  const test_area = document.getElementsByClassName("test_area")[0];
  const error_div = document.getElementById("errors");
  const wpm_div = document.getElementById("wpm");
  // state (I miss reactJS)
  
  var test_no = 0;
  error_div.innerHTML = "Errors:0";
  wpm_div.innerHTML = "WPM:0";
  const test = ["The quick brown fox jumps over the lazy dog","The next sentence","This is cool but what's the end game here?"];
  for (let i in test[tests_no].split("")) {
    var span = document.createElement("span");
    span.id = `word_${i}`;
    span.innerHTML = `<span>${test[0][i]}</span>`;
    test_area.appendChild(span);
  }
  var user_input = [];
  errors = 0;
  var startTime, currentTime;

  document.onkeypress = function(e) {
    e = e || window.event;
    let key = String.fromCharCode(e.keyCode);
    console.log(key);
    if (user_input.length === 0) {
      startTime = new Date();
    }
    if (key === test[0][user_input.length]) {
      currentTime = new Date();
      let diff = Math.round((currentTime - startTime) / 1000);
      let wpm = Math.round((user_input.length / diff) * 5);
      console.log(diff);
      if (isFinite(wpm)) {
        wpm_div.innerHTML = `WPM: ${wpm}`;
      }
      document
        .getElementById(`word_${user_input.length}`)
        .classList.add("correct");
      user_input.push(key);
    } else {
      errors += 1;
      error_div.innerHTML = `Errors: ${errors}`;
      document
        .getElementById(`word_${user_input.length}`)
        .classList.add("wrong");
    }
  };

  // const test_input = document.getElementById("test_input");
  // test_input.innerHTML = test[0];
});