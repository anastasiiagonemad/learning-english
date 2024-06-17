import pic1 from '../assets/images/learn1.jpg';
import pic2 from '../assets/images/learn2.jpg';
import pic3 from '../assets/images/learn3.jpg';
import '../styles/home.css';

function Home() {
  return (
    <div className="home">
      <div className="home__title">
        <h2>Welcome to the Learn English Easily learning platform.</h2>
        <img src={pic1} alt="pic1" />
      </div>
      <div className="home__second-p">
        <p>
          We created this application to help your children learn English in a
          playful and interesting way.
        </p>
        <img src={pic3} alt="pic3" />
      </div>
      <div className="home__third-p">
        <img src={pic2} alt="pic2" />
        <p>
          Here you can find different levels of training, which will lead your
          child to results in a short time.
        </p>
      </div>
      <div className="home__last-p">
        <p>Enjoy learning with LEARN ENGLIAH EASILY!</p>
      </div>
    </div>
  );
}

export { Home };
