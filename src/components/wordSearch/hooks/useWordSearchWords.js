
import { useRef, useState } from 'react';


export default function useWordSearchWords(wordList, gridSize, handleRegenerateGrid) {


  //const maxWords = (Math.floor((gridSize+1 * (Math.log(3)*gridSize)) / 2 + (1*gridSize/10) - 3 ))
  //const numCells = gridSize * gridSize;

  const maxWords = 8
  const numCells = 12 * 12;

  const maxChars = Math.floor((numCells / 100) * 50) //% of total cells in grid
  const maxWordLength = gridSize;


  const chosenList = useRef(wordList[0])

  function handleDropdownChange(value) {
    chosenList.current = wordList.find((list) => {
      return list.name === value
    })
    words.current = getWords();
    handleRegenerateGrid()
  }

  function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }

  function getWords() {

    //const shuffledWordList = shuffleArray(chosenList.current.words);
    const shuffledWordList = chosenList.current.words;
    const wordsToBeInserted = []
    let i = 0;
    while (wordsToBeInserted.length < shuffledWordList.length) {
      const word = shuffledWordList[i]
      if (!wordsToBeInserted.includes(word) && word.length <= maxWordLength) {
        wordsToBeInserted.push(word);
      }
      i++;
    }
    if (wordsToBeInserted.join("").length <= maxChars) return wordsToBeInserted;
    return getWords();

  }

  //const words = useRef(getWords())
  const [words, setWords] = useState(getWords())

  function regenerateWords() {
    setWords(getWords())
  }

  return { handleDropdownChange, chosenList, words, regenerateWords }
}