package examples;


// The abstract class cannot be instantiated and can only be extended (inherited).
// Any class with any abstract methods becomes an abstract class and must be declared as such.

// If a child class extends an abstract class, it must override all inherited abstract methods to provide an implementation of its own.

abstract class Animal { // abstract class to only be inherited.

    public void eat() { // "concrete" or normal method eat().
        System.out.println("The animal munches on some food");
    }

    abstract void move();

    /* All of these methods will be inherited */
    /* The abstract method guarantees that each "concrete sub class will be forced to define implementation details for itself */
}

/* -------------------------- */
class Dog extends Animal {
    public void move() {
        // overridden the abstract move() method
        System.out.println("The dog walks around.");
    }

    public void beg() {
        System.out.println("The dog looks cute to get food");
    }
}
/* --------------------------- */

public class AbstractExample {
    public static void main(String[] args) {
        Dog myDog = new Dog();
        myDog.eat();
        myDog.move();
        myDog.beg();
    }
}
