import { useState } from "react";
import "./styles.css";

export default function App() {
  const emojiDictionary = {
    "🍋": "lemon",
    "🍓": "strawberry",
    "🍍": "pineapple",
    "🍉": "watermelon",
    "🍌": "banana",
    "🥝": "kiwi",
    "🍒": "cherries",
    "🍇": "grapes",
    "🍑": "peaches",
    "🍏": "green apple",
    "🍈": "melon"
  };

  var emojis = Object.keys(emojiDictionary);

  const [meaning, setMeaning] = useState("");

  function onChangeHandler(event) {
    //setUserInput(event.target.value);
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this meaning in our database";
    }
    setMeaning(meaning);
  }

  function emojiHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside out</h1>
      <input onChange={onChangeHandler} />
      {/* <button onClick={likeClickHandler}>Like me</button> {likectr} */}
      <div style={{ fontSize: "larger", fontWeight: "bold" }}>{meaning}</div>
      <h3>Fruits we know</h3>
      {emojis.map((emoji) => {
        return (
          <span
            key={emoji}
            onClick={() => emojiHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "1rem",
              cursor: "pointer"
            }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
