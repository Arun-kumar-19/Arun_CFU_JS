/*get the number of characters*/
function charLength() {
  // range number
  let charLength = document.getElementById("length").value;
  document.getElementById("result").innerHTML = charLength;

  // checkbox for all
  const upper = document.getElementById("uppercase");
  const lower = document.getElementById("lowercase");
  const numbers = document.getElementById("numbers");
  const symbols = document.getElementById("symbols");

  // regex for all
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numcase = "0123456789";
  const symcase = "!@#$%^&*()-+=_|]}[{;:.>,</?`~";

  // length for regex
  const upperLength = uppercase.length;
  const lowerLength = lowercase.length;
  const numLength = numcase.length;
  const symLength = symcase.length;

  // final output variable
  let password = "";

  // loop for random password
  for (let i = 0; i < charLength; i++) {
    if (upper.checked) {
      password += uppercase.charAt(Math.floor(Math.random() * upperLength));
    }
    if (lower.checked) {
      password += lowercase.charAt(Math.floor(Math.random() * lowerLength));
    }
    if (numbers.checked) {
      password += numcase.charAt(Math.floor(Math.random() * numLength));
    }
    if (symbols.checked) {
      password += symcase.charAt(Math.floor(Math.random() * symLength));
    }
  }

  console.log(password);

  // for not to reapeat
  password = password.slice(0, charLength);

  // for final final result
  document.getElementById("password__result").value = password;

  // return charLength;
}

document.getElementById("length").addEventListener("change", charLength);

document.getElementById("btn").addEventListener("click", charLength);

// My understandings
// let range = document.getElementById("length").value;
// console.log(range);
// let upper = document.getElementById("uppercase").checked;

// // function for checkbox

// let result = document.getElementById("password__result");
// let p = document.getElementById("copied");
// const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// function random_alpha(num) {
//   let random = "";
//   const length = alpha.length;

//   for (let i = 0; i < num; i++) {
//     random += alpha.charAt(Math.floor(Math.random() * length));
//   }
//   return random;
// }
// console.log(random_alpha(23));

// let generate = document.getElementById("btn");
// generate.addEventListener("click", () => {
//   if (check(upper) === true) {
//     console.log("true");
//   }

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
