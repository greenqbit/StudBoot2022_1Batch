package com.greenqbit.StudMBoot2021.utils;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Scanner;

/**
 * Exception handling:
 * try
 * catch
 * finally
 * throw
 * throws
 */
public class FinallyExample {
    //class level variable : default value
    String s; //s = null
    int x; //x = 0

    public static void main(String[] args) {

       //finally: always execute something if error came
       FinallyExample obj = new FinallyExample();
       obj.testCompileTimeException(); //system crash
       obj.validateVotingAge(14);

        System.out.println("--Program Ending...");
    }

    public void readFromConsole() {
        //method level variable: no default value
        int x2;//x2 = 0 => this doesnot happen
        //we have to set default value ourself
        Scanner sc = null;
        try {
            sc = new Scanner(System.in);
            System.out.println("Input a int value:");
            int val = sc.nextInt(); //error if you input string
            System.out.println("Value:" + val);

            //sc.close();//X

        } catch (RuntimeException e) {
            System.out.println("Catch: " + e.getLocalizedMessage());
        } finally {
            sc.close();
            System.out.println("Resource is closed..");
        }

        System.out.println("....ENDING....");

    }

    public void readFromConsoleV2() {
        //try with resources
        try (
                Scanner sc = new Scanner(System.in);
        ) {
            System.out.println("Input a int value:");
            int val = sc.nextInt(); //error if you input string
            System.out.println("Value:" + val);

            System.out.println("Enter Voting age:");
            int age = sc.nextInt();
            validateVotingAge(age);

        } catch (RuntimeException e) {
            e.printStackTrace();
            System.out.println("Catch: " + e.getLocalizedMessage());
        }

        System.out.println("....ENDING....");
    }

    //TOPIC: throw/throws keyword
    //Q. How to throw error ourself?
    public void validateVotingAge(int age) {
        if (age  < 18 ) {
           //throw error, invalid age.
           throw new InvalidAgeException("Age: " + age + " is not valid.");
        }

        System.out.println("You are eligible to vote.");
    }

    //2nd type of : COMPILE TIME Exception => ie throws
    public void testCompileTimeException() {
        try {
            readTempFile();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }

    public void readTempFile() throws FileNotFoundException {
//        FileInputStream ios = new FileInputStream("C:\\temp.txt");
        //throws FileNotFoundException
        /*try {
            FileInputStream ios = new FileInputStream("/document/temp.txt");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }*/

        FileInputStream ios = new FileInputStream("/document/temp.txt");
    }

}
