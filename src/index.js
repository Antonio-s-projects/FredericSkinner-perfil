import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import Hero from './components/Hero.js';
import Notices from './components/Notices.js';
import './styles/styles.css';

(
  async function app () {
    const header = document.getElementById('header');
    const hero = document.getElementById('info');
    const notices = document.getElementById('notices');
    const sideBar = document.getElementById('sidebar');
    header.innerHTML = await Header();
    hero.innerHTML = await Hero();
    notices.innerHTML = await Notices();
    sideBar.innerHTML = await Sidebar();
  }
)();