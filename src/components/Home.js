// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your CSS file
import image1 from '../images/Tajmahal.jpg';
import image2 from '../images/goa.jpg';
import image3 from '../images/dubai.jpg';
import image4 from '../images/kerala.jpg';
import image5 from '../images/Thailand.jpeg';
import image6 from '../images/Bali.jpg';
import image7 from '../images/Vietnam.jpg';
import image8 from '../images/Maldives.jpg'; // Import images

function Home() {

  const cardLinkStyle = {
    textDecoration: 'none', // Remove underline
    color: 'inherit', // Inherit text color from parent
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to Tour & Travel</h1>
        <p>Your adventure begins here.</p>
      </header>

      <div className="image-gallery">
        <div className="image-card">
        <Link to="/tajmahal-slideshow"  style={cardLinkStyle}> {/* Link to Taj Mahal Slideshow */}
          <img src={image1} alt="Destination 1" />
          <h2>TajMahal</h2>
          <p>The Taj Mahal, an architectural masterpiece, is India's iconic symbol of love and devotion. This ivory-white marble mausoleum, built in the 17th century, stands as a testament to eternal love.</p>
        </Link>        
        </div>



        <div className="image-card">
        <Link to="/tajmahal-slideshow" style={cardLinkStyle}>
          <img src={image2} alt="Destination 1" />
          <h2>GOA</h2>
          <p>Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda..</p>
          </Link> 
        </div>

        <div className="image-card">
        <Link to="/tajmahal-slideshow" style={cardLinkStyle}>
          <img src={image3} alt="Destination 1" />
          <h2> DUBAI</h2>
          <p>Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks.</p>
          </Link> 
        </div>

        <div className="image-card">
        <Link to="/tajmahal-slideshow" style={cardLinkStyle}>
          <img src={image4} alt="Destination 1" />
          <h2>KERALA</h2>
          <p>Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline. It's known for its palm-lined beaches and backwaters, a network of canals. Inland are the Western Ghats, mountains whose slopes support tea, coffee and spice plantations as well as wildlife. National parks like Eravikulam and Periyar, plus Wayanad and other sanctuaries, are home to elephants, langur monkeys and tigers.</p>
          </Link> 
        </div>

        <div className="image-card">
        <Link to="/tajmahal-slideshow" style={cardLinkStyle}>
          <img src={image5} alt="Destination 1" />
          <h2>THAILAND</h2>
          <p>Thailand is a Southeast Asian country. It's known for tropical beaches, opulent royal palaces, ancient ruins and ornate temples displaying figures of Buddha. In Bangkok, the capital, an ultramodern cityscape rises next to quiet canalside communities and the iconic temples of Wat Arun, Wat Pho and the Emerald Buddha Temple (Wat Phra Kaew). Nearby beach resorts include bustling Pattaya and fashionable Hua Hin.</p>
          </Link> 
        </div>

        <div className="image-card">
        <Link to="/tajmahal-slideshow" style={cardLinkStyle}>
          <img src={image6} alt="Destination 1" />
          <h2>BALI</h2>
          <p>Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the province includes the island of Bali and a few smaller offshore islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan to the southeast.</p>
          </Link> 
        </div>

        <div className="image-card">
        <Link to="/tajmahal-slideshow" style={cardLinkStyle}>
          <img src={image7} alt="Destination 1" />
          <h2>VIETNAM</h2>
          <p>Vietnam is a Southeast Asian country known for its beaches, rivers, Buddhist pagodas and bustling cities. Hanoi, the capital, pays homage to the nation’s iconic Communist-era leader, Ho Chi Minh, via a huge marble mausoleum. Ho Chi Minh City (formerly Saigon) has French colonial landmarks, plus Vietnamese War history museums and the Củ Chi tunnels, used by Viet Cong soldiers..</p>
          </Link> 
        </div>

        <div className="image-card">
        <Link to="/maldives-slideshow" style={cardLinkStyle}>
          <img src={image8} alt="Destination 1" />
          <h2>MALDIVES</h2>
          <p>The Maldives, officially the Republic of Maldives, is an archipelagic state and country in South Asia, situated in the Indian Ocean. It lies southwest of Sri Lanka and India, about 750 kilometres from the Asian continent's mainland..</p>
          </Link> 
        </div>


        {/* Add more image cards here */}
      </div>
      
    </div>
  );
}

export default Home;
