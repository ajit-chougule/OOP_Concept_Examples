// Import stylesheets
import './style.css';
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// class Player{
//   name:string;
//   age:number;
//   gender:string;

//   greet(){
//     console.log("Hello, this is: ",this.name);
//   }
// }

// const ajit = new Player();
// ajit.name = "Ajit";
// ajit.age = 28;
// ajit.gender = "Male";

// const sj = new Player();
// sj.name = "Shivaji";
// sj.age = 25;
// sj.gender = "Male";

// ajit.greet();
// sj.greet();

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
