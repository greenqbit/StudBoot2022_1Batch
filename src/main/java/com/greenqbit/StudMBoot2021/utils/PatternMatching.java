package com.greenqbit.StudMBoot2021.utils;

public class PatternMatching { //remove casting

    public static void main(String[] args) {
        Bank nicBank = new NicAsiaBank();
        printMatchingName(nicBank);
    }

    public static void printMatchingName(Bank b){
        if (b instanceof NicAsiaBank nab) {//pattern matching
            //no need NicAsiaBank nab = (NicAsiaBank) b;
            System.out.println("Bank: " + nab.getName());
        } else if(b instanceof GlobalBank glb) {
            System.out.println("Bank: " + glb.getName());
        }
    }

    static interface Bank {
        String getName();
    }

    static class NicAsiaBank implements Bank {

        @Override
        public String getName() {
            return "Nic Asia Bank";
        }
    }

    static class GlobalBank implements Bank {

        @Override
        public String getName() {
            return "Global Bank";
        }
    }

}
