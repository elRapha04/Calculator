import java.util.Scanner;

public class Switch {
    public static void main(String[] args){

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the day: ");
        String day = scanner.nextLine();


        switch(day){
            case "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" -> System.out.println("It is a weekday 😒");
            case "Saturday", "Sunday" -> System.out.println("It is the weekend! 😊");
            default -> System.out.println(day + " is not a day.");
        }
    }
}
