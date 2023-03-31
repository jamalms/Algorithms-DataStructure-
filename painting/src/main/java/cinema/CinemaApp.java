package cinema;

import java.util.Scanner;

public class CinemaApp {
    public static void main(String args []){
        int age;
        double cost;

        //declare objects
        Scanner scan = new Scanner(System.in);
        Cinema cinema = new Cinema();

        //input
        System.out.println("Enter your age");
        age = scan.nextInt();
        cinema.setAge(age);

        //process & output
        cinema.compute();
        cost = cinema.getCost();
        System.out.println("Your admisiion is: " +cost);
    }
}