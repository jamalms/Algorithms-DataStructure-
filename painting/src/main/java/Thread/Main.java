package Thread;

// Thread
// In computer programming, a thread is a unit of execution within a process. A process is a program that is running on the computer, and it can have one or more threads. Each thread represents a single sequence of instructions that can be executed independently of other threads within the same process.

// Threads are used to achieve concurrency, which means that multiple tasks can be executed simultaneously. This can improve the performance and responsiveness of the program, especially when dealing with I/O operations or when performing long-running tasks that would otherwise block the main thread.

// Threads share the same memory space as the process they belong to, so they can access the same variables, data structures, and resources. However, this also means that multiple threads can access the same data at the same time, which can lead to race conditions and other synchronization issues.

// To avoid such problems, threads must coordinate their access to shared resources using synchronization mechanisms such as locks, semaphores, and condition variables. These mechanisms ensure that only one thread can access a shared resource at a time, and that threads can communicate and wait for each other to complete certain operations.

// Overall, threads are a powerful tool for concurrent programming, but they require careful design and management to avoid common pitfalls and ensure correct behavior.


//package mypackage; // add package declaration

// // Define a public class named Main
public class Main {
    // Define a public static void method named main that takes an array of strings as an argument
    public static void main(String[] args) {
        // Create a new instance of MyThread with the name "Thread 1" and store it in a variable named thread1
        MyThread thread1 = new MyThread("Thread 1");
        // Create a new instance of MyThread with the name "Thread 2" and store it in a variable named thread2
        MyThread thread2 = new MyThread("Thread 2");
        // Start the execution of thread1
        thread1.start();
        // Start the execution of thread2
        thread2.start();
    }
}

// Define a class named MyThread that extends Thread
class MyThread extends Thread {
    // Define a private String variable named name to store the thread's name
    private String name;
    
    // Define a constructor that takes a String argument named name
    public MyThread(String name) {
        // Store the name argument in the name variable
        this.name = name;
    }
    
    // Define a public void method named run
    public void run() {
        // Loop from 0 to 4
        for (int i = 0; i < 5; i++) {
            // Print the thread's name and the current iteration count to the console
            System.out.println(name + ": " + i);
            // Use the Thread.sleep method to pause the thread's execution for 1 second
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}


// This code defines a MyThread class that extends the Thread class and overrides its run() method. The run() method contains a loop that prints the thread's name and a number from 0 to 4, and then sleeps for 1 second.

// In the Main class, we create two MyThread objects and start them using the start() method. This method starts the thread's execution and calls its run() method in a separate thread of control.

// When we run this program, we should see the two threads executing concurrently and printing their output to the console. For example:

// yaml
// Copy code
// Thread 1: 0
// Thread 2: 0
// Thread 1: 1
// Thread 2: 1
// Thread 1: 2
// Thread 2: 2
// Thread 1: 3
// Thread 2: 3
// Thread 1: 4
// Thread 2: 4
// Note that the order of the output may vary between runs, since the threads are running concurrently and may be interleaved in different ways. Also note that we use the sleep() method to introduce a delay between the output lines, which is not strictly necessary but helps to make the output more readable.

//Javascript code:
// Unfortunately, JavaScript is not an object-oriented language in the same way that Java is, so it does not support classes and threads in the same way. However, you can achieve similar functionality in JavaScript using functions and timers.

// Here is an example of how you can simulate the behavior of the Java code using JavaScript:

// function MyThread(name) {
//     this.name = name;
    
//     this.run = function() {
//         for (var i = 0; i < 5; i++) {
//             console.log(this.name + ": " + i);
//             setTimeout(function() {}, 1000);
//         }
//     }
// }

// var thread1 = new MyThread("Thread 1");
// var thread2 = new MyThread("Thread 2");

// thread1.run();
// thread2.run();

// In this example, we define a MyThread function that takes a name parameter and creates an object with a run method. The run method contains a loop that logs the thread's name and a number from 0 to 4 to the console, and then uses the setTimeout function to introduce a delay of 1 second between each iteration of the loop.

// We then create two MyThread objects named thread1 and thread2 and call their run methods to start their execution.

// Note that this is not a perfect translation of the Java code to JavaScript, as there are some differences in the way that threads are implemented in these two languages. However, this code should give you a general idea of how you can achieve similar functionality in JavaScript.

