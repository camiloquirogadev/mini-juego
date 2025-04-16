const Enemigos = (k) => {
    const enemigo = k.add([
      k.sprite("enemigo"),
      k.pos(500, 300),
      k.area(),
      k.body(),
    ]);
  
    k.action(enemigo, () => {
      enemigo.move(30, 0);
      if (enemigo.pos.x > window.innerWidth) {
        enemigo.pos.x = -50; // Cuando el enemigo sale de la pantalla, vuelve
      }
    });
  
    // Colisión con el personaje
    k.collides("personaje", enemigo, () => {
      k.go("gameOver");
    });
  };
  
  export default Enemigos;
  