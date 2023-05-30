import React, { useEffect, useState } from "react";

function Typing({ texts, speed = 100, delay = 1000 }) {
  const [index, setIndex] = useState(0);
  const [letter, setLetter] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    setTimeout(async () => {
      // waiting 1 second
      if (letterIndex === 0) {
        await waiting();
      }
      if (index < texts.length) {
        if (letterIndex < texts[index].length) {
          setLetter((letter) => (letter += texts[index][letterIndex]));
          setLetterIndex(letterIndex + 1);
        } else {
          // waiting 1 second
          if (letter.length === texts[index].length) {
            await waiting();
          }
          // Delete Letters
          spacing();
        }
      } else {
        setIndex(0);
        setLetterIndex(0);
      }
    }, speed);

    const spacing = async () => {
      let letters = letter.split("");
      setLetter("");
      if (letters.length !== 0) {
        letters.pop();
        setLetter(letters.join(""));
      } else {
        setLetterIndex(0);
        setIndex(index + 1);
      }
    };

    const waiting = () => {
      return new Promise((res) => {
        setTimeout(res, 1000);
      });
    };
  }, [index, letterIndex, letter, texts, speed]);

  return (
    <span>
      I a{" "}
      <b>
        {letter} <i></i>
      </b>
    </span>
  );
}

export default Typing;
