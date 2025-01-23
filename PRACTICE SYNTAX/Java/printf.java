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
                + = output a plus
                , = comma grouping separator
                ( = negative numbers are enclosed in ()
                space = display a minus if negative, space if positive

            WIDTH
                0 => zero padding
                number => right-justified padding
                negative number => left-justified padding

            PRECISION
                .number => set decimal places
         */

        System.out.printf("SPECIFIER CHARACTER:\n");
        System.out.printf("\tString: %s\n", "Hello");
        System.out.printf("\tInt: %d\n", 456);
        System.out.printf("\tDouble: %f\n", 7890);
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
