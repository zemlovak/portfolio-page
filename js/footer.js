export function createFooter() {
  const footerContent = document.createElement("div");
  footerContent.classList.add("container");

  const credits = document.createElement("div");
  credits.innerHTML = "&copy; 2024 Kristyna Zemlova";
  credits.classList.add("credits");
  footerContent.appendChild(credits);

  const socials = document.createElement("div");

  socials.innerHTML =
    "<a href='https://linkedin.com/in/krzem' target='blank' aria-label='Visit my LinkedIn profile'><img src='../assets/icons/linkedin-icon.svg' alt='LinkedIn icon'/></a><a href='#contact-section' aria-label='Contact me via email'><img src='../assets/icons/send-email-icon.svg' alt='Send Email icon'/></a><a href='https://github.com/zemlovak?tab=repositories' target='blank' aria-label='View my work on GitHub'><img src='../assets/icons/github-icon.svg' alt='Github icon'/></a>";
  socials.classList.add("socials");
  footerContent.appendChild(socials);

  return footerContent;
}
