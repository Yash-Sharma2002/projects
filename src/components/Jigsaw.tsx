import React from 'react'
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import Header from './Header'
import Footer from './Footer'
// @ts-ignore
import img from '../assets/wordsearch.jpeg'

import '../styles/jigsaw.css'

export default function Jigsaw() {
  return (
    <>
      <Header />
      <div className='w-full lg:h-[80vh] bg-[#f5f5f5]'>
        <div className='flex justify-between items-start mx-auto'>
            <JigsawPuzzle
              imageSrc={img}
              rows={3}
              columns={3}
              onSolved={() => alert('Solved')}
            />
        </div>
      </div>
      <Footer />
    </>
  )
}
