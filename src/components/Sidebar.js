import iconMenu from '../static/images/icon-menu.png'

const Sidebar = () => {
  const view = `
    <section class ="sidebar__menu">
      <img src="${iconMenu}" alt="icon-menu"/>
    </section>
    <section class ="sidebar__date">
      <div class ="sidebar__container">
        <div class="line"></div>
        <div class="line"></div>
        <div class="sidebar__date--main">
          <p>1986</p>
          <div class="line-main"></div>
        </div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </section>
  `;

  return view
}

export default Sidebar;