//complete this code
class Animal {
	constructor(species){
		this.species =  species;
	}

	get species(){
	   console.log(this.species);
	}

    function makeSound(sound){
		console.log(this.species, "males the sound of" , sound);
	}
}

class Cat extends Animal{
	super(species);

	function purr(){
		console.log("purr");
	}
	
}

class Dog extends Animal {
	super(species);

	function bark(){
		console.log("woof");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
