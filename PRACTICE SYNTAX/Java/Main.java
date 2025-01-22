// import java.util.Scanner;
// import java.util.Random;

public class Main {

    public static void main(String[] args){
/* PRINTING
        System.out.println("This is the FIRST output");
        System.out.print("and this is the SECOND line.\n");

        //TIP: "sout" + Tab = System.out.println();

        System.out.println("Now this line was made from a shortcut");
*/
/*
        //READING USER INPUT (requires line 1)
        Scanner scanner = new Scanner(System.in);

        //get age (number)
        System.out.print("Enter your age: ");
        int age = scanner.nextInt(); //reads the IMMEDIATE next integer

        //get name (string)
        System.out.print("Enter your name: ");
        String name = scanner.next(); //reads the IMMEDIATE next string

        System.out.println("Hello " + name);
        System.out.println("You are " + age + " years old");

//      OTHER SCANNER METHODS:
//        nextLine() //reads the entire line including spaces
//        nextInt() //reads the next IMMEDIATE integer
//        nextDouble() //reads the next IMMEDIATE double
//        nextBoolean() //reads the next IMMEDIATE boolean

        scanner.close();
*/

/*
        //GENERATE RANDOM NUMBERS (requires line 2)
        Random random = new Random(); //similar methods with Scanner
        int number = random.nextInt(1, 6); //1 inclusive, 6 exclusive

        System.out.println(number);
*/

/*
        //MATH EXERCISES

        //Hypotenuse: c² = Math.sqrt(a² + b²)
        Scanner scanner = new Scanner(System.in);
        double a, b, c;

        System.out.print("Enter value of a: ");
        a = scanner.nextDouble();
        System.out.print("Enter value of b: ");
        b = scanner.nextDouble();

        c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        System.out.println("The hypotenuse (side c) is: " + c);

        //Get circumference, area, and volume of a circle/sphere
        double radius, circumference, area, volume;
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter radius: ");
        radius = scanner.nextDouble();

        circumference = 2 * Math.PI * radius; // 2πr
        area = Math.PI * Math.pow(radius, 2); // πr²
        volume = (4.0 / 3.0) * Math.PI * Math.pow(radius, 3); // (4/3)πr³

        System.out.printf("The circumference is %.1fcm\n", circumference);
        System.out.printf("The area is %.1fcm²\n", area);
        System.out.printf("The volume is %.1fcm³\n", volume);
*/
    }
}
