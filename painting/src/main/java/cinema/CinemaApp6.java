package cinema;
import java.util.Scanner;
/*
 * Modify Cinema5App so that there is an upper limit of 4 tickets per person.  
 * When this limit is reached, the user should not be able to purchase
 * any more tickets.*/

public class CinemaApp6 {
    public static void main(String args []){
        int age;
        double cost;
        int numTix = 0;
        String moreTix;
        double totalCost = 0;

        Scanner scan = new Scanner(System.in);
        Cinema cinema = new Cinema();

        do {
            System.out.println("Enter the age for the person: " + (numTix + 1));
            age = scan.nextInt();
            cinema.setAge(age);
            cinema.compute();
            cost = cinema.getCost();
            totalCost = totalCost + cost;
            numTix++;
            System.out.println("The Cinema ticket for a person aged: " + age + " is: " + cost);
            System.out.println("Do you want more tickets (MAX is 4), yes or no?");
            moreTix = scan.next();


        } while(moreTix.equalsIgnoreCase("yes") && numTix < 4);
        
        System.out.println("The total cost for the tickets is: " +totalCost);

    }
}
