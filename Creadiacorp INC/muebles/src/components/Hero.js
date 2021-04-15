//Import Images
import MainImg from '../images/mainImg.webp';
import Main from "../pages/main";

function Hero() {
  return (
    <main>
      <img src={ MainImg } alt="yard" />
      <div>
        <h2>Live your best al fresco life this summer</h2>
        <p>Find affordable outdoor furniture for big decks, small patios and everything in between.</p>
        <p>Table and two chairs<b>$49.99</b></p>
        <button>SHop outdoor furniture</button>
      </div>
    </main>
  )
}

export default Hero;