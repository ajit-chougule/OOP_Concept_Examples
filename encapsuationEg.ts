class Player {
  private health: number;
  private speed: number;

  setHealth(health: number) {
    if (health < 0) {
      console.log('Health cannot be less than zero');
      return;
    }
    this.health = health;
  }
  getHealth() {
    return this.health;
  }
  setSpeed(speed: number) {
    this.speed = speed;
  }
  getSpeed() {
    return this.speed;
  }
}

const mario = new Player();
mario.setHealth(-8);
mario.setHealth(8);
mario.setSpeed(6);

console.log('Health: ', mario.getHealth());
console.log('Speed: ', mario.getSpeed());
