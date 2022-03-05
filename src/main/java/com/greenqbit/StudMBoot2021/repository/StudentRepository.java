package com.greenqbit.StudMBoot2021.repository;

import com.greenqbit.StudMBoot2021.entity.Student;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Latest: repository annotation is not required, but good to have
 */
@Repository
public interface StudentRepository extends CrudRepository<Student, Long> {


}
