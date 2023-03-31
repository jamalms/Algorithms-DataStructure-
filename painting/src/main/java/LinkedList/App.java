package LinkedList;

public class App {

    public static void main(String args []) {

        LinkedList<Person> people = new LinkedList<>();

        //Person p = new Person(23, "Adam");

        //people.insert(p);

        people.insert(new Person(23, "Adam"));
        people.insert(new Person(34, "Danial"));
        people.insert(new Person(56, "Michale"));

        System.out.println(people.getMiddleNode());

        //people.remove(p);
        //people.traverse();

        // LinkedList<String> names = new LinkedList<String>();

        // names.insert("Adama");
        // names.insert("Danial");
        // names.insert("Jamal");

        // names.traverse();
        // System.out.println("------------");
        // names.remove("Danial");
        // names.traverse();
    }
    
}
