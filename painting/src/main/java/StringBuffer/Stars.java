package StringBuffer;

import javax.swing.JOptionPane;

/*
Develop an application that accepts a word from the user, 
and prints a * for each letter of the word.
*/
public class Stars {
    public static void main(String args []){
        String word, newWord;

        //input
        word = JOptionPane.showInputDialog(null, "Please enter a word to be replaced by *");

        //process and output
        for(int i = 0; i < word.length(); i++){
            System.out.print("*");
        }
    }
}
