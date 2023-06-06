
const createMenuPage = () => {
  const menuItems = [
    {
      title: "Salsiccia",
      text: "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"
    },
    {
      title: "Gamberi",
      text: "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil"
    },
    {
      title: "Pepe",
      text: "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil"
    },
    {
      title: "Disgustoso",
      text: "Tomato sauce, Bacon, Pineapple, Olives, Basil"
    },
    {
      title: "Colorato",
      text: "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil"
    },
    {
      title: "Pomodoro",
      text: "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli"
    },
    {
      title: "Crema",
      text: "White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil"
    },
    {
      title: "Carne",
      text: "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, " +
            "Pepper, Chilli"
    }
  ]
  
  const content = document.querySelector("#content");
  const mainContent = document.createElement("main");
  mainContent.setAttribute("id", "main");
  mainContent.classList.add("main");
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu");

  menuItems.forEach(item => {
    let menu_item = document.createElement("div");
    menu_item.classList.add("menu-item");

    let headline = document.createElement("h2");
    headline.textContent = item.title;

    let subtext = document.createElement("p");
    subtext.textContent = item.text;
  
    menu_item.appendChild(headline);
    menu_item.appendChild(subtext);

    menuContainer.appendChild(menu_item);
  });

  mainContent.appendChild(menuContainer);
  content.appendChild(mainContent);
}

export default createMenuPage;