import Location from './location.png';

const createContactPage = () => {
  const content = document.querySelector("#content");
  const mainContent = document.createElement("main");
  mainContent.setAttribute("id", "main");
  mainContent.classList.add("main");

  const telephone = document.createElement("p");
  telephone.textContent = "📞 123 456 789";

  const address = document.createElement("p");
  address.textContent = "🏠 Hollywood Boulevard 42, Los Angeles, USA";

  const location = new Image();
  location.src = Location;

  mainContent.appendChild(telephone);
  mainContent.appendChild(address);
  mainContent.appendChild(location);
  content.appendChild(mainContent);
}

export default createContactPage;