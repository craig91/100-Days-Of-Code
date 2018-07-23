package examples;

public class RobotTester {
    public static void main(String[] args) {
        Robot myRobo = new Robot();
        // new creates a new instance of robot and calls the constructor to initialize the object
        // by assigning a reference type variable to this new instance, we create a link to it that we can
        // use to call its methods.

        myRobo.travel();
    }
}
