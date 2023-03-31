package cinema;
/*
 * Modify Cinema4App to keep a running total of all tickets that the user wishes 
 * to buy. When the programme exits the loop, the total cost should be displayed 
 * to the user.*/
import java.util.Scanner;

public class CinemaApp5 {

	public static void main(String[] args) {
		int age;
		double cost;
		String moreTix;
		double totalCost = 0;
		
		Scanner scan = new Scanner(System.in);
		Cinema cinema = new Cinema();
		
	
		
		do{
			System.out.println("Enter the age for the person: ");
			age = scan.nextInt();
			cinema.setAge(age);
			cinema.compute();
			cost = cinema.getCost();
			totalCost = totalCost + cost;
			System.out.println("The cinema for a person aged: " + age + " is: "+ cost);
			
			System.out.println("Do you want more tickets, yes or no ?" );
			moreTix = scan.next();
		}while(moreTix.equalsIgnoreCase("yes"));
		
		System.out.println("The total cost for the tickets is: " + totalCost );
	}

}

