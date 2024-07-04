import pic4 from '../../assets/images/pic4.jpg';
import './home.css';

function Home() {
  return (
    <div className="home">
      <div className="home-main">
        <h2>WELCOME</h2>

        <img src={pic4} alt="friends" />
      </div>
      <div className="home-auth">
        <p className="home-auth-text">Чтобы отслеживать свой прогресс</p>
        <div className="home-auth-buttons">
          <button className="signin-btn">Войти</button>
          <button className="auth-btn">Зарегистрироваться</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
