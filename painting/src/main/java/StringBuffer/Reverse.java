package StringBuffer;
import javax.swing.JOptionPane;
/*
You have been assked to develop an application that accepts a word from the user
reverse and saves the reversed word as new and oututs the new word.
The application should make use instantiable classes
*/
public class Reverse {
    private String word, newWord;
    private StringBuffer strBuff;

    //constructor
    public Reverse(){
        word = " ";
        newWord = " ";
        strBuff = new StringBuffer();
    }

    //Compute
    public void compute(){
        for(int i = (word.length() - 1); i >=0; i--){
            strBuff.append(word.charAt(i));
        }
        newWord = strBuff.toString();
    }
    
    //Getters and Setters
    public String getNewWord(){
        return newWord;
    }
    public void setWord(String word){
        this.word = word;
    }

    public static void main(String args []){
        String word, newWord;

        //create object
        Reverse myWord = new Reverse();

        //input
        word = JOptionPane.showInputDialog(null, "Please enter a word to be reversed");
        myWord.setWord(word);

        //process
        myWord.compute();

        //output
        newWord = myWord.getNewWord();
        JOptionPane.showMessageDialog(null, "The word: \"" + word +"\", reversed is: " +newWord);
    }
}
