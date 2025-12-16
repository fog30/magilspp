const names = [
  "James","Margaret","Muriel","Fergal",
  "Jess","Hilda","Giles","Shannon","Anna",
  "Treza","Alister","Contrad"
];

const wheel = document.getElementById("wheel");
const result = document.getElementById("result");

let i = 0;

// 🔄 spinning animation (shows all names moving)
const spin = setInterval(() => {
  wheel.innerText = names[i % names.length];
  i++;
}, 120);

// ⏹️ stop spinning and FORCE result
setTimeout(() => {
  clearInterval(spin);

  // 🎯 FORCED RESULT
  wheel.innerText = "Alister";
  result.innerText = "🎁 You got: ALISTER";

}, 3000);
