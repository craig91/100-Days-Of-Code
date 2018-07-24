package examples;

class StaticDemo {
    static int counter = 0; // class variable
    int number = 0; // instance variable

    public StaticDemo() {
        counter++;
        number++;
    }
}


/* Static defines class variables and methods
* also static is globally available to all instances of a class.
 * can only use other static members within the same class
 * you can use a static member with a  . (dot) operator on the class without instantiating the class first.*/

// Static variable are shared across all instances of a class