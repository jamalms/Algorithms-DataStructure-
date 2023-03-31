package JavaCodingInterview;

import java.util.Scanner;

public class CharacterOccurences {
    public static void main(String args []){
        Scanner scan = new Scanner(System.in);
    System.out.println("Enter a word");
    String str = scan.nextLine();
    int initialLength = str.length();
    Scanner scan1 = new Scanner(System.in);
    System.out.println("Enter the character to find the occurence");
    String str1 = scan1.nextLine();
    str = str.replace(str1, "");
    int finalLength=str.length();
    System.out.println("Total number of occurence of character "
    + str1 + " " +(initialLength-finalLength));
    }
}
