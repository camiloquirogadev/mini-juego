// Juego.js - Define la escena principal del juego ("juego")
export default function initJuego(k) {
  // Definir la escena "juego"
  k.scene("juego", () => {
    // Cargar los sprites antes de usarlos
    k.loadSprite("fondo", "/sprites/fondo.png");   // Ruta correcta para fondo.png
    k.loadSprite("personaje", "/sprites/santino.png");  // Ruta para el personaje

    // Asegurarnos de que los sprites estén cargados antes de mostrar la escena
    k.once("load", () => {
      // Añadir el fondo de pantalla (igual que en el menú)
      k.add([
        k.sprite("fondo"), // Cargar el sprite de fondo
        k.pos(0, 0),       // Posicionarlo en la esquina superior izquierda
        k.anchor("topleft"),
      ]);

      // Añadir el jugador representado por un sprite
      const player = k.add([
        k.sprite("personaje"),  // Usar el sprite cargado de personaje
        k.pos(k.width() / 2, k.height() / 2), // Posicionar en el centro de la pantalla
        k.area(),                // Área de colisión para el jugador
        k.anchor("center"),      // Anclar al centro para que la posición sea el centro del sprite
      ]);

      // Movimiento simple del jugador con teclas de flecha
      k.onKeyDown("left", () => {
        player.move(-120, 0);  // Mover a la izquierda
      });
      k.onKeyDown("right", () => {
        player.move(120, 0);   // Mover a la derecha
      });
      k.onKeyDown("up", () => {
        player.move(0, -120);  // Mover hacia arriba
      });
      k.onKeyDown("down", () => {
        player.move(0, 120);   // Mover hacia abajo
      });

      // Ejemplo: al presionar ESC, terminar el juego e ir a la escena "gameOver"
      k.onKeyPress("escape", () => {
        k.go("gameOver");  // Ir a la escena de Game Over
      });
    });
  });
}
