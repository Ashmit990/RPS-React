import React, { useCallback, useEffect, useState } from "react";
import gameImg from "../assets/game.png";
import rockImg from "../assets/rock.png";
import paperImg from "../assets/paper.png";
import scissorImg from "../assets/scissors.png";

function RPS() {
  const [personMove, setPersonMove] = useState(rockImg);
  const [aiMove, setAiMove] = useState(rockImg);
  const [personScore, setPersonScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);
  const [winner, setWinner] = useState("No one has played yet");
  const [gameStarted, setGameStarted] = useState(false);

  const images = [rockImg, paperImg, scissorImg];

  const logic = () => {
    let randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  const determineWinner = (person, ai) => {
    if (person === ai) {
      return "It's a Tie";
    }

    if (
      (person === rockImg && ai === scissorImg) ||
      (person === scissorImg && ai === paperImg) ||
      (person === paperImg && ai === rockImg)
    ) {
      return "You";
    } else {
      return "AI";
    }
  };

  const handleMove = (move) => {
    if (!gameStarted) setGameStarted(true);
    setPersonMove(move);
    setAiMove(logic());
  };

  const scoreLogic = useCallback(() => {
    if (gameStarted) {
      const result = determineWinner(personMove, aiMove);
      setWinner(result);
      if (result === "You") {
        setPersonScore((p) => p + 1);
      } else if (result === "AI") {
        setAiScore((p) => p + 1);
      }
    }
  }, [aiMove, personMove, setPersonScore, setAiScore]);

  useEffect(() => {
    scoreLogic();
  }, [aiMove, personMove, setPersonScore, setAiScore]);

  return (
    <div className="w-[100%] h-[664px] bg-[#F5F5F5] flex">
      <img className="w-[100%] h-[100%]" src={gameImg} alt="" />

      <h2 className="text-[#7D29EA] font-spaceMono font-bold text-[50px] absolute top-[172px] left-[250px] flex flex-col">
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
      </h2>

      <div className="bg-[#FFFF] w-[490px] h-[500px] absolute top-[65px] right-[170px] rounded-2xl shadow-2xl py-2 px-9">
        <p className="font-spaceMono text-center text-[20px]">
          Winner : {winner}
        </p>

        <div className="w-[100%] h-[140px] mt-[40px]">
          <div className="flex justify-between items-center">
            <img
              src={personMove}
              className="w-[100px] h-[95%] rotate-[100deg]"
              alt="you"
            />
            <img
              src={aiMove}
              className="w-[100px] h-[95%] -rotate-[130deg]"
              alt="opponent"
            />
          </div>

          <div className=" w-[100%] px-8 flex justify-between font-spaceMono text-[20px] text-[#7D29EA] font-semibold">
            <p>YOU</p>
            <p>AI </p>
          </div>
        </div>

        <div className=" mt-[30px] w-[100%] h-[60px] font-spaceMono flex flex-col items-center">
          <p className="text-center text-[20px]">SCORE</p>
          <div className="w-[22%] h-[20px] flex justify-between items-center mt-[10px]">
            <p className="text-[#7D29EA] font-bold text-[23px]">
              {personScore}
            </p>
            <p className="text-[#7D29EA] font-bold text-[23px]">{aiScore}</p>
          </div>
        </div>

        <div className="mt-[70px] w-[100%] h-[90px] flex justify-between items-center">
          <div className="border-2 border-transparent hover:border-[#7D29EA] transition-all duration-500 rounded-2xl hover:shadow-[#7D29EA] shadow-sm h-[130px] w-[130px] flex justify-center items-center">
            <img
              onClick={() => handleMove(paperImg)}
              className="h-[100px] w-[100px] transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer"
              src={paperImg}
              alt=""
            />
          </div>
          <div className="border-2 border-transparent hover:border-[#7D29EA] transition-all duration-500 rounded-2xl hover:shadow-[#7D29EA] shadow-sm h-[130px] w-[130px] flex justify-center items-center">
            <img
              onClick={() => handleMove(rockImg)}
              className="h-[100px] w-[100px] transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer"
              src={rockImg}
              alt=""
            />
          </div>
          <div className="border-2 border-transparent hover:border-[#7D29EA] transition-all duration-500 rounded-2xl hover:shadow-[#7D29EA] shadow-sm h-[130px] w-[130px] flex justify-center items-center">
            <img
              onClick={() => handleMove(scissorImg)}
              className="h-[100px] w-[100px] transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer"
              src={scissorImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RPS;