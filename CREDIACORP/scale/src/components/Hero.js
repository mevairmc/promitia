//sstyles
import './styles/hero.css'
import Video from '../media/video.webm'

function Hero() {
  return (
    <main>
      <div className="hero__container">
        <h1 className="hero__title">
          <span className="hero__title--gradient1">Better<br/>
          Software.</span><br/>
          <span>Better Company.</span>
        </h1>
        <p className="hero__description">
            El mejor software te permite crecer rápidamente.<br/>
            Ya sea llevando más valor a tus clientes o<br/>
            mejorando tu desempeño de forma explosiva.
        </p>
        <div className="hero__buttons">
          <input type="text" className="hero__buttons--email" placeholder="Enter your work email"/>
          <button className="hero__buttons--touch">
              <span>Get in touch</span>
          </button>
        </div>
      </div>
      <video src={Video} type="video/mp4" width="560" height="480"  autoplay="true" loop> </video>
    </main>
  );
}

export default Hero;