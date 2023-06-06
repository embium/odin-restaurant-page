const createFooter = () => {
  const content = document.querySelector("#content");
  const footer = document.createElement("footer")
  footer.classList.add("footer");

  const github = document.createElement("a");
  github.setAttribute("href", "https://github.com/embium");

  const github_logo = document.createElement("i");
  github_logo.classList.add("fab");
  github_logo.classList.add("fa-github");

  github.appendChild(github_logo);

  const footer_text = document.createElement("p");
  footer_text.textContent = "Copyright © 2021 Embium";

  footer.appendChild(github);
  footer.appendChild(footer_text);
  content.appendChild(footer);
}

export default createFooter;