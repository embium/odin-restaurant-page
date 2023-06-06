import createHeader from './header';
import createHomePage from './home';
import createFooter from './footer';

const initialLoad = () => {
  createHeader();
  createHomePage();
  createFooter();
}

export default initialLoad;