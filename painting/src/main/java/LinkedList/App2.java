package LinkedList;

public class App2 {
    public static void main(String args []) {

        List<Integer> myLinkedList = new LinkedList<>();

        myLinkedList.insert(10);
        myLinkedList.insert(2);
        myLinkedList.insert(13);
        myLinkedList.insert(5);

        myLinkedList.traverse();
        ((LinkedList<Integer>) myLinkedList).reverse();
        myLinkedList.traverse();
    }
    
}
