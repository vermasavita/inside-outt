import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "😀": "Grinning ",
  "😃": "Grinning with Big Eyes",
  "😄": "Grinning with Smiling Eyes",
  "😁": "Beaming with Smiling Eyes",
  "😆": "Grinning Squinting",
  "😅": "Grinning with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂 ": "with Tears of Joy",
  "🙂": "Slightly Smiling",
  "🙃": "Upside-Down",
  "😉": "Winking",
  "😊": "Smiling with Smiling Eyes",
  "😇": "Smiling with Halo",
  "🥰": "Smiling with Hearts",
  "😍": "Smiling with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Blowing a Kiss",
  "😗": "Kissing",
  "😚": "Kissing with Closed Eyes",
  "😙": "Kissing with Smiling Eyes",
  "🥲": "Smiling with Tear",
  "😋": "Savoring Food",
  "😛 ": "with Tongue",
  "😜 ": "Winking with Tongue",
  "🤪 ": "Zany",
  "😝 ": "Squinting with Tongue",
  "🤑 ": "Money-Mouth",
  "🤗": "Hugging",
  "🤭": "With Hand Over Mouth",
  "🤫": "Shushing",
  "🤔": "Thinking",
  "🤐": "Zipper-Mouth",
  "🤨": " with Raised Eyebrow",
  "😐": "Neutral",
  "😑": "Expressionless",
  "😶": "Without Mouth",
  "😶‍🌫️": "in Clouds",
  "😏": "Smirking",
  "😒": "Unamused",
  "🙄": "with Rolling Eyes",
  "😬": "Grimacing",
  "😮‍💨": "Exhaling",
  "🤥": "Lying",
  "😌": "Relieved",
  "😔": "Pensive",
  "😪": "Sleepy",
  "🤤": "Drooling",
  "😴": "Sleeping",
  "😷": "with Medical Mask",
  "🤒": "with Thermometer",
  "🤕": "with Head-Bandage",
  "🤢": "Nauseated",
  "🤮": "Vomiting",
  "🤧": "Sneezing",
  "🥵": "Hot",
  "🥶": "Cold",
  "🥴": "Woozy",
  "😵": "Dizzy",
  "😵‍💫": "with Spiral Eyes",
  "🤯": "Exploding Head",
  "🤠": "Cowboy Hat",
  "_🥳": "Partying",
  "🥸": "Disguised",
  "😎": "Smiling with Sunglasses",
  "🤓": "Nerd",
  "🧐": "with Monocle",
  "😕": "Confused",
  "😟": "Worried",
  "🙁": "Slightly Frowning",
  "😮": "with Open Mouth",
  "😯": "Hushed",
  "😲": "Astonished",
  "😳": "Flushed",
  "🥺": "Pleading",
  "😦": "Frowning with Open Mouth",
  "😧": "Anguished",
  "😨": "Fearful",
  "😰": "Anxious with Sweat",
  "😥": "Sad but Relieved",
  "😢": "Crying",
  "😭": "Loudly Crying",
  "😱": "Screaming in Fear",
  "😖": "Confounded",
  "😣": "Persevering",
  "😞": "Disappointed ",
  "😓": "Downcast with Sweat",
  "😩": "Weary",
  "😫": "Tired",
  "🥱": "Yawning",
  "😤": "Steam From Nose",
  "😡": "Pouting",
  "😠": "Angry",
  "🤬": "Symbols on Mouth",
  "😈": "Smiling with Horns",
  "👿": "Angry with Horns"
};

var emojiInDictionary = Object.keys(emojiDictionary);
export default function App() {
  var [userEmoji, setUserEomoji] = useState("");
  var [meaning, setMeaning] = useState("translation will appear here..");

  function userInputChangeHandler(event) {
    var userInputEmoji = event.target.value;
    setUserEomoji(userInputEmoji);

    if (userInputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[userInputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(userInputEmoji) {
    setMeaning(emojiDictionary[userInputEmoji]);
  }
  return (
    <div className="App">
      <h1 style={{ color: "white" }}>inside out</h1>
      <input
        style={{ padding: "1rem", width: "15rem" }}
        onChange={userInputChangeHandler}
      />
      <h3 style={{ padding: "2rem" }}>{meaning}</h3>
      <h3>
        {emojiInDictionary.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{
                fontSize: "2rem",
                padding: "1rem 1rem",
                cursor: "pointer"
              }}
              key={emoji}
            >
              {emoji}{" "}
            </span>
          );
        })}
      </h3>
    </div>
  );
}
