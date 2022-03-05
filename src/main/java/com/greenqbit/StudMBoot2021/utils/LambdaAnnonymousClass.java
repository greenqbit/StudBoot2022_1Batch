package com.greenqbit.StudMBoot2021.utils;

public class LambdaAnnonymousClass {
    //Java version 8: function programming, Stream
    @FunctionalInterface //only one abstract method, method without body.
    interface Bank {
        String getName();

        default double getUSDRate() {
            return 115.5;
        }
        static String bankDescription() {
            return "This is Rastra Bank.";
        }
    }

    class GlobalBank implements Bank {

        @Override
        public String getName() {
            return "Global bank";
        }

        public double getUSDRate() {
            return 115.6;
        }
    }

    public void testFunctionalMe() {
        Bank globalBank = new GlobalBank();
        System.out.println(globalBank.getUSDRate());//1.5 => 5.5

        System.out.println("Get Ratra Bank Desc: " + Bank.bankDescription());

        //you don't need to create separate class to create child class of funtional interface.
        //create new class by using lamda interface  () -> { } , js: () => {}

        //annonynomus inner class
        Bank nabilBank = new Bank() {

            @Override
            public String getName() {
                return "Nabil";
            }
        };

        //lamda expression
        Bank kistBank = () -> {
            return "Global bank";
        };

        //Lambda expression short
        Bank krishiBank = () -> "Krishi bank";

    }
}
