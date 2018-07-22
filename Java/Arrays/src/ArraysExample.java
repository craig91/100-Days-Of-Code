public class ArraysExample {
    public static void main(String[] args) {

        int[] firstArray = new int[3]; // Data Type and size of the array [3]
        int[] secondArray = {1, 2, 3}; // If you know the values you want to use, plug them in manually using the curly braces.

        firstArray[0] = 2;
        firstArray[1] = 4;
        firstArray[2] = 6;

        System.out.println("The value in firstArray[1] is " + firstArray[1]);

        System.out.println("The length of secondArray is " + secondArray.length);
    }
}
