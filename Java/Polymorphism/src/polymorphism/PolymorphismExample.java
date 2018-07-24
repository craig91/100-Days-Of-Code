package polymorphism;

public class PolymorphismExample {
    public static void main(String[] args) {
        Animal myAnimal = new Animal(); // Both of these variables are of the "Animal" type.
        Animal myDog = new Dog();

        myDog.eat();

        System.out.println(myDog.hasFur);
    }
}

class Animal {
    public boolean hasFur = false;

    public void eat() {
        System.out.println("I eat food");
    }
}

class Dog extends Animal {
    public boolean hasFur = true;

    public void eat() {
        System.out.println("I eat kibble");
    }

    public void bark() {
        System.out.println("Woof!");
    }
}

// You can only use polymorphism when 2 conditions are met.
// The object type must have an inheritance relationship with the reference variable type.
// you cannot store an object in an unrelated reference variable.
// The reference type cannot be more specific than the object type.