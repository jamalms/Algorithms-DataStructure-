package JavaCodingInterview;

import java.util.Scanner;

/**
 * Sorting names in array java
 *Input =  (Banana, Grapes, Apple)
 Output = {Apple, Banana, Grapes}
 */
public class SortingName {

    public static void main(String[] args) {

        int n;
        String temp;
        Scanner sc = new Scanner(System.in);
        System.out.println("Please eneter the numbers of names you want to sort");
        n = sc.nextInt();
        String names[] = new String[n];
        Scanner sc1 = new Scanner(System.in);
        System.out.println("Enter all the names you want to sort");
        for (int i = 0; i < n; i++) {
            names[i] = sc1.nextLine();
        }

        //Comparison 
        for(int i=0; i<n; i++) {
            for(int j=1+1; j<n; j++){
                if(names[i].compareTo(names[j]) >0) {
                    temp = names[i];
                    names[i] = names[j];
                    names[j] = temp;
                }
            }
        }
        System.out.println("Sorted Array = ");

        for (String name : names) {
            System.out.println(name);
        }
        
        
    }
    
}
