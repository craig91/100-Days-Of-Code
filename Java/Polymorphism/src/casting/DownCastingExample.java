package casting;

public class DownCastingExample {
    public static void main(String[] args) {

        Animal animalReference = new Dog(); // Upcasting a Dog object to an Animal reference type

        Dog dogReference = (Dog) animalReference; // Downcasting the Dog object referenced by animalReference into a Dog-typed reference variable. Neither of these operations change the nature of the object itself - it always was, and always will be, a Dog!

        Bird birdReference = (Bird) animalReference; // IDE wont complain, but this won't work - it will throw a ClassCastException.

        if (animalReference instanceof Dog) // use instanceof to check if the object pointed to by a reference variable has an is-a relationship to particular class.
            dogReference = (Dog) animalReference;
        else
            System.out.println("animalReference does not point to a Dog object");
    }
}

class Animal{}

class Dog extends Animal{}

class Bird extends Animal{}
