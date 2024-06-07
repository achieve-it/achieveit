const gostpayter = document.querySelector(".gostpayter");
const members = document.getElementById("members");
if (!gostpayter) {
  alert("BAKIT MO TINANGAL PAR?");
  members.querySelector("ul").insertAdjacentHTML(
    "beforeend",
    `<div class="gostpayter">
  <li>MASTER JERIMAYA</li>
  <li>TAGUUUUROOOOO</li>
  <li>EUGEEEENE</li>
  <li>ALFREEEEED</li>
  <li>BINSEEEENT</li>
  <li>BAYOOOOOOOO.....T</li>
</div>`
  );
}
