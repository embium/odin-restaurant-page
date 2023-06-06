import Chef from './chef.jpg';

const createHomePage = () => {
  const content = document.querySelector("#content");

  const mainContent = document.createElement("main");
  mainContent.setAttribute("id", "main");
  mainContent.classList.add("main");

  const homeContent = document.createElement("div");
  homeContent.classList.add("home");

  const content1 = document.createElement("p");
  content1.textContent = "Best pizza in your country";

  const content2 = document.createElement("p");
  content2.textContent = "Made with passion since 1908";

  const img = new Image();
  img.src = Chef;

  const content3 = document.createElement("p");
  content3.textContent = "Order online or visit us!";

  homeContent.appendChild(content1);
  homeContent.appendChild(content2);
  homeContent.appendChild(img);
  homeContent.appendChild(content3);

  mainContent.appendChild(homeContent);
  content.appendChild(mainContent);
}

export default createHomePage;