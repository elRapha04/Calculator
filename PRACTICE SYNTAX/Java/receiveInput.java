import java.util.Scanner;

public class receiveInput {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

/*
    SOME SCANNER METHODS:
      nextLine() //reads the entire line including spaces
      nextInt() //reads the next IMMEDIATE integer
      nextDouble() //reads the next IMMEDIATE double
      nextBoolean() //reads the next IMMEDIATE boolean
*/
        System.out.print("Please enter your name: ");
        String name = scanner.nextLine();
        System.out.printf("Hello there, %s\n", name);

        System.out.print("\nPlease enter your age: ");
        int age = scanner.nextInt();
        System.out.printf("I see that you are %d years old!", age);
    }
}
