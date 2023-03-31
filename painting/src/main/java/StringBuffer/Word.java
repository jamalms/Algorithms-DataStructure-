package StringBuffer;
import javax.swing.JOptionPane;

/*
Develop an application that accept a word from the user and calculates and outputs
of letters in the word. The application should check that only one word was entered.
If more than one word was entered. The application should output a message to the user
and repeat to allow them to enter the word again.
The application should make use of instantiable classes.
Nmae the instantiabale class Word.java
*/

public class Word {
    
    private int numLitters;
    private String word;

    //Constructor
    public Word(){
        numLitters = 0;
        word= " ";
    }
    //Compute method
    public void compute(){
        for(int i =0; i < word.length(); i++){
            numLitters++;
        }
    }

    //Getters and Setters
    public void setWord(String word){
        this.word = word;
    }
    public int getNumLitters(){
        return numLitters;
    }

    public static void main(String[] args) {
        int numLitters;
        String word = " ";
        int numSpaces;

        //create object

        Word myWord = new Word();

        //input

        do{
            numSpaces = 0;
            word = JOptionPane.showInputDialog(null, "Please enter a single word" );
            for(int i = 0; i < word.length(); i++){
                if(word.charAt(i) == ' '){
                    numSpaces++;
                }
            }
        }while(numSpaces >= 1);
        //Process
        myWord.setWord(word);
        myWord.compute();

        //output
        numLitters = myWord.getNumLitters();
        JOptionPane.showMessageDialog(null, "The word: \"" + word +"\", has: " + numLitters+ "letters");
        
    }
}
