import './LGame.css';
import './LGame_script'
import mastertech from './assets/mastertech.jpg'



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
                      <button className="main-button">О студии</button>
                      <div className="log-reg">
                          <button type="button" className="log-reg-btn">Регистрация</button>
                          <button type="button" className="log-reg-dnld">Скачать лаунчер</button>
                      </div>
                  </div>
                  <div className="main-text">
                      <p className="text">Автор этого сайта накурился и забыл, как ставить текст в определённую точку</p>
                      <div className="mt">
                          <img
                              src={mastertech}
                              style={{
                                  zIndex: 1,
                                  position: "absolute",
                                  top: 225,
                                  left: 'calc(120vh)',
                                  justifyContent: "center",
                                  width: 600,
                                  height: 400,
                                  borderRadius: 20}}
                          />
                      </div>
                      <p className="text2">ооо нихуя се МТ, пойду поиграю --></p>
                  </div>
              </div>
          </div>
      </div>
      </body>
  );
}

export default LGame;
