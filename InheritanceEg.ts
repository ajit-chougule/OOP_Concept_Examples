class Animal {
  // Animal HAS-A weight, Speed
  weight: number;
  speed: number;

  makeNoise(noise: string) {
    console.log(noise);
  }
  running() {
    console.log('Running');
  }
}

// Carnivorous IS-A Animal
class Carnivorous extends Animal {
  color: string;
  //overriding makeNoice() method
  makeNoise(noise: string) {
    console.log(noise + ' very loudly');
  }
  running() {
    console.log('running very fast');
    // extending Animal's running method
    super.running();
  }
  //Implementing a new method specific to dog
  findingThings() {
    console.log('Finding Links');
  }
}

const dog = new Carnivorous();
dog.weight = 20;
dog.speed = 37;
dog.makeNoise('Bark');
dog.running();
dog.findingThings();
