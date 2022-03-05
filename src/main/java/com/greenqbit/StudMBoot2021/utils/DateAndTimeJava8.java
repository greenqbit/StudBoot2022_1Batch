package com.greenqbit.StudMBoot2021.utils;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

public class DateAndTimeJava8 {
    public static void main(String[] args) {

        //Date Time
        //1. Immutable:

        LocalDate rTime = LocalDate.now();
        System.out.println("Now: "+ rTime); //2021-12-31

        LocalDateTime rDateTime = LocalDateTime.now();
        System.out.println("Now: " + rDateTime); //2021-12-31T09:47:56.159042

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd hh:mm:ss");
        System.out.println("Now formatted: " + rDateTime.format(formatter));

        String sDate = "2020-12-20"; //"yyyy-MM-dd hh:mm:ss"
        DateTimeFormatter formatter2 = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate parseDate = LocalDate.parse(sDate, formatter2); //working fine with Local date :) but issue with date time
//        LocalDateTime parseDateTime3 = LocalDateTime.parse("2021-12-31 09:47:56", formatter);

        LocalDate coronaBirthDate = LocalDate.of(2019, 11, 1);
        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("MMM dd yyyy"); //"MMM dd yyyy" = "MMMM dd u"
        System.out.println("corona: Monthly Format: " + coronaBirthDate.format(dateFormatter));

        LocalDate coronaPlus2M = coronaBirthDate.plusMonths(2);
        System.out.println(coronaPlus2M); //2020-01-01
        System.out.println(coronaPlus2M.minusDays(10)); //2019-12-22
        System.out.println(coronaBirthDate.getMonthValue()); //11

        ZonedDateTime dateTimeWithTZ = ZonedDateTime.now();
        System.out.println(dateTimeWithTZ);

    }
}
