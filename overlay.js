document.addEventListener("DOMContentLoaded", () => {
  const navigation = document.querySelector(".sidebar");
  const menu = document.querySelector("header .bx-menu");
  document.addEventListener("click", (e) => {
    const isChild = e.target.closest(".sidebar");
    if (
      !isChild &&
      e.target !== navigation &&
      e.target !== menu &&
      window.outerWidth <= 1300
    )
      navigation.classList.add("sidebar--inactive");
  });
});
