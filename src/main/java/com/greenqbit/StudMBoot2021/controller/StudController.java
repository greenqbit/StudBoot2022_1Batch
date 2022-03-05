package com.greenqbit.StudMBoot2021.controller;

import com.greenqbit.StudMBoot2021.entity.Student;
import com.greenqbit.StudMBoot2021.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

//MVC Controller, web controller
@Controller
@RequestMapping(value = "/stud") //GET, POST, DELETE
public class StudController {

    //@Autowired
    //Field Ingestion: deprecated
    private final StudentService studentService;

    //Field injection => constructor ingestion
    public StudController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    //@RequestMapping(method = RequestMethod.GET)
    public ModelAndView studGET() {

        Student studGreenQbit = studentService.findStudById(4L);
        List<Student> studList = studentService.getAll();

        ModelAndView mv = new ModelAndView("stud");
        mv.addObject("gqStud", studGreenQbit);
        mv.addObject("studList", studList);

        return mv; //final return: html
    }

    @GetMapping(value = "/save")
    public String studGet() {

        return "stud";
    }

    @PostMapping(value = "/save")
    public String studPost() {

        return "stud";
    }


}
