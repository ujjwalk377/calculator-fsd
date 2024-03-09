let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      let temp = Math.random();
      console.log(temp);
      if (temp <= 0.1) {
        var chance = 0;
        if (chance == 0) {
          chance = chance + 1;
          string = string.replace("+", "-");
        }
        if (chance == 0) {
          chance = chance + 1;
          string = string.replace("-", "*");
        }
        if (chance == 0) {
          chance = chance + 1;
          string = string.replace("/", "**");
        }
        if (chance == 0) {
          chance = chance + 1;
          string = string.replace("*", "+");
        }
      }
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector("input").value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
