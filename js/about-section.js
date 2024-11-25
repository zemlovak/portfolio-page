export function createAboutSection() {
  const aboutContent = document.createElement("div");
  aboutContent.classList.add("container");

  const aboutTitle = document.createElement("h4");
  aboutTitle.textContent = "About";

  const headShot = document.createElement("img");
  headShot.setAttribute("src", "../../assets/images/headshot.png");
  headShot.classList.add("headshot");

  const aboutTextContainer = document.createElement("div");
  aboutTextContainer.classList.add("about-text-container");

  const aboutText = document.createElement("div");
  aboutText.innerHTML =
    "<p><span>Hi there!</span><br>I am Kristyna Zemlova, a UX/UI designer and web developer, specializing in front-end development and design. My journey into tech is rooted in a strong technical foundationl. I graduated as a Chemical Engineer, and my studies shaped me in unique ways - I have a thing for precision. An engineering mindset, a logical and effective approach, and a drive for innovation are at the core of my work.</p>";
  aboutText.classList.add("about-text");

  const skillsAndTechStack = document.createElement("div");
  skillsAndTechStack.classList.add("skills-and-techstack");
  skillsAndTechStack.innerHTML =
    "<p><span>Skills and Tech Stack</span><ul><li>HTML, CSS/SASS</li><li>VaninllaJS/ES6+</li><li>React.js, JSx, Typescript</li><li>Figma</li><li>Git, Bitbucket</li><li>Agile (Jira, Confluence)</li><li>Python 3.6+</li><li>MS PowerApps (low-code)</li><li>AI tools (ChatGPT, DALL·E) ...</li></ul></p>";

  const getToKnowBtn = document.createElement("button");
  getToKnowBtn.classList.add("cta-btn");
  getToKnowBtn.innerHTML = "Get to know me better";

  getToKnowBtn.addEventListener("click", (e) => {
    const cvUrl = "../assets/cv_kristyna-zemlova.pdf"; // Replace with the actual URL or file path
    window.open(cvUrl, "_blank");
  });

  aboutTextContainer.appendChild(aboutText);
  aboutTextContainer.appendChild(skillsAndTechStack);

  aboutContent.appendChild(aboutTitle);
  aboutContent.appendChild(headShot);
  aboutContent.appendChild(aboutTextContainer);
  
  aboutContent.appendChild(getToKnowBtn)
  return aboutContent;
}
