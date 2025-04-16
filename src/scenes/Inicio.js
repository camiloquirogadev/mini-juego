import React, { useEffect } from 'react';
import kaboom from 'kaboom';

const Inicio = () => {
  useEffect(() => {
    const k = kaboom();

    // Escena de inicio con animaciones
    k.scene('inicio', () => {
      // Mensaje de bienvenida con animación de deslizamiento
      const textoBienvenida = k.add([
        k.text('Bienvenido al Juego', { size: 48 }),
        k.pos(window.innerWidth / 2 - 150, -100), // Empezamos fuera de la pantalla
        k.color(1, 1, 1),
      ]);

      textoBienvenida.action(() => {
        textoBienvenida.pos.y += 5; // Deslizar hacia abajo
        if (textoBienvenida.pos.y >= window.innerHeight / 2 - 100) {
          textoBienvenida.pos.y = window.innerHeight / 2 - 100; // Detener la animación al llegar al centro
        }
      });

      // Instrucción para jugar
      k.add([
        k.text('Presiona ENTER para Jugar', { size: 24 }),
        k.pos(window.innerWidth / 2 - 150, window.innerHeight / 2 + 50),
        k.color(1, 1, 1),
      ]);

      // Instrucción para salir
      k.add([
        k.text('Esc para Salir', { size: 24 }),
        k.pos(window.innerWidth / 2 - 150, window.innerHeight / 2 + 100),
        k.color(1, 1, 1),
      ]);

      // Acción para iniciar el juego
      k.keyPress('enter', () => {
        k.go('juego');  // Ir a la escena de juego
      });

      // Acción para salir del juego
      k.keyPress('escape', () => {
        window.close();  // Cierra el juego
      });
    });

    // Iniciar la escena de inicio
    k.start('inicio');

    return () => k.destroy(); // Limpiar recursos cuando se desmonte
  }, []);

  return <canvas />;
};

export default Inicio;
