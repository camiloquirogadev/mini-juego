import kaboom from "kaboom";
import Personaje from "../components/Personaje";  // Componente para el personaje
import Enemigos from "../components/Enemigos";    // Componente para los enemigos

const Juego = () => {
  useEffect(() => {
    // Inicializar Kaboom
    const k = kaboom({
      width: window.innerWidth,
      height: window.innerHeight,
      background: [0, 0, 0], // Fondo negro
    });

    // Variables globales
    let puntos = 0;
    let nivel = 1;
    let velocidadEnemigos = 50; // Velocidad inicial de los enemigos
    let tiempo = 0; // Temporizador de tiempo transcurrido

    // Escena del juego
    k.scene("juego", () => {
      // Cargar sprites (fondo y personaje)
      k.loadSprite("fondo", "/sprites/fondo.jpg");   // Fondo
      k.loadSprite("personaje", "/sprites/santino.png");  // Personaje

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

    // Limpiar recursos cuando el componente se desmonte
    return () => k.destroy(); // Destruir Kaboom cuando el componente se desmonte
  }, []); // Usamos un arreglo vacío para ejecutar useEffect solo una vez

  return null; // Juego no renderiza contenido en React directamente, Kaboom maneja todo
};

export default Juego;
