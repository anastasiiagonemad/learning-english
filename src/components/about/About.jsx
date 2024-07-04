import '../about/about.css';
import pic1 from '../../assets/images/pic1.jpg';
import pic2 from '../../assets/images/pic2.jpg';
import pic3 from '../../assets/images/pic3.jpg';

function About() {
  return (
    <div className="about">
      <div className="about__title">
        <h2>Welcome to the Learn English Easily learning platform.</h2>
        <img src={pic1} alt="pic1" />
      </div>
      <div className="about__second-p">
        <p>
          We created this application to help your children learn English in a
          playful and interesting way.
        </p>
        <img src={pic3} alt="pic3" />
      </div>
      <div className="about__third-p">
        <img src={pic2} alt="pic2" />
        <p>
          Here you can find different levels of training, which will lead your
          child to results in a short time.
        </p>
      </div>
      <div className="about__last-p">
        <p>Enjoy learning with LEARN ENGLISH EASILY!</p>
      </div>
    </div>
  );
}

export default About;
