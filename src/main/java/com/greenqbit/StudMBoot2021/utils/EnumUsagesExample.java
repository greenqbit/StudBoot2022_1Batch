package com.greenqbit.StudMBoot2021.utils;

import com.greenqbit.StudMBoot2021.dto.StudentDto;

public class EnumUsagesExample {

    public static void main(String[] args) {
        Day d = Day.SUNDAY;

//can't create object of enum Day da = new Day();
        if (d == Day.FRIDAY) { //enum compare with enum only

        }

        System.out.println(Day.FRIDAY);
        System.out.println(d.name()); // "SUNDAY"
        System.out.println(d.getIndex());
        System.out.println(d.getDescription());

        System.out.println("Desc: " + getDayDesc(d));


    }

    public static String getDayDesc(Day d) {
       return switch (d) {
           case SUNDAY -> d.getDescription();
           case MONDAY -> d.getDescription();
           case TUESDAY -> d.getDescription();
           case WEDNESDAY -> d.getDescription();
           case THURSDAY -> d.getDescription();
           case FRIDAY -> d.getDescription();
           case SATURDAY -> d.getDescription();
        };
    }
}
