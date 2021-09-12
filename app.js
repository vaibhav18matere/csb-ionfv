import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🤗": "Hugging Face",
  "🙂": "Slightly Smiling Face",
  "😎": "Smiling Face with Sunglasses",
  "😉": "Winking Face",
  "🤭": "Face with Hand Over Mouth",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "🤑": "Money-Mouth Face",
  "🥵": "Hot Face",
  "😱": "Face Screaming in Fear",
  "😍": "Smiling Face with Heart-Eyes",
  "🤬": "Face with Symbols on Mouth",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😜": "Winking Face with Tongue",
  "🙄": "Face with Rolling Eyes",
  "😭": "Loudly Crying Face",
  "👿": "Angry Face with Horns",
  "😷": "Face with Medical Mask",
  "🥱": "Yawning Face",
  "😖": "Confounded Face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState(" ");
  const [userInput, setUserInput] = useState(" ");

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];

    setMeaning(meaning);
  }

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry, we don't have this emoji in our database";
    }

    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 className="title">Emoji Interpreter App</h1>
      <h3>
        Enter any emoji you want to know the meaning of. Or simply select from
        the below mentioned set
      </h3>

      <input className="input" onChange={emojiInputHandler}></input>

      <h2> {meaning} </h2>

      <h4>emojis we know 👇 </h4>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            className="face-emojis"
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
