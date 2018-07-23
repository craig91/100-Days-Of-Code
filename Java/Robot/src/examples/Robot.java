package examples;

public class Robot {
    private int maxSpeed; // instance variable.
                            // it has this name because each instance of the Robot class can have its own personal max speed.
                            // its private because nothing can see it outside of the robot class.

    public Robot() {
        this.maxSpeed = 1;
    }
    public int getMaxSpeed() {
        return maxSpeed;
    }



    // "setter method" You can set the allowable maxSpeed here if you wish.
    // we test to make sure the maxspeed provided is greater than or equal to 0.

    public void setMaxSpeed(int maxSpeed) {
        if(maxSpeed >= 0)
            this.maxSpeed = maxSpeed;
        else
            this.maxSpeed = 0;
    }

    public void travel() {
        System.out.println("The robot moves a distance of " + maxSpeed + " units.");
    }
}
