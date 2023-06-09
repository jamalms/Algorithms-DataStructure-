package LinkedList;

public class Node<T extends Comparable<T>> {

    //This is the data we store in the data structure
    private T data;
    //This is why linked lists need more memory that arrays
    private Node<T> nextNode;

    public Node(T data) {
        this.data = data;
    }


    public T getData() {
        return this.data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public Node<T> getNextNode() {
        return this.nextNode;
    }

    public void setNextNode(Node<T> nextNode) {
        this.nextNode = nextNode;
    }


    @Override
    public String toString() {
        return "" + data;
    }

    
}
