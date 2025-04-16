import React, { useRef, useEffect } from "react";
import kaboom from "kaboom";
import Menu from './components/Menu';    // Componente del menú
import Juego from './scenes/Juego';     // Componente del juego
import GameOver from './components/GameOver'; // Componente de Game Over

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const k = kaboom({
      global: false,
      canvas: canvasRef.current, // Usamos el canvas de React
    });

    k.loadSprite("fondo", "/sprites/fondo.png");
    k.loadSprite("personaje", "/sprites/santino.png");

    k.waitForAssets(["fondo", "personaje"]).then(() => {
      Menu(k);
      Juego(k);
      GameOver(k);

      k.go("inicio"); // Cambiar a la escena de inicio
    });

    return () => k.destroy(); // Limpiar recursos cuando el componente se desmonte
  }, []);

  return <canvas ref={canvasRef} />; // Solo el canvas con la referencia
}

export default App;
