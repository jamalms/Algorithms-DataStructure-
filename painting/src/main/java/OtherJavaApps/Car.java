package OtherJavaApps;

import java.util.Scanner;

public class Car {
    private String brand;
    private int year;
    private String fuel;
    private long miles;

    private Car[] cars = new Car[5];
    private long min, max;
    private double sum, average;

    //Setters & Getters


    public String getBrand() {
        return this.brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public int getYear() {
        return this.year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getFuel() {
        return this.fuel;
    }

    public void setFuel(String fuel) {
        this.fuel = fuel;
    }

    public long getMiles() {
        return this.miles;
    }

    public void setMiles(long miles) {
        this.miles = miles;
    }

    public Car[] getCars() {
        return this.cars;
    }

    public void setCars(Car[] cars) {
        this.cars = cars;
    }

    public long getMin() {
        return this.min;
    }

    public void setMin(long min) {
        this.min = min;
    }

    public long getMax() {
        return this.max;
    }

    public void setMax(long max) {
        this.max = max;
    }

    public double getSum() {
        return this.sum;
    }

    public void setSum(double sum) {
        this.sum = sum;
    }

    public double getAverage() {
        return this.average;
    }

    public void setAverage(double average) {
        this.average = average;
    }
    

    //Compute methods

    //Average
    public void computeAvg(){
        //initialization
        sum = 0;
        //for loop
        for(int i =0; i < cars.length; i++){
            if(cars[i] != null){
                //sum = sum + cars[i].getMiles();
                sum += cars[i].getMiles();
            }
        }
        average = sum/cars.length;
    }

    //compute Max value
    public void computeMax(){
        //initialization
        max = cars[0].getMiles();
        //for loop
        for(int i =0; i <cars.length; i++){
            if(cars[i] != null && max < cars[i].getMiles()){
                max = cars[i].getMiles();
            }
        }
    }

    //compute Min value
    public void computeMin(){
        //initialization
        min = cars[0].getMiles();
        //for loop
        for(int i =0; i < cars.length; i++){
            if(cars[i] != null && min > cars[i].getMiles()){
                min = cars[i].getMiles();
            }
        }
    }


    public static void main(String args []){
        
        // Dcleration vaariables
        int index = 0;
        int option = 0;
        Car[] cars = new Car[5];

        //Create Object
        Scanner sc = new Scanner(System.in);
        Car myC = new Car();

        //Input
        System.out.println("PLEASE REGISTER THE ITEMS");
		System.out.println("Brand = letters only (Ex. Audi, Opel, BMW, Audi.)");
		System.out.println("Year = only numbers (Ex. 2021,1999)");
		System.out.println("Fuel Type = letters only (Ex. Petrol, Diesel, Eletric)");
		System.out.println("Mileage = only numbers, no dots (Ex. 18000, 17890, 200000)");
		System.out.println("-----------------------------------------------------------");

        while (option != 6) {
			System.out.println(" ");
			System.out.println("Application Menu - Item Type: GARAGE ");
			System.out.println(" ");
			System.out.println("1.Provide the details of an item");
			System.out.println("2.Display the details of the last entered item");
			System.out.println("3.The Car with the highest mileage");
			System.out.println("4.The Car with the lowest mileage");
			System.out.println("5.The average mileage of all the Cars entered until that point");
			System.out.println("6.Exit Application");
			System.out.println(" ");
			System.out.println("Enter your choise:");
			option = sc.nextInt();

			if (option > 6 || option < 0) {
				System.out.println("ALERT! - Invalid option, please select one of the options from the Menu - 1 to 6 - ");
			}

            switch (option) {
				case 1:

					// 1. Provide the details of an item:
					myC = new Car();
					System.out.print("Insert the BRAND: ");
					myC.setBrand(sc.next());

					System.out.print("Insert the YEAR: ");
					myC.setYear(sc.nextInt());

					System.out.print("Insert the FUEL TYPE: ");
					myC.setFuel(sc.next());

					System.out.print("Insert the MILEAGE: ");
					myC.setMiles(sc.nextLong());

					if (index > 14) {
						System.out.println(" You can't add more data... ");
						break;
					}

					cars[index] = myC;

					// Process
					myC.setCars(cars);
					myC.computeAvg();
					myC.computeMax();
					myC.computeMin();
					index++;
					break;

				case 2:
					// 2. Display the details of the last entered item
					Car lastEntered = cars[index - 1];

					if (lastEntered == null) {
						System.out.println("There isn't data to display.");
						break;
					}

					System.out.println(" ");
					System.out.println("----------------------------------------------------------");
					System.out.println("-- THIS IS THE LAST DATA INPUTED");
					System.out.println("-- Brand: " + lastEntered.getBrand());
					System.out.println("-- Year: " + lastEntered.getYear());
					System.out.println("-- Fuel Type: " +  lastEntered.getFuel());
					System.out.println("-- Mileage: " + lastEntered.getMiles());
					System.out.println("----------------------------------------------------------");
					System.out.println(" ");
					break;

				case 3:
					// 3. The Car with the highest mileage
					System.out.println(" ");
					System.out.println("----------------------------------------------------------");
					System.out.println("THE HIGHEST MILEAGE REGISTRED:  " + myC.getMax());
					System.out.println("----------------------------------------------------------");
					System.out.println(" ");
					break;

				case 4:
					// 4. The Car with the lowest mileage
					System.out.println(" ");
					System.out.println("----------------------------------------------------------");
					System.out.println("THE LOWEST MILEAGE REGISTRED: " + myC.getMin());
					System.out.println("----------------------------------------------------------");
					System.out.println(" ");
					break;

				case 5:
					// 5. The average mileage of all the Cars entered until that point
					System.out.println(" ");
					System.out.println("----------------------------------------------------------");
					System.out.println("THE AVERAGE MILEAGE REGISTRED:  " + myC.getAverage());
					System.out.println("----------------------------------------------------------");
					System.out.println(" ");
					break;
			}
		}

        
    }
}
