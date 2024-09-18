import { useState, useEffect, useRef } from 'react';


export const Game = () => {
    const [ball, setBall] = useState({ x: 50, y: 50, dx: 2, dy: 2 });
    const [playerPaddle, setPlayerPaddle] = useState({ y: 50 });
    const [computerPaddle, setComputerPaddle] = useState({ y: 50 });
    const [score, setScore] = useState({ player: 0, computer: 0 });
  
    useEffect(() => {
      const moveBall = () => {
        setBall((prevBall) => ({
          ...prevBall,
          x: prevBall.x + prevBall.dx,
          y: prevBall.y + prevBall.dy,
        }));
  
        // Rebote en las paredes superior e inferior
        if (ball.y >= 100 || ball.y <= 0) {
          setBall((prevBall) => ({ ...prevBall, dy: -prevBall.dy }));
        }
  
        // Rebote en las paletas
        if (
          (ball.x <= 10 && ball.y >= playerPaddle.y && ball.y <= playerPaddle.y + 20) ||
          (ball.x >= 90 && ball.y >= computerPaddle.y && ball.y <= computerPaddle.y + 20)
        ) {
          setBall((prevBall) => ({ ...prevBall, dx: -prevBall.dx }));
        }
  
        // Puntos para el jugador o la computadora
        if (ball.x <= 0) {
          setScore((prevScore) => ({ ...prevScore, computer: prevScore.computer + 1 }));
          resetBall();
        } else if (ball.x >= 100) {
          setScore((prevScore) => ({ ...prevScore, player: prevScore.player + 1 }));
          resetBall();
        }
      };
  
      const interval = setInterval(moveBall, 50);
  
      return () => clearInterval(interval);
    }, [ball]);
  
    useEffect(() => {
      const handleKeyPress = (event) => {
        if (event.key === 'w') {
          setPlayerPaddle((prevPaddle) => ({
            y: Math.max(prevPaddle.y - 10, 0),
          }));
        } else if (event.key === 's') {
          setPlayerPaddle((prevPaddle) => ({
            y: Math.min(prevPaddle.y + 10, 80),
          }));
        }
      };
  
      window.addEventListener('keydown', handleKeyPress);
  
      return () => {
        window.removeEventListener('keydown', handleKeyPress);
      };
    }, []);
  
    const resetBall = () => {
      setBall({ x: 50, y: 50, dx: 2, dy: 2 });
    };
  
    const resetGame = () => {
      resetBall();
      setScore({ player: 0, computer: 0 });
    };
  
    return (
      <div className="h-screen bg-gray-800 flex items-center justify-center">
        <div className="relative" style={{ width: '640px', height: '480px' }}>
          <div
            className="bg-white rounded-full w-4 h-4 absolute"
            style={{ top: `${ball.y}%`, left: `${ball.x}%` }}
          />
          <div
            className="bg-white w-4 h-20 absolute"
            style={{ top: `${playerPaddle.y}%`, left: '1%' }}
          />
          <div
            className="bg-white w-4 h-20 absolute"
            style={{ top: `${computerPaddle.y}%`, right: '1%' }}
          />
          <div className="text-white absolute top-5 left-1/2 transform -translate-x-1/2">
            Jugador: {score.player} | Computadora: {score.computer}
          </div>
          <button
            onClick={resetGame}
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white p-2"
          >
            Reiniciar Juego
          </button>
        </div>
      </div>
    );
}