package JavaCodingInterview;

import java.util.HashSet;

/*
Java program to find longest substring without repeting
"abcdab" ==> abcd, bcda, cdab 
*/
public class Substring {
    public static void main(String args []){
        String str = "abcdab"; //abcd
        System.out.println(longest(str));
    }

    private static String longest(String str) {
        HashSet<Character> set = new HashSet<>();
        String longestOverall = "";
        String longestTillnow = "";

        for (int i = 0; i <str.length(); i++){
            char c = str.charAt(i);
            if(set.contains(c))
            {
                longestTillnow = "";
                set.clear();
            }
            set.add(c);
            longestTillnow+=c;

            if(longestTillnow.length() > longestOverall.length()){
                longestOverall=longestTillnow;
            }
        }
        return longestOverall;
    }
}
