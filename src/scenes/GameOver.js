import React, { useEffect } from 'react';
import kaboom from 'kaboom';

const GameOver = () => {
  useEffect(() => {
    const k = kaboom();

    // Escena de Game Over
    k.scene('gameOver', () => {
      k.add([
        k.text('¡Game Over!', { size: 48, width: 600, align: 'center' }),
        k.pos(window.innerWidth / 2 - 150, window.innerHeight / 2 - 100),
        k.color(1, 0, 0), // Color rojo
      ]);

      k.add([
        k.text('Presiona ENTER para Volver al Menú', { size: 24, width: 600, align: 'center' }),
        k.pos(window.innerWidth / 2 - 150, window.innerHeight / 2 + 50),
        k.color(1, 1, 1), // Blanco
      ]);

      k.add([
        k.text('Esc para Salir', { size: 24, width: 600, align: 'center' }),
        k.pos(window.innerWidth / 2 - 150, window.innerHeight / 2 + 100),
        k.color(1, 1, 1), // Blanco
      ]);

      // Acción cuando se presiona ENTER
      k.keyPress('enter', () => {
        k.go('menu'); // Volver al menú principal
      });

      // Acción cuando se presiona ESC
      k.keyPress('escape', () => {
        window.close(); // Cierra el juego
      });
    });

    k.start('gameOver');

    return () => k.destroy();
  }, []);

  return <canvas />;
};

export default GameOver;
