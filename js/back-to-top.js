export function createBackToTop() {
  const backToTop = document.createElement("a");
  backToTop.setAttribute("href", "#heroe-section");
  backToTop.innerHTML = "<div></div>";
  backToTop.classList.add("back-to-top");

  backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .getElementById("navbar")
      .scrollIntoView({ behavior: "smooth" });
  });

  return backToTop;
}
