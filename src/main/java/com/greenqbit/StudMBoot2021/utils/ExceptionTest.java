package com.greenqbit.StudMBoot2021.utils;

public class ExceptionTest {

    public static void main(String[] args) {

        try {
            int a = divide(150, 0); //infinite value => error
            //java.lang.ArithmeticException: / by zero
            System.out.println("150/0 = " + a);

            int[] nos = new int[] {10, 20, 30}; //java.lang.ArrayIndexOutOfBoundsException: Index 4 out of bounds for length 3
            System.out.println("Array 5th value: " + nos[2]);

            try {
                String s = null; //""
                System.out.println(s.toUpperCase());
            } catch (NullPointerException e) {

            }

            String s = "No10";
            int intNo = Integer.parseInt(s); //10 error: NumberFormatException
            //Lookup: first priority: 100% matching.


        } catch (ArithmeticException e) {
            //e.printStackTrace();
            //System.out.println("Error:" + e.getLocalizedMessage()); /// by zero

            System.out.println("Error: Please don't divide by 0");
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: Please give proper array index."+ e.getLocalizedMessage());
        } catch(RuntimeException e) { //NumberFormatException 100% matching
            //"No10" is catched here.
            e.printStackTrace();
            System.out.println(e.getLocalizedMessage());
        }

        String s = "Bootcamp";
        System.out.println("Hello " + s);

    }

    public static int divide(int a, int b) {
        //1. if condition and check divider shouldn't be 0
        //2 exception handling
        int r = 0;
        if ( b != 0) {
            r = a /b;
        }
        return r;
    }


}
