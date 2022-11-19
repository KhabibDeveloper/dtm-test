var ball = prompt("To`plagan balingiz ni kiriting ");
// var mablag = prompt("qancha mablagingiz bor");
if (ball < 80) {
  console.log("afsuski siz o`qishga kirolmadingiz");
} else if (ball < 100 && 80 <= ball) {
  console.log(
    "siz super kotraskt sosida o`qishga tavsiya qilindingz kontrakt miqdori yiliga 3000$"
  );
} else if (ball < 150 && ball >= 100) {
  console.log(
    "siz kotraskt sosida o`qishga tavsiya qilindingz kontrakt miqdori yiliga 2000$"
  );
} else if (ball < 180 && ball >= 150) {
  console.log("siz grant asosida o`qishga qabul qilindingiz.");
}

// var mablag = prompt(" Mablagingizni kiriting");
// if (mablag < 3000) {
//   console.log(" sir kirolmadingiz");
// } else {
//   console.log("siz super kontart asosida kirdingiz");
// }
// if (mablag < 2000) {
//   console.log(" sir kirolmadingiz");
// } else {
//   console.log("siz kontart asosida kirdingiz");
// }
