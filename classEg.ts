class Player {
  name: string;
  age: number;
  gender: string;

  greet() {
    console.log('Hello, this is: ', this.name);
  }
}

const ajit = new Player();
ajit.name = 'Ajit';
ajit.age = 28;
ajit.gender = 'Male';

const sj = new Player();
sj.name = 'Shivaji';
sj.age = 25;
sj.gender = 'Male';

ajit.greet();
sj.greet();
