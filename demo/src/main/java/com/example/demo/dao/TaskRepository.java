package com.example.demo.dao;

import com.example.demo.domain.Task;
import com.example.demo.domain.Upload_Picture;
import org.apache.catalina.LifecycleState;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface TaskRepository extends JpaRepository<Task, Long> {

    Optional<Task> findById(Long id);

    @Query("select n from Task n where n.userId=?1")
    List<Task> fingByUserId(Long userId);

}
