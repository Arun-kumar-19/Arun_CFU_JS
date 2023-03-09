/*get the number of characters*/
function charLength() {
  let charLength = document.getElementById("length").value;
  document.getElementById("result").innerHTML = charLength;
  return charLength;
}

document.getElementById("length").addEventListener("change", charLength);

// My understandings
let range = document.getElementById("length").value;
console.log(range);
let upper = document.getElementById("uppercase").cheked;

// function for checkbox

let result = document.getElementById("password__result");
let p = document.getElementById("copied");
const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function random_alpha(num) {
  let random = "";
  const length = alpha.length;

  for (let i = 0; i < num; i++) {
    random += alpha.charAt(Math.floor(Math.random() * length));
  }
  return random;
}
console.log(random_alpha(23));

let generate = document.getElementById("btn");
generate.addEventListener("click", () => {
  if (check(upper) === true) {
    console.log("true");
  }
});

// function generate() {
//   const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   let length = document.getElementById("length").value;
//   let password = "";
//   for (let i = 0; i < length; i++) {
//     if (document.getElementById("uppercase")) {
//       password += alpha.charAt(Math.floor(Math.random() * alpha.length));
//     }
//     password = password.slice(0, length);
//     document.getElementById("password_result").value = password;
//   }
// }
// document.getElementById("length").addEventListener("input", generate);
// document.getElementById("btn").addEventListener("click", generate);
