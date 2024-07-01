import pic4 from '../assets/images/pic4.jpg';
import '../styles/home.css';

function Home() {
  return (
    <div className="home">
      <div className="home-main">
        <h2>WELCOME</h2>
        <img src={pic4} alt="friends" />
      </div>
    </div>
  );
}

export default Home;
