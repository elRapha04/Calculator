public class printf {
    public static void main(String[] args){
        /*
        printf() => used to format output

        SYNTAX:
            "%[flags][width][.precision][specifier character]"

            SPECIFIER CHARACTER
                string => s
                int => i
                decimal (base 10) => d
                double (float) => f
                boolean => b

            FLAGS

            WIDTH

            PRECISION

         */

        System.out.printf("SPECIFIER CHARACTER:\n");
        System.out.printf("\tString: %s\n", "Hello");
        System.out.printf("\tInt: %i\n", 23);
        System.out.printf("\tDecimal: %d\n", 456);
        System.out.printf("\tDouble%\n", 7890);
        System.out.printf("\tBoolean: %b\n", false);

        System.out.printf("FLAGS:\n");
        System.out.printf("\t%\n", 1);
        System.out.printf("\t%\n", 23);
        System.out.printf("\t%\n", 456);
        System.out.printf("\t%\n", 7890);

        System.out.printf("WIDTH:\n");
        System.out.printf("\t%\n", 1);
        System.out.printf("\t%\n", 23);
        System.out.printf("\t%\n", 456);
        System.out.printf("\t%\n", 7890);

        System.out.printf("PRECISION:\n");
        System.out.printf("\t%\n", 1);
        System.out.printf("\t%\n", 23);
        System.out.printf("\t%\n", 456);
        System.out.printf("\t%\n", 7890);
    }
}
