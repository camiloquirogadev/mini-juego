// Menu.js - Define la escena de menú inicial ("inicio")
export default function initMenu(k) {
  // Definir la escena "inicio" del menú principal
  k.scene("inicio", () => {
    // Añadir un fondo (sprite "fondo" cubriendo la pantalla)
    k.add([
      k.sprite("fondo"),        // Sprite de fondo previamente cargado en Kaboom
      k.pos(0, 0),              // Posición en la esquina superior izquierda
      k.anchor("topleft"),      // Anclar en la esquina superior izquierda
    ]);

    // Título del juego
    k.add([
      k.text("Título del Juego", { size: 24 }),    // Texto grande para el título
      k.pos(k.width() / 2, k.height() / 2 - 20),   // Centramos en pantalla (un poco hacia arriba)
      k.anchor("center"),                          // Anclar el texto en el centro (referencia central)
    ]);

    // Instrucciones para iniciar el juego
    k.add([
      k.text("Presiona Enter para iniciar", { size: 16 }),  // Texto de instrucciones
      k.pos(k.width() / 2, k.height() / 2 + 20),            // Centramos debajo del título
      k.anchor("center"),                                   // Anclar en el centro
    ]);

    // Al presionar Enter, ir a la escena de juego
    k.onKeyPress("enter", () => {
      k.go("juego");  // Cambiar a la escena "juego"
    });
  });
}
