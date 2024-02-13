import React, { useEffect, useState } from 'react';

const Home = () => {
  const [words, setWords] = useState(["Dear sir , Thank you for being an incredible teacher! Your passion for teaching and dedication to helping us learn has made a lasting impact on our lives. We are grateful for everything you've taught us and the support you've given us throughout the year 😀 😀 😀 😀"]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentWord.length < words[currentWordIndex].length) {
        setCurrentWord((prev) => words[currentWordIndex].substring(0, prev.length + 1));
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentWord("");
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 600); // Change delay between words if needed
      }
    }, 200); // Change typing speed if needed

    return () => clearInterval(typingInterval);
  }, [currentWord, currentWordIndex, words]);

  return (
    <center>
      <div className="Home">
        <h1 style={{ fontSize: '3em' }}>{currentWord}</h1>
      </div>
    </center>
  );
};

export default Home;
