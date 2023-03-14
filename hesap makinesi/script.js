const result = document.getElementById("result");

function appendValue(value) {
  result.value += value;
}

function clearValue() {
  result.value = "";
}

function calculateValue() {
  try {
    result.value = eval(result.value);
  } catch (e) {
    result.value = "Error";
  }
}
