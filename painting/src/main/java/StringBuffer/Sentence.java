package StringBuffer;
import javax.swing.JOptionPane;

public class Sentence {

    String sentence;
    int numWords;

    //constructor
    public Sentence(){
        sentence = " ";
        numWords = 1;
    }

    // compute
    public void compute(){
        for(int i = 0; i < sentence.length(); i++){
            if(sentence.charAt(i) == ' '){
                numWords++;
            }
        }
    }
    //Getter and Setters
    public void setSentence(String sentence){
        this.sentence = sentence;
    }

    public int getNumWords(){
        return numWords;
    }

    public static void main(String args []){
         String sentence;
         int numWords;

         Sentence mySen = new Sentence();

         //INPUT
         sentence = JOptionPane.showInputDialog(null, "Please enter a sentence");
         mySen.setSentence(sentence);

         //PROCESS&OUTPUT
         mySen.compute();
         numWords = mySen.getNumWords();
         JOptionPane.showMessageDialog(null, "The sentence: \"" + sentence + "\",  has: " + numWords + " words ");
    }
    
}
