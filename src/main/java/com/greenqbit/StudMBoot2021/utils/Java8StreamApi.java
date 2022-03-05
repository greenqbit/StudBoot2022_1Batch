package com.greenqbit.StudMBoot2021.utils;

import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Java8StreamApi {

    public static void main(String[] args) {

        //collection class:
        List<String> countries = new ArrayList<>();
        countries.add("Nepal");
        countries.add("Australia");
        countries.add("UK");
        countries.add("Japan");
        countries.add("India");

        System.out.println("Countries:" + countries.toString());

        System.out.println("traverse , visit every element one by one.");
        for(String country : countries) {
            System.out.println("Country: " + country);
        }

        System.out.println("traverse : 2nd idea: using iterator");
        Iterator<String> itr = countries.iterator();
        while (itr.hasNext()) {
            String value = itr.next();
            System.out.println("Country: "  + value);
            if (value.equals("India")) {
                itr.remove();
            }
        }

        System.out.println("Country after itr: " + countries);

        System.out.println("\n Functional foreach style:");
        countries.forEach((cn) -> {
            System.out.println(cn);
        });
        countries.forEach((cn) -> System.out.println(cn));

        System.out.println("Lambda Method Reference");
        countries.forEach(System.out::println);

        List<String> cons = Arrays.asList("Nepal", "India", "UK");
        //================
        // List.of, Set.of
        List<String> colors = List.of("Red", "Rose", "Green", "Yellow", "Blue", "Blue Black");
        Set<String> uniqColors = Set.of("Red", "Green", "Yellow", "Blue");


        //Stream
        //Data of the list: traverse, filter, map(change/modify), type change, duplicate remove, group by.
        System.out.println("Q: remove colors start with R");
        colors
                .stream()
                .filter((color) -> {
                    return !color.startsWith("R");
                }).forEach(System.out::println);

        colors.stream().filter((color) -> {
                    return !color.startsWith("R");
                }).filter((color) -> color.startsWith("B"))
                .forEach(System.out::println);

        List.of(1, 2, 3, 4, 5).stream().map((no) -> no * 2).forEach(System.out::println);
        List.of(1, 2, 3, 4, 5).stream().map((no) -> "No: " + no).forEach(System.out::println);

        System.out.println("Collect the result:");
        List<String> collectedNos = List.of(2, 3, 1, 4, 5, 3)
                .stream()//first
                .sorted()
                .distinct()
                .map((no) -> "No: " + no) //intermediate operation
                .collect(Collectors.toList()); //last: collect, forEach
        System.out.println(collectedNos);

        Set<String> streamNos = Stream.of(2, 3, 4, 5)
                .sorted()
                .distinct()
                .map((no) -> "No: " + no)
                .collect(Collectors.toSet());

        //Date Time:
        System.out.println("\n\n ===DATE TIME ===");
        LocalDate rTime = LocalDate.now();


    }

    public int getMonth(int month) {
        return 0;
    }




}
