package com.greenqbit.StudMBoot2021.utils;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ReflectionExample {
    public static void main(String[] args) throws ClassNotFoundException {

      java.lang.String str = "hello";
        //hackerrank
      Class cStr = Class.forName("java.lang.String"); //reflection, kunai class ko internal property check garne
      Arrays.stream(cStr.getDeclaredMethods()).map(m -> m.getName()).forEach(System.out::println);

      System.out.println("Studetn class reflection-----");
      Class studClz = com.greenqbit.StudMBoot2021.entity.Student.class;
      System.out.println(Arrays.toString(studClz.getAnnotations()));


      List list = new ArrayList(); //row style
      list.add("HELLO");
      list.add(true);
      list.add(1);

      List<String> strList = new ArrayList<>();
        //strList.add(1); //error

      //highly error prone
        //Same data type in one variable

      List<Integer> intList  = new ArrayList<>();

      //TODO:Switch expression with text block
      //TODO: pattern matching
      //FILE IO

    }
}
