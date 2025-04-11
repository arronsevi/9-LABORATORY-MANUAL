import React, { useState } from 'react';
import './App.css'; // Make sure App.css is in the same folder

function App() {
  const [englishWord, setEnglishWord] = useState('');
  const [tagalogTranslation, setTagalogTranslation] = useState('');

  const translateWord = () => {
    const translations = {
      hello: 'kamusta',
      world: 'mundo',
      love: 'pag-ibig',
      food: 'pagkain',
      friend: 'kaibigan',
      family: 'pamilya',
      home: 'tahanan',
      light: 'liwanag',
      dark: 'dilim',
      sky: 'langit',
      moon: 'buwan',
      star: 'bituin',
      alien: 'dayuhan',
      ship: 'barko',
      galaxy: 'kalawakan',
      time: 'oras',
      space: 'kalawakan',
      run: 'takbo',
      walk: 'lakad',
      speak: 'salita',
      happy: 'masaya',
      sad: 'malungkot',
      angry: 'galit',
      sleep: 'tulog',
      dream: 'panaginip'
    };

    const cleanedWord = englishWord.trim().toLowerCase();
    console.log('Translating:', cleanedWord);

    const translation = translations[cleanedWord];
    setTagalogTranslation(translation || 'Translation not found');
  };

  return (
    <div className="alien-container">
      <h1>👾 Alien Translator 👾</h1>
      <input
        type="text"
        value={englishWord}
        onChange={(e) => setEnglishWord(e.target.value)}
        placeholder="Enter English word"
        className="alien-input"
      />
      <button onClick={translateWord} className="alien-button">
        Translate
      </button>
      <p className="alien-result">🛸 {tagalogTranslation}</p>
    </div>
  );
}

export default App;
