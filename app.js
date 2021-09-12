import React, { useState } from "react";
import "./styles.css";

const travelDictionary = {
  Maharashtra: [
    {
      place: "Ajanta and Ellora Caves",
      famousFor:
        "Ajanta and Ellora caves, considered to be one of the finest examples of ancient rock-cut caves, are located near Aurangabad in Maharashtra, India. Ajanta and Ellora caves complex is adorned with beautiful sculptures, paintings, and frescoes and include Buddhist monasteries, Hindu and Jain temples",
      Ratings: "4.8/5"
    },
    {
      place: "Mahabaleshwar",
      famousFor:
        "Mahabaleshwar is a hill station located in the Western Ghats, in Satara district of Maharashtra. Apart from its strawberries, Mahabaleshwar is also well known for its numerous rivers, magnificent cascades and majestic peaks. It is among the most sought after weekend getaways from Pune & Mumbai, located about 120km south-west of Pune and 285km from Mumbai.",
      Ratings: "4.4/5"
    },
    {
      place: "Marheran",
      famousFor:
        "Nestled amidst the Sahyadri range on the Western Ghats, Matheran is a cosy little hill station that stands at an elevation of 2600 feet above sea level, and is just 100 kilometres away from Mumbai, making it the perfect weekend getaway. With its name literally translating to “overhead forest”, Matheran is the smallest hill station in India but is extremely popular in terms of tourists looking for a short trip amid spectacular vistas and serenity.",
      Ratings: "4.2/5"
    }
  ],

  Goa: [
    {
      place: "Calangute Beach - Queen of Beaches",
      famousFor:
        "Acting as a haven for nature lovers, in particular, this beach is the biggest and the most popular one in North Goa, boasting of scintillating charm as well as beauty. Furthermore, it reflects the uniqueness that the culture of Goa generally has, in addition to offering beautiful and scenic views of the surrounding landscapes, which act as the perfect getaway destination",
      Ratings: "4.8/5"
    },
    {
      place: "Roam at Tito's Street",
      famousFor:
        "Tito’s Street is one of the best clubs you can visit. Tito’s Street, named after the street it is located on, is a club that attracts a lot of crowd especially because of its prime location and its top-notch service. Baga beach, where the club is located, is a party hub so it is no wonder that loads of tourists find their way to Tito’s Street after sundown.",
      Ratings: "4.5/5"
    },
    {
      place: "Dudhsagar Waterfalls",
      famousFor:
        "The four-tiered waterfall structure is one of the tallest in India and is located on the Mandovi River. The white water cascades down from a height of nearly 1017 feet off a nearly steep mountain face. They form a part of the Bhagwan Mahaveer Sanctuary and Mollem National Park, so the best way to reach them is by entering the national park and taking a van allocated by the park to the falls.",
      Ratings: "4.1/5"
    }
  ],

  Karnataka: [
    {
      place: "Coorg - Queer but Captivating",
      famousFor:
        "Coorg is one of the pristine, less crowded hill stations. Its natural and lush greenery contributes to its scenic beauty. It is an ideal summer getaway",
      Ratings: "4.7/5"
    },
    {
      place: "Hampi – An Architectural Marvel",
      famousFor:
        "Hampi is one of the world’s heritage sites as declared by UNESCO. Situated on the banks of Tungabhadra, the place is home to historical ruins and remains of the Vijayanagar kingdom. Rocks and stone carvings are proof of the skill and mastery of the artisans of the old era. It is the perfect tourist place for the history enthusiast.",
      Ratings: "4.5/5"
    },
    {
      place: "Mysore – City of Old World Charm",
      famousFor:
        "Mysore is one of the oldest cities and second biggest in Karnataka. It was the erstwhile city of the Mysore kings who ruled the state for 100’s of years up until the 20th century.",
      Ratings: "4.2/5"
    }
  ],

  Kerala: [
    {
      place: "Cochin",
      famousFor:
        "Kochi or Cochin is a unique placein God’s Own Country that is perfectly blended with cultural values and modern ideas! Fondly called the ‘Queen of the Arabian Sea’, this imposing port-city has always been an attraction point since the beginning of history.",
      Ratings: "4.8/5"
    },
    {
      place: "Munnar",
      famousFor:
        "Yet another gorgeous hill station in the lap of the fascinating Western Ghats, Munnar needs no introduction. Rising 1,600m above the sea level, a vacation in the beguiling locales of this hilly retreat is all about the lofty clouds, picturesque mountains, rolling hills, and a soothing ambience.",
      Ratings: "4.5/5"
    },
    {
      place: "Thiruvananthapuram",
      famousFor:
        "The capital city of God’s Own Country, Thiruvananthapuram or Trivandrum, or the ‘Evergreen City of India’ is also the largest city in the state. Located at the south-western edge of Kerala, this city is the perfect example of how rural life gets mixed with the contemporary way of living.",
      Ratings: "3.9/5"
    }
  ],

  Gujrat: [
    {
      place: "Statue of Unity - Tallest statue in the world",
      famousFor:
        "Statue of Unity is a memorial to The Iron Man of India, Sardar Vallabhbhai Patel. The statue has been erected to propagate Sardar Vallabhbhai Patel's vision of India and to inspire the Citizens of India through his patriotism and freedom struggle. The Bronze statue of the founding father of the Republic of India stands 182 metres tall grabbing the attention of the whole",
      Ratings: "4.3/5"
    },

    {
      place: "Kutch - The white desert of India",
      famousFor:
        "Virtually an island that resembles the shape of a tortoise, Kutch is an erstwhile princely state of India holding onto its grandeur nature from the past. Kutch is probably one of the most beautiful, yet surreal places in India with the vast expanses of the white salt desert.  The place comes to life during the winters when the Rann Festival is held during December-February everywhere in which there are huge camp settlements with cultural programs, functions and adventure activities like hot-air ballooning",
      Ratings: "4/5"
    },

    {
      place: "Somnath - The town of the lord of the Moon",
      famousFor:
        "Somnath, literally meaning 'lord of the moon' is a pilgrim center and is home to one of the 12 Jyotirlingas. It is a town which derives much of its identity from the mythology, religion, and legends that surround it.",
      Ratings: "3.8/5"
    }
  ]
};

var travelList = Object.keys(travelDictionary);

export default function App() {
  const [states, setStates] = useState("Maharashtra");
  function statesClickHandler(states) {
    setStates(states);
  }

  return (
    <div className="App">
      <h1>Your Indian Tourist</h1>

      <p>Select the state and we will suggest you best places to visit</p>

      {travelList.map((states) => (
        <button
          id="state-btn"
          onClick={() => statesClickHandler(states)}
          key={states}
        >
          {states}
        </button>
      ))}

      <div>
        <ul>
          {" "}
          <div>The places you must visit in {states} are: </div>
          {travelDictionary[states].map((travelState) => (
            <li className="state-list" key={travelState.place}>
              <div id="travel-state-place">{travelState.place}</div>

              <div id="description">Known For: {travelState.famousFor}</div>

              <br />

              <div id="rating">Ratings: {travelState.Ratings}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
