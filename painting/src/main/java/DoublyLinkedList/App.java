package DoublyLinkedList;

import java.util.LinkedList;

public class App {
    
    public static void main(String args []) {

        LinkedList<String> dll = new LinkedList<>();
        dll.addFirst("Eyad");
        dll.addFirst("Jamal");
        dll.addFirst("Mahmoud");

        dll.addLast("Eyad");
        dll.addLast("Jamal");
        dll.addLast("Mahmoud");

        dll.removeFirst();
        dll.removeLast();

        for(String name : dll) {
            System.out.println(name);
        }

        DoublyLinkedList<String> names = new DoublyLinkedList<>();

        names.insert("Jamal");
        names.insert("Adam");
        names.insert("Rani");
        names.insert("Nour");

        //names.traverseBackward();
       // System.out.println("*******************************");
        //names.traverseForward();
    }
}
