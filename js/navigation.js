export function createNavigation() {
  const navigation = document.createElement("ul");
  navigation.classList.add("navigation");

  const links = [
    { text: "Home", href: "#" },
    { text: "Projects", href: "#projects-section" },
    { text: "About", href: "#about-section" },
    { text: "Contact", href: "#contact-section" },
  ];

  links.forEach((link) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${link.href}">${link.text}</a>`;
    navigation.appendChild(li);
  });

  // the smooth scrolling
  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const sectionId = e.target.getAttribute("href").substring(1);
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    });
  });

  return navigation;
}
