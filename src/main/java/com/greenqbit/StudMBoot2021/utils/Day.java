package com.greenqbit.StudMBoot2021.utils;

import lombok.Getter;

public enum Day {
    SUNDAY(1, "This is sunday"),
    MONDAY(2, "I am Monday"),
    TUESDAY(3, "Today is Tuesday"),
    WEDNESDAY(4, ""),
    THURSDAY(5, ""),
    FRIDAY(6, ""),
    SATURDAY(7, "");

    @Getter
    private int index;
    @Getter
    private String description;

    Day(int index, String description) {
        this.index = index;
        this.description = description;
    }

}
