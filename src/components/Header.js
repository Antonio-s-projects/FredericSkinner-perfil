import Logo from '../static/images/FS.png';
import iconSearch from '../static/images/icon-search.png';

const Header = () => {
  const view = `
    <figure class="header__logo">
      <img src="${Logo}" alt="logo"/>
    </figure>
    <nav class="header__nav">
      <ul class="header__nav--list">
        <li><a href="/#">Biografia</a></li>
        <li><a href="/#">Libros</a></li>
        <li><a href="/#">Premios</a></li>
        <li><a href="/#">Investigaciones</a></li>
      </ul>
      <figure>
      <img src="${iconSearch}" alt="icon search"/>
      </figure>
    </nav>
  `;

  return view;
}

export default Header;