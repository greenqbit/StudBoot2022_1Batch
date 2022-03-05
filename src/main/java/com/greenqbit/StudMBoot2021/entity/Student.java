package com.greenqbit.StudMBoot2021.entity;


import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Data
/*@Getter
@Setter
@ToString
@EqualsAndHashCode
@AllArgsConstructor*/
//TODO: @Builder

@Entity
@Table(name = "student")
public class Student {
    //2021-12-29 09:59:37.471 DEBUG 59608 --- [  restartedMain] org.hibernate.SQL                        : create table student (id int8 not null, college_name varchar(255), dob date, fee float8 not null, first_name varchar(50) not null, last_name varchar(255), passport_no varchar(255), roll_no int4 not null, primary key (id))
    //Hibernate: create table student (id int8 not null, college_name varchar(255), dob date, fee float8 not null, first_name varchar(50) not null, last_name varchar(255), passport_no varchar(255), roll_no int4 not null, primary key (id))

    @Id
    @GeneratedValue //AUTO_INCREMENT, required for hibernate.
    private Long id;

    @Column(name = "first_name", nullable = false, length = 50)
    private String firstName; //required

    private String lastName;
    private String collegeName;
    private String passportNo;
    private int rollNo;
    private double fee;
    private LocalDate dob;

    public Student() {

    }

}
