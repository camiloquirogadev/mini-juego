import React, { useEffect } from 'react';
import kaboom from 'kaboom';

const Menu = () => {
  useEffect(() => {
    const k = kaboom();

    // Escena de Menú Principal
    k.scene('menu', () => {
      k.add([
        k.text('Bienvenido al Juego', { size: 48 }),
        k.pos(120, 100),
        k.color(1, 1, 1),
      ]);

      k.add([
        k.text('Presiona ENTER para Jugar', { size: 24 }),
        k.pos(120, 200),
        k.color(1, 1, 1),
      ]);

      k.add([
        k.text('Esc para Salir', { size: 24 }),
        k.pos(120, 300),
        k.color(1, 1, 1),
      ]);

      // Acción para iniciar el juego cuando presionas ENTER
      k.keyPress('enter', () => {
        k.go('juego'); // Cambia a la escena de juego
      });

      // Acción para salir del juego cuando presionas ESC
      k.keyPress('escape', () => {
        window.close(); // Cierra la ventana del juego
      });
    });

    // Iniciar el menú principal
    k.start('menu');

    return () => k.destroy(); // Limpiar recursos al desmontar el componente
  }, []);

  return <canvas />;
};

export default Menu;
