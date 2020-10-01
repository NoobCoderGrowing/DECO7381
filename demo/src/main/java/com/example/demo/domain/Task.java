package com.example.demo.domain;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table
public class Task {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue
    private Long id;
    @Column(name = "username")
    private String userName;
    @Column (name = "taskScore")
    private Integer taskScore;
    @Column (name = "dueDate")
    private Date dueDate;


    public Task() {
        super();
    }

    public Task(String userName, Integer taskScore, Date dueDate) {
        super();
        this.userName = userName;
        this.taskScore = taskScore;
        this.dueDate = dueDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Integer getTaskScore() {
        return taskScore;
    }

    public void setTaskScore(Integer taskScore) {
        this.taskScore = taskScore;
    }

    public Date getDueDate() {
        return dueDate;
    }

    public void setDueDate(Date dueDate) {
        this.dueDate = dueDate;
    }
}
