export function createHeroeSection() {
  const heroeText = document.createElement("div");
  heroeText.classList.add("container");

  const heroeTitle = document.createElement("h1");
  heroeTitle.textContent = "Kristyna Zemlova";

  const heroeSubTitle = document.createElement("h3");
  heroeSubTitle.textContent = "UX/UI Designer & Web Developer";

  const heroeCatchPhrase = document.createElement("h4");
  heroeCatchPhrase.innerHTML =
    "Translating <strong>your vision</strong> into reality, <strong>one pixel at a time</strong>.";

  const exploreBtn = document.createElement("button");
  exploreBtn.classList.add("cta-btn");
  exploreBtn.innerHTML = "Explore my work";

  exploreBtn.addEventListener("click", () => {
    document.getElementById("projects-section").scrollIntoView({ behavior: "smooth" });
  });

  heroeText.appendChild(heroeTitle);
  heroeText.appendChild(heroeSubTitle);
  heroeText.appendChild(heroeCatchPhrase);
  heroeText.appendChild(exploreBtn);

  return heroeText;
}
