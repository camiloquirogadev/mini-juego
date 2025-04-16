import React, { useEffect } from 'react';
import kaboom from 'kaboom';

const GameOver = () => {
  useEffect(() => {
    const k = kaboom();

    // Escena de Game Over
    k.scene('gameOver', () => {
      k.add([
        k.text('¡Game Over!', { size: 48 }),
        k.pos(120, 100),
        k.color(1, 0, 0), // Color rojo para Game Over
      ]);

      k.add([
        k.text('Presiona ENTER para Volver al Menú', { size: 24 }),
        k.pos(120, 200),
        k.color(1, 1, 1),
      ]);

      k.add([
        k.text('Esc para Salir', { size: 24 }),
        k.pos(120, 300),
        k.color(1, 1, 1),
      ]);

      // Acción para volver al menú cuando presionas ENTER
      k.keyPress('enter', () => {
        k.go('menu'); // Cambia a la escena de menú principal
      });

      // Acción para salir del juego cuando presionas ESC
      k.keyPress('escape', () => {
        window.close(); // Cierra la ventana del juego
      });
    });

    // Iniciar la escena de Game Over
    k.start('gameOver');

    return () => k.destroy(); // Limpiar recursos al desmontar el componente
  }, []);

  return <canvas />;
};

export default GameOver;
