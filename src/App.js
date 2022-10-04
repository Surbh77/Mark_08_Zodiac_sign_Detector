import React, { useState } from "react";
import "./styles.css";

const emojidictionary = {
  "♈": "Aries",
  "♉": "Taurus",
  "♊": "Gemini",
  "♋": "Cancer",
  "♌": "Leo",
  "♍": "Virgo",
  "♎ ": "Libra",
  "♏ ": "Scorpius",
  "♐": "Sagittarius",
  "♑": "Capricornus",
  "♒": "Aquarius",
  "♓": "Pisces"
};

var list1 = Object.keys(emojidictionary);
export default function App() {
  const [meaning, setmeaning] = useState(
    "Zodiac sign translation visible here....."
  );

  function emojiinputhandler(event) {
    var userinput = event.target.value;
    var meaning = emojidictionary[userinput];
    console.log(meaning);
    if (meaning === undefined) {
      meaning = "We dont have this zodiac sign in out database";
    } else {
      meaning = "This is " + meaning + " zodiac sign";
    }
    setmeaning(meaning);
  }

  function emojiclickhandler(item) {
    // console.log("clicked", item);
    var meaning = emojidictionary[item];
    // console.log(meaning)
    setmeaning("This is a " + meaning + " zodiac sign");
  }

  return (
    <div className="App">
      <h1>Which is your Zodiac Sign?</h1>

      <input
        placeholder="Search your zodiac sign"
        onChange={emojiinputhandler}
      ></input>
      <h2>{meaning}</h2>
      {/* <h3>Emojis we know</h3> */}
      <ul>
        {list1.map(function (emoji) {
          return (
            <span
              key={emoji}
              onClick={() => emojiclickhandler(emoji)}
              style={{
                fontSize: "x-large",
                padding: "1rem",
                cursor: "pointer"
              }}
            >
              {emoji}
            </span>
          );
        })}
      </ul>
    </div>
  );
}
