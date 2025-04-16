import React, { useEffect, useRef } from "react";
import kaboom from "kaboom";
import Juego from './scenes/Juego';    // Componente del juego
import Menu from './components/Menu'; // Componente del menú
import GameOver from './components/GameOver'; // Componente de Game Over

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Inicializar Kaboom de forma correcta
    const k = kaboom({
      width: window.innerWidth,
      height: window.innerHeight,
      background: [0, 0, 0], // Fondo negro
      canvas: canvasRef.current, // Referencia al canvas
    });

    // Configurar las escenas
    k.scene("inicio", () => {
      Menu();  // Llamar al componente de la pantalla de inicio
    });

    k.scene("juego", () => {
      Juego();  // Llamar al componente del juego
    });

    k.scene("gameOver", () => {
      GameOver();  // Llamar al componente de Game Over
    });

    // Iniciar la escena de inicio
    k.go("inicio"); // Cambiar a la escena de inicio (sin usar `start`)

    // Limpiar recursos cuando el componente se desmonte
    return () => k.destroy(); // Destruir Kaboom cuando se desmonte el componente
  }, []);

  return <canvas ref={canvasRef} />;
}

export default App;
