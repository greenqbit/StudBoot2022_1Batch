package com.greenqbit.StudMBoot2021.service;

import com.greenqbit.StudMBoot2021.entity.Student;
import com.greenqbit.StudMBoot2021.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@RequiredArgsConstructor
@Service
public class StudentService {

    private final StudentRepository studentRepository;

    public List<Student> getAll() {
        return (List<Student>) studentRepository.findAll();
    }

    public Student findStudById(Long id) {
        //security check, validation
        Student studGreenQbit = studentRepository.findById(id).orElse(null);
        return studGreenQbit;
    }

    public void refereceCode () {
        //1. call database, fetch stud record 3
        //2. send it back to view layer ie themeleaf
        Student studGreenQbit = studentRepository.findById(4L).orElse(new Student());

        //=====Find ALL =====
        //1. easy iterable => casting
        List<Student> studList = (List<Student>) studentRepository.findAll();

        //2. Iterable -> traverse on the list
        Iterable<Student> studItr = studentRepository.findAll();
        //convert iterator to the list?
        //EASY:
        List<Student> studListManual = new ArrayList<>();
        studItr.forEach((st) -> {
            studListManual.add(st);
        });

        //3rd way:
        List<Student> stListFromStream = StreamSupport.stream(studItr.spliterator(), false)
                .filter(student -> student.getCollegeName().equalsIgnoreCase("NCCS"))
                .collect(Collectors.toList());
    }

}
