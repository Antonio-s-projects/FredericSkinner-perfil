import iconMenu from '../static/images/icon-menu.png'

const Sidebar = () => {
  const view = `
    <section class ="sidebar__menu">
      <img src="${iconMenu}" alt="icon-menu"/>
    </section>
    <section class ="sidebar__date">
      <p>1986</p>
    </section>
  `;

  return view
}

export default Sidebar;