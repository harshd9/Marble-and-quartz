// Places.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Places.css';
import place1 from '../images/goa.jpg';
import place2 from '../images/dubai.jpg';
import place3 from '../images/kerala.jpg';
import place4 from '../images/Tajmahal.jpg';
import place5 from '../images/Thailand.jpeg';
import place6 from '../images/Vietnam.jpg';
import place7 from '../images/Bali.jpg';

function Places() {
  const places = [
    {
      id: 1,
      image: place1,
      name: 'Goa',
      description: "Goa, India's beachfront paradise, is renowned for its pristine sandy shores, vibrant nightlife, and rich cultural heritage. Explore the sun-kissed beaches, indulge in water sports, and savor fresh seafood at beach shacks.",
      nearbyPlaces: ['1.Gokarna', '2.Tarkarli','3.Jog Falls','4.Dandeli'],
      hotels: [
        { name: 'Deltin Suites', distance: 2, rate: ' ₹5518 per night', link: 'https://www.deltin.com/deltin-suites-hotel/' },
        { name: 'Hilton Goa Resort', distance: 5, rate: '₹9500 per night', link: 'https://www.hilton.com/en/hotels/goishhi-hilton-goa-resort/?WT.mc_id=zLADA0IN1HI2PSH3GGL4INTBPP5dkt6GOISHHI7en_&epid!_&ebuy!&&&gclid=CjwKCAjwmbqoBhAgEiwACIjzEEQmXkoNpGjDgCgaVEqOzqVPaUsjG0Iy3Bhz3tb1ZxFoMtGRHlSshRoCK4MQAvD_BwE&gclsrc=aw.ds' },
      ],
      place:'2N Goa',
      package: '3D2N',
      price: '₹30,000 For Two',
    },
    {
      id: 2,
      image: place2,
      name: 'Dubai',
      description: 'A modern metropolis in the heart of the desert, where futuristic skyscrapers, luxury shopping, desert adventures, and vibrant nightlife come together to create a unique and unforgettable travel experience.',
      nearbyPlaces: ['1.AYA Universe Tickets, Dubai', '2.Burj Khalifa','3.Palm Jumeirah','4.Museum of the Future'],
      hotels: [
        { name: 'Majestic City Retreat Hotel', distance: 1.1, rate: '₹7,402 per night', link:'https://majestichotels.com/'},
        { name: 'Marco Polo Hotel', distance: 1.8, rate: '₹6,021 per night', link:'https://www.marcopolohotels.com/'},
      ],
      place:'4N Dubai',
      package: '4D3N',
      price: '₹1,30,000 For Two',
    },
    {
      id: 3,
      image: place3,
      name: 'Kerala',
      description: "Kerala, known as 'God's Own Country,' is a lush paradise in southern India. Its enchanting landscape is adorned with palm-fringed beaches, serene backwaters, and lush green hills.",
      nearbyPlaces: ['1.Alleppey', '2.Wayanad','3.Cochin','4.Munnar'],
      hotels: [
        { name: 'Trident Cochin', distance:0.5, rate: '₹ 5,938 per night', link:'https://www.tridenthotels.com/' },
        { name: 'CGH Earth - Casino Hotel ', distance:0, rate: '₹ 3,264 per night', link:'https://www.cghearth.com/casino-hotel' },
      ],
      place:'3N Munnar/2N Cochin',
      package: '6D5N',
      price: '₹40,000 For Two',
    },
    {
      id: 4,
      image: place4,
      name: 'TajMahal',
      description: "The Taj Mahal, an architectural masterpiece, is India's iconic symbol of love and devotion. This ivory-white marble mausoleum, built in the 17th century, stands as a testament to eternal love.",
      nearbyPlaces: ['1.Agra Fort', '2.Fatehpur Sikri','3.Itmad-ud-Daulahs Tomb','4.Anguri Bagh','5.Diwan-I-Aam'],
      hotels: [
        { name: 'Radisson Hotel Agra ', distance:3.3, rate: '₹8,173 per night',Link:"https://www.radissonhotels.com/en-us/hotels/radisson-agra"},
        { name: 'Taj Hotel & Convention Centre, Agra', distance: 2.3, rate: '₹9000 per night',Link:"https://www.tajhotels.com/en-in/taj/taj-hotel-and-convention-centre-agra/" },
      ],
      place:'2N Agra',
      package: '3D2N',
      price: '₹25,000 For Two',
    },
    {
      id: 5,
      image: place5,
      name: 'Thailand',
      description: "Thailand, the Land of Smiles, beckons with its exotic charm and rich culture. Explore ancient temples, savor delicious street food, and indulge in vibrant night markets. From the bustling streets of Bangkok to the tranquil beaches of Phuket and the lush jungles of Chiang Mai, Thailand offers a captivating blend of tradition and modernity.",
      nearbyPlaces: ['1.Visit Beautiful Safari World Zoo, Bangkok', '2.Sanctuary of Truth','3.Dream World Amusement Park, Bangkok','4.Art in Paradise'],
      hotels: [
        { name: 'Radisson Hotel Agra ', distance:3.3, rate: '₹8,173 per night',Link:"https://www.ultimateluxuryvillarentals.com/"},
        { name: 'Taj Hotel & Convention Centre, Agra', distance: 2.3, rate: '₹9000 per night',Link:"https://thegemspattaya.com/" },
      ],
      place:'3N Pattaya/2N Bangkok',
      package: '6D/5N',
      price: '₹39,116 per person',
    },
    {
      id: 6,
      image: place6,
      name: 'Vietnam',
      description: "Vietnam, a land of stunning contrasts, offers a tapestry of natural beauty, rich history, and vibrant culture. Explore bustling street markets, savor delicious street food, and immerse yourself in the warmth of its people. ",
      nearbyPlaces: ['1.Halong Bay', '2.Phong Nha Ke Bang National Park','3.Mekong Delta','4.Cat Ba Island','5.Dau Be Island'],
      hotels: [
        { name: 'Palm Garden Beach Resort', distance: 2, rate: '₹150 per night',Link:"https://palmgardenresort.vn/" },
        { name: 'Pullman Saigon Centre ', distance: 3, rate: '₹130 per night' ,Link:"https://www.pullman-saigon-centre.com/"},
        { name: 'Alagon Saigon Hotel & Spa ', distance: 3, rate: '₹130 per night' ,Link:"https://alagonhotels.com/"},
      ],
      package:'7D/6N',
      place: '3N Hanoi/2N Danang/2N Ho Chi Minh City',
      price: '₹78,670 per person',
    },
    {
      id: 7,
      image: place7,
      name: 'Bali',
      description: "The Taj Mahal, an architectural masterpiece, is India's iconic symbol of love and devotion. This ivory-white marble mausoleum, built in the 17th century, stands as a testament to eternal love.",
      nearbyPlaces: ['1.Mount Batur', '2.Tanah Lot Temple','3.Bali Swing','3.Pura Ulun Danu Bratan','4.Sekumpul Waterfall'],
      hotels: [
        { name: 'SenS Hotel & Spa Conference Ubud ', distance: 1.2, rate: '₹4060 per night',Link:"https://www.senshotelsresorts.com/" },
        { name: 'Grand Zuri Kuta Bali', distance: 2.1 , rate: '₹1430 per night',Link:"http://www.zhmhotels.com/hotel/grand-zuri-kuta-bali/" },
      ],
      package: '8D7N',
      place: '2N Bali/1N Kuta/2N Ubud/2N Mount Batur Trekking',
      price: '₹52,590 For Two',
    },
    // Add more place objects as needed
  ];

  return (
    <div className="places-container">
      <header className="header">
        <h1>Explore Amazing Places</h1>
        <p>Discover breathtaking destinations around the world.</p>
      </header>
      <div className="place-grid">
        {places.map((place) => (
          <div key={place.id} className="place-card">
            <div className="place-card-inner">
              <img className="place-image" src={place.image} alt={place.name} />
              <div className="place-details">
                <h2>{place.name}</h2>
                <p>{place.description}</p>
                <h3>Nearby Places:</h3>
                <ul>
                  {place.nearbyPlaces.map((nearbyPlace, index) => (
                    <li key={index}>{nearbyPlace}</li>
                  ))}
                </ul>
                <h3>Hotels:</h3>
                <ul>
                  {place.hotels.map((hotel, index) => (
                    <li key={index}>
                      <a href={hotel.link} target="_blank" rel="noopener noreferrer">
                        {hotel.name} - {hotel.distance} km - {hotel.rate}
                      </a>
                    </li>
                  ))}
                </ul>
                <h3>Place:</h3>
                <p>{place.place}</p>
                <h3>Package:</h3>
                <p>{place.package}</p>
                <h3>Price:</h3>
                <p>{place.price}</p>
                <div className="button-group">
                  <Link to="/contact" className="contact-button">Contact For More Info</Link>
                  <Link to="/BookNow" className="book-now-button">Book Now</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Places;
