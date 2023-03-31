package JavaCodingInterview;

// Here is an example Java code that prompts the user to input an array of numbers, 
//and then calculates and displays the lowest, highest, and average values:

import java.util.Scanner;

public class ArrayStats {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        // Prompt the user to enter the size of the array
        System.out.print("Enter the size of the array: ");
        int size = input.nextInt();

        // Create an array of the specified size
        double[] numbers = new double[size];

        // Prompt the user to enter the numbers in the array
        for (int i = 0; i < size; i++) {
            System.out.print("Enter number " + (i+1) + ": ");
            numbers[i] = input.nextDouble();
        }

        // Calculate the lowest, highest, and average values
        double lowest = numbers[0];
        double highest = numbers[0];
        double sum = numbers[0];
        for (int i = 1; i < size; i++) {
            if (numbers[i] < lowest) {
                lowest = numbers[i];
            }
            if (numbers[i] > highest) {
                highest = numbers[i];
            }
            sum += numbers[i];
        }
        double average = sum / size;

        // Display the results
        System.out.println("Lowest value: " + lowest);
        System.out.println("Highest value: " + highest);
        System.out.println("Average value: " + average);
    }

}
