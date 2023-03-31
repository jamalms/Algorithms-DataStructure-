package Arrays;

import java.util.Arrays;

// Anagram problem overview

/*
Your task is to construct an algorithm to check whether two words (or phrases) are anagrams or not!

"An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once"

For example: restful and fluster are anagrams.
*/

public class Anagram {
    public boolean solve(char[] s1, char[] s2){
        if(s1.length != s2.length)
            return false;
        
        // sort the letters of the srings
        // O(NlongN) this is the "bottoleneck" of the algorithem
        Arrays.sort(s1);
        Arrays.sort(s2);

        //consider all the letters one by one and we have to
        // compare these letters
        // O(N) but the overall running time is O(NlongN) + O(N) = O(NlongN)
        for(int i=0; i<s1.length; i++){
            if(s1[i] != s2[i])
            return false;
        }
            return true;
        
    }

    public static void main(String args []){

        Anagram problem = new Anagram();
        System.out.println(problem.solve("restful".toCharArray(), "fluster".toCharArray()));
        System.out.println(problem.solve("apple".toCharArray(), "orange".toCharArray()));
    }

    
}
