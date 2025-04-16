// GameOver.js - Define la escena de fin de juego ("gameOver")
export default function initGameOver(k) {
  // Definir la escena "gameOver" para la pantalla de fin del juego
  k.scene("gameOver", () => {
    // Añadir el fondo (opcional, para mantener la estética consistente)
    k.add([
      k.sprite("fondo"),
      k.pos(0, 0),
      k.anchor("topleft"),
    ]);

    // Texto principal de "Game Over"
    k.add([
      k.text("¡Game Over!", { size: 24 }),    // Mensaje de Game Over
      k.pos(k.width() / 2, k.height() / 2 - 10),
      k.anchor("center"),
    ]);

    // Texto de instrucción para reiniciar
    k.add([
      k.text("Presiona R para reiniciar", { size: 16 }),  // Instrucción de reinicio
      k.pos(k.width() / 2, k.height() / 2 + 20),
      k.anchor("center"),
    ]);

    // Al presionar "r", regresar a la escena de inicio (reiniciar el juego)
    k.onKeyPress("r", () => {
      k.go("inicio");  // Volver al menú inicial ("inicio")
    });
  });
}
