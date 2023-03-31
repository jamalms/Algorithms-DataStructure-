package JavaCodingInterview;
/*
Write a java program to check given String is Panagram or not.
Check this sentence: 
The quick brown fox jumps over the lazy dog.

We need to loop from A to z
*/


public class Panagram {
    
    public static void main(String args []) {
        String s = "The quick brown fox jumps over the lazy dog";
        String c = "Jamal";
        System.out.println(isPanagram(s.toLowerCase()));
        System.out.println(isPanagram(c.toLowerCase()));
    }

    private static boolean isPanagram(String s) {
        if (s.length() < 26 ) {
            return false;
        } else {
            for(char ch = 'a'; ch <= 'z'; ch++){
                if(s.indexOf(ch) < 0){
                    return false;
                }
            }
        } return true;
    }
}
