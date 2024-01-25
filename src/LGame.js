import './LGame.css';
import './LGame_script'



function LGame() {
  return (
      <body>
      <div className="main-page">
          <div className="background">
              <div className="top-row">
                  <div className="top-buttons">
                      <button className="main-button">На главную</button>
                      <button className="main-button">Сборки</button>
                      <button className="main-button">Команда</button>
                      <button className="main-button">О нас</button>
                      <div className="log-reg">
                          <button type="button" className="log-reg-btn">Регистрация</button>
                          <button type="button" className="log-reg-dnld">Скачать лаунчер</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </body>
  );
}

export default LGame;
