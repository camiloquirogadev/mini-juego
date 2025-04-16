const Personaje = (k) => {
    const personaje = k.add([
      k.sprite("personaje"),
      k.pos(200, 200),
      k.area(),
      k.body(),
    ]);
  
    const velocidad = 100;
  
    k.keyDown("left", () => personaje.move(-velocidad, 0));
    k.keyDown("right", () => personaje.move(velocidad, 0));
    k.keyDown("up", () => personaje.move(0, -velocidad));
    k.keyDown("down", () => personaje.move(0, velocidad));
  
    k.keyPress("space", () => {
      if (personaje.isGrounded()) {
        personaje.jump(200);
      }
    });
  };
  
  export default Personaje;
  