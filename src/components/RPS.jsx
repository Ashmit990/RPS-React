import React, { useState } from 'react'
import gameImg from '../assets/game.png';
import rockImg from '../assets/rock.png';
import paperImg from '../assets/paper.png';
import scissorImg from '../assets/scissors.png';

function RPS() {

    const [personMove, setPersonMove] = useState("")
    const [aiMove, setAiMove] = useState("")
    const [personScore, setPersonScore] = useState(0)
    const [aiScore, setAiScore] = useState(0)
    const [result, setResult] = useState("")
    const [selectMove, setSelectMove] = useState("")


  return (
    <div className='w-[100%] h-[664px] bg-[#F5F5F5] flex'>
        <img className='w-[100%] h-[100%]' src={gameImg} alt="" />

        <h2 className='text-[#7D29EA] font-bold text-[60px] absolute top-[172px] left-[250px] flex flex-col'>
            <span>ROCK</span>
            <span>PAPER</span>
            <span>SCISSORS</span>
        </h2>

        <div className='bg-[#FFFF] w-[440px] h-[480px] absolute top-[85px] right-[200px] rounded-2xl shadow-2xl'>hh</div>

    </div>
  )
}

export default RPS