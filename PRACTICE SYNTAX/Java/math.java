import java.util.Scanner;

public class math {
    public static void main(String[] args){

        Scanner scanner = new Scanner(System.in);

        //MATH EXERCISES

        //Hypotenuse: c² = Math.sqrt(a² + b²)
            double a, b, c;

            System.out.print("Enter value of a: ");
            a = scanner.nextDouble();
            System.out.print("Enter value of b: ");
            b = scanner.nextDouble();

            c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
            System.out.println("The hypotenuse (side c) is: " + c);

        //Get circumference, area, and volume of a circle/sphere
            double radius, circumference, area, volume;

            System.out.print("Enter radius: ");
            radius = scanner.nextDouble();

            circumference = 2 * Math.PI * radius; // 2πr
            area = Math.PI * Math.pow(radius, 2); // πr²
            volume = (4.0 / 3.0) * Math.PI * Math.pow(radius, 3); // (4/3)πr³

            System.out.printf("The circumference is %.1fcm\n", circumference);
            System.out.printf("The area is %.1fcm²\n", area);
            System.out.printf("The volume is %.1fcm³\n", volume);

    }
}
