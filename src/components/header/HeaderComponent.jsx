import "./../../assets/css/HeaderComponent.css";
import headerImage from './../../assets/images/pexels-jean-van-der-meulen-1454806(1).jpg';

function HeaderComponent() {
  return (
    <header className="header-container">
      <img src={headerImage} alt="BedRoom main Image" className="header-image" />
      <div className="cover-header-image"></div>

      <div className="header-inner-container">
        <nav className="header-nav-container">
          <ul className="header-nav-list">
            <li className="header-nav-list-item">
              <a href="" className="header-nav-list-item-link">
                Element
              </a>
            </li>
            <li className="header-nav-list-item">
              <a href="" className="header-nav-list-item-link">
                Element
              </a>
            </li>
            <li className="header-nav-list-item">
              <a href="" className="header-nav-list-item-link">
                Element
              </a>
            </li>
            <li className="header-nav-list-item">
              <a href="" className="header-nav-list-item-link">
                Element
              </a>
            </li>
          </ul>
        </nav>
        <div className="header-container--main-text">
          <h1 className="header-main-title">
            Residencial <span className="bold-color">Videl</span>
          </h1>
        </div>
        <div className="info-details-hotel">
          <div className="info-detail-hotel-item">
            <h3 className="info-detail-hotel-item--title">12</h3>
            <span className="info-detail-hotel-item--desc">Quartos</span>
          </div>
          <div className="info-detail-hotel-item">
            <h3 className="info-detail-hotel-item--title">24/24</h3>
            <span className="info-detail-hotel-item--desc">Horário</span>
          </div>
          <div className="info-detail-hotel-item">
            <h3 className="info-detail-hotel-item--title">Sim</h3>
            <span className="info-detail-hotel-item--desc">Parque</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
