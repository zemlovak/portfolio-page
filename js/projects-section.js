export function createProjectSection() {
  const projectsContent = document.createElement("div");
  projectsContent.classList.add("container");

  const projectsTitle = document.createElement("h4");
  projectsTitle.textContent = "Projects";

  const projectsTileContainer = document.createElement("div");
  projectsTileContainer.classList.add("projects-tile-container");
  const projectsLinks = [
    "https://github.com/zemlovak/ONL_FER_W_859_JavaScript",
    "https://github.com/zemlovak/ONL_FER_W_859_Sass_RWD/tree/main/10_Day_5_Workshop_MySolution",
    "https://github.com/zemlovak/ONL_FER_W_859_Advanced_HTML_and_CSS/tree/main/10_Day_5_Workshop_MySolution",
    "https://github.com/zemlovak/html-portfolio",
    "https://github.com/zemlovak/bc._script",
    "https://github.com/zemlovak/Cplusplus_hello",
  ];

  projectsLinks.forEach((link) => {
    const projectTile = document.createElement("a");
    projectTile.innerHTML = "<div class='project-tile'></div>"; // Corrected HTML
    projectTile.setAttribute("href", link); // Fixed `setAttribute` syntax
    projectTile.setAttribute("target", "_blank"); // Optional: Opens the link in a new tab
    projectsTileContainer.appendChild(projectTile);
  });

  const techStackIcons = [
    "figma-icon.svg",
    "html-icon.svg",
    "sass-original.svg",
    "bootstrap-original.svg",
    "js-icon.svg",
    "react-icon.svg",
  ];

  const iconsContainer = document.createElement("div");
  iconsContainer.classList.add("icons-container");

  techStackIcons.forEach((icon) => {
    const techStackIcon = document.createElement("img");
    techStackIcon.setAttribute("src", `../assets/icons/${icon}`);
    techStackIcon.setAttribute("alt", `${icon.split(".svg")}`);
    techStackIcon.classList.add("icon");
    iconsContainer.appendChild(techStackIcon);
  });

  projectsContent.appendChild(projectsTitle);
  projectsContent.appendChild(projectsTileContainer);
  projectsContent.appendChild(iconsContainer);

  return projectsContent;
}
