package com.greenqbit.StudMBoot2021.controller;

import com.greenqbit.StudMBoot2021.dto.StudentDto;
import com.greenqbit.StudMBoot2021.entity.Student;
import com.greenqbit.StudMBoot2021.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="*")
@RequiredArgsConstructor
@RestController //rest API
@RequestMapping("/api")
public class StudentRestController {

    private final StudentService studentService;

    //@RequestMapping(value = "/stud", method = RequestMethod.GET)
    @GetMapping("/students")
    public ResponseEntity<List<Student>> getStudents() {
        List<Student> studentList = studentService.getAll();

        return ResponseEntity.ok(studentList);
    } //rest api return: JSON data. ok = 200 status ie success

    @GetMapping("/students/{id}")
    public ResponseEntity<StudentDto> getAStudent(@PathVariable("id") Long studId) {
        Student stud = studentService.findStudById(studId);

        //getter setter :(
        StudentDto dto = new StudentDto();
        dto.setId(stud.getId());
        dto.setFirstName(stud.getFirstName());
        dto.setLastName(stud.getLastName());
        dto.setCollegeName(stud.getCollegeName());
        dto.setRollNo(stud.getRollNo());
        dto.setFee(stud.getFee());

        StudentDto sDto = StudentDto.builder()
                .id(stud.getId())
                .firstName(stud.getFirstName())
                .lastName(stud.getLastName())
                .collegeName(stud.getCollegeName())
                .rollNo(stud.getRollNo())
                .fee(stud.getFee())
                .build();

        return ResponseEntity.ok(sDto);
    }
}
