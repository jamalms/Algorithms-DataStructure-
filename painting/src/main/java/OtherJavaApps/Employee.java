package OtherJavaApps;

import java.util.Arrays;

public class Employee {
    private String name;
    private int age, salary;


    public Employee(String name, int age, int salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return this.age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getSalary() {
        return this.salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }

    @Override
    public String toString() {
        return "{" +
            " name='" + getName() + "'" +
            ", age='" + getAge() + "'" +
            ", salary='" + getSalary() + "'" +
            "}";
    }

    public static void main(String args []){
        int sum = 0;
        double average;
        int max;
        int min;

        //Create Objects
        Employee enda = new Employee("Enda", 34, 10000);
        Employee fred = new Employee("Fred", 45, 20000);
        Employee anna = new Employee("Anna", 50, 30000);

        System.out.println("Employee Enda: " +enda.toString());
        System.out.println("Employee Fred: " +fred.toString());
        System.out.println("Employee Anna: " +anna.toString());


        //<data type> [] <variable name> = new <data type> [5];
        Employee [] employee = new Employee[5];

        employee[0] = enda;
        employee[1] = fred;
        employee[2] = anna;

        System.out.println("Employee array employee: " +Arrays.toString(employee));

        System.out.println("End salary is: " + enda.getSalary());

        // Average
       // sum = enda.getSalary() + fred.getSalary() + anna.getSalary();
        // average = sum / 3;
        for(int i = 0; i < employee.length; i++){
            if(employee[i] != null){
            sum+=employee[i].getSalary();
            }
        }

        //Min
        //initialisation
        min = employee[0].getSalary();
        for(int i = 1; i < employee.length; i++){
            if(employee[i] != null && min > employee[i].getSalary()){
                min = employee[i].getSalary();
            }
         }

        // Max Value
        //initialisation
        max = employee[0].getSalary();
        for(int i = 0; i < employee.length; i++){
           if(employee[i] != null && max < employee[i].getSalary()){
               max = employee[i].getSalary();
           }
        }

	// public void computeMax() {
	// 	//initialisation
	// 	max = cars[0].getMiles();
	// 	// for Loop
	// 	for (int i = 1; i < cars.length; i++) {
	// 		if ( cars[i] != null && max < cars[i].getMiles()) {
	// 			max = cars[i].getMiles();
	// 		}
	// 	}
	// }

        

        System.out.println("The sum is " + sum + " and average is: " + sum/employee.length);
        System.out.println("The Highest Salery is " + max + " and The Lowes Salery is: " + min);
    }

    

}
