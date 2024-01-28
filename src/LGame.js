import './LGame.css';
import mastertech from './assets/mastertech.jpg'
import background from './assets/background.mp4'
import LGameIcon from './assets/lgame_icon.png'




function LGame() {
  return (
      <body>
      <div className="main-page">
          <video src={background} autoPlay loop muted
          style={{
              position: "absolute",
              width: "calc(100%)",
              height: "calc(100vh)",
              objectFit: "cover",
              zIndex: -9999,
          }}>
          </video>
          <div className="top-buttons"
               style={{
                   display: "flex",
                   width: 'calc(100%)',
                   height: 'calc(10vh)',
                   justifyContent: "space-around",
                   alignItems: "center"
               }}>
              <img src={LGameIcon}
                   onClick={(e) =>{
                       e.preventDefault();

                       window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley')
                   }}
              style={{
                  width: 80,
                  height: 60,
                  cursor: "pointer"
              }}/>
              <button className="main-button">На главную</button>
              <button className="main-button">Сборки</button>
              <button className="main-button">Команда</button>
              <button className="main-button">О студии</button>
              <div className="log-reg"
                   style={{
                       display: "flex",
                       alignItems: "center",
                       height: "calc(10vh)",
                       width: "calc(25%)",
                       justifyContent: "space-evenly",
                   }}>
                  <button type="button" className="log-reg-btn"
                          style={{
                              color: "#f5f5dc",
                              width: 155,
                              height: 55,
                              border: "1px solid wheat",
                              backgroundColor: "transparent",
                              borderRadius: "25px 25px 25px 5px",
                              fontSize: "20px",
                              cursor: "pointer"
                          }}>
                      Регистрация
                  </button>
                  <button type="button" className="log-reg-dnld"
                          onClick={(e) => {
                              window.open('https://nnp.nnchan.ru/lgame/starter/LGame.exe')
                          }}
                          style={{
                              color: "#f5f5dc",
                              border: "1px solid wheat",
                              width: 200,
                              height: 55,
                              backgroundColor: "transparent",
                              borderRadius: "25px 25px 0 25px",
                              fontSize: 20,
                              cursor: "pointer",
                          }}>
                      Скачать лаунчер
                  </button>
              </div>
          </div>
          <div className="main-text"
          style={{
              textAlign: "center"
          }}>
          <p
          style={{
              position: "absolute",
              width: 300,
              top: 250,
              left: 170,
              color: "wheat",
              fontSize: 40,

          }}>LGame Studio
              дада</p>
          </div>
          <div className="mastertech">
              <img src={mastertech}
              style={{
                  position: "absolute",
                  width:600,
                  height:400,
                  borderRadius: 40,
                  zIndex: -1,
                  top: "calc(25vh)",
                  left: "calc(120vh)"

              }}/>
          </div>
      </div>
      </body>
  );
}

export default LGame;
