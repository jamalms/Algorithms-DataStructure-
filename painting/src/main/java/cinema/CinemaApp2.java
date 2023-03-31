package cinema;

import java.util.Scanner;

public class CinemaApp2 {
    public static void main(String args []){
        int age;
        double cost;
        Scanner scan = new Scanner(System.in);
        Cinema cinema = new Cinema();

        for(int i = 0; i < 2; i++)
        {
            System.out.println("Enter the age for each person: " + (1+i));
            age = scan.nextInt();
            cinema.setAge(age);
            cinema.compute();
            cost = cinema.getCost();
            System.out.println("The cinema for a person aged: " + age + " is: " + cost);
        }
    }
}
