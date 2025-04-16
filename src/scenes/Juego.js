import kaboom from "kaboom";
import Personaje from "../components/Personaje";  // Componente para el personaje
import Enemigos from "../components/Enemigos";    // Componente para los enemigos

const Juego = () => {
  const k = kaboom(); // Inicializar Kaboom

  // Variables globales
  let puntos = 0;
  let nivel = 1;
  let velocidadEnemigos = 50; // Velocidad inicial de los enemigos
  let tiempo = 0; // Temporizador de tiempo transcurrido

  // Escena del juego
  k.scene("juego", () => {
    // Fondo animado
    k.add([
      k.sprite("fondo", { width: window.innerWidth, height: window.innerHeight }),
      k.layer("bg"),
      k.fixed(),
    ]);

    // Movimiento del fondo
    k.action("bg", (fondo) => {
      fondo.move(-10, 0); // Mueve el fondo hacia la izquierda
      if (fondo.pos.x < -window.innerWidth) {
        fondo.pos.x = 0; // El fondo se repite cuando se va
      }
    });

    // Llamar a los componentes del juego (personaje y enemigos)
    Personaje(k);
    Enemigos(k, velocidadEnemigos);

    // Mostrar puntuación y nivel
    k.action(() => {
      k.drawText(`Puntos: ${puntos}`, { x: 20, y: 20, size: 24 });
      k.drawText(`Nivel: ${nivel}`, { x: window.innerWidth - 150, y: 20, size: 24 });
      k.drawText(`Tiempo: ${tiempo}`, { x: window.innerWidth - 150, y: 50, size: 24 });
    });

    // Incrementar nivel y aumentar velocidad de los enemigos
    k.action(() => {
      if (puntos >= 100 * nivel) { // Subir de nivel después de 100 puntos por nivel
        nivel++;
        velocidadEnemigos += 10;  // Aumentar velocidad de los enemigos
        console.log(`Nivel ${nivel} alcanzado!`);
      }
    });

    // Crear obstáculos (bloques que el jugador debe evitar)
    if (Math.random() < 0.02) {
      const obstaculo = k.add([
        k.rect(40, 40), // Tamaño del obstáculo
        k.pos(window.innerWidth, Math.random() * window.innerHeight), // Posición aleatoria
        k.color(1, 0, 0), // Color rojo
        k.area(),
        k.maybe(),
      ]);

      obstaculo.move(-100, 0); // Movimiento hacia la izquierda

      // Colisión con el personaje
      k.collides("personaje", obstaculo, () => {
        puntos -= 5; // El jugador pierde puntos si toca un obstáculo
        k.destroy(obstaculo); // Destruir el obstáculo
      });
    }

    // Crear power-ups (objetos que el jugador puede recoger para ganar puntos)
    if (Math.random() < 0.03) {
      const powerUp = k.add([
        k.sprite("powerup"),  // Supón que tienes un sprite para los power-ups
        k.pos(window.innerWidth, Math.random() * window.innerHeight),
        k.area(),
        k.scale(0.5),
      ]);

      powerUp.move(-100, 0); // Movimiento hacia la izquierda

      k.collides("personaje", powerUp, () => {
        puntos += 50; // El jugador gana puntos al recoger un power-up
        k.destroy(powerUp); // Destruir el power-up
      });
    }

    // Incrementar tiempo
    k.action(() => {
      tiempo++;
    });

    // Colisiones entre personaje y enemigos
    k.collides("personaje", "enemigos", (personaje, enemigo) => {
      puntos += 10; // Aumentar puntos al evitar enemigos
      k.destroy(enemigo); // Destruir al enemigo cuando se le toca
    });

    // Si el personaje muere, cambiar a la escena de Game Over
    k.collides("personaje", "enemigos", () => {
      k.go("gameOver"); // Transición a la pantalla de Game Over
    });
  });

  // Iniciar la escena de juego
  k.start("juego");

  return () => k.destroy();
};

export default Juego;
