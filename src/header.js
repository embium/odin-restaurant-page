import createFooter from "./footer";
import createMenuPage from "./menu";
import createHomePage from "./home";
import createContactPage from "./contact";

const createHeader = () => {
  const content = document.querySelector("#content");
  const menuContent = document.createElement("header");

  const headline = document.createElement("h1");
  headline.classList.add("logo");
  headline.textContent = "Italiano";
  menuContent.appendChild(headline);

  const navigation = document.createElement("nav");

  const home = document.createElement("button");
  home.classList.add("button-nav");
  home.textContent = "Home";

  home.classList.add("active");

  const menu = document.createElement("button");
  menu.classList.add("button-nav");
  menu.textContent = "Menu";

  const contact = document.createElement("button");
  contact.classList.add("button-nav");
  contact.textContent = "Contact";

  navigation.appendChild(home);
  navigation.appendChild(menu);
  navigation.appendChild(contact);

  menuContent.appendChild(navigation);
  content.appendChild(menuContent);

  home.addEventListener("click", () => {
    clearContent();
    home.classList.add("active");
    createHomePage();
    createFooter();
  });

  menu.addEventListener("click", () => {
    clearContent();
    menu.classList.add("active");
    createMenuPage();
    createFooter();
  });

  contact.addEventListener("click", () => {
    clearContent();
    contact.classList.add("active");
    createContactPage();
    createFooter();
  });

}

const clearContent = () => {
  const content = document.querySelector("#content");
  const mainContent = document.querySelector("#main");
  const footerContent = document.querySelector("footer");
  const menuItems = document.querySelectorAll("nav button");
  menuItems.forEach(item => {
    item.classList.remove('active');
  });
  content.removeChild(mainContent);
  content.removeChild(footerContent)
}

export default createHeader;