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
    @Column(name = "userId")
    private Long userId;
    @Column(name = "username")
    private String userName;
    @Column(name = "taskname")
    private String taskName;
    @Column(name = "difficulty")
    private Integer difficulty;
    @Column(name = "taskDetail")
    private String taskDetail;
    @Column(name = "tool")
    private String tool;
    @Column (name = "taskScore")
    private Integer taskScore;
    @Column (name = "dueDate")
    private Date dueDate;


    public Task() {
        super();
    }

    public Task(Long userId, String userName, Integer taskScore, Date dueDate, String taskName, String taskDetail, Integer difficulty, String tool) {
        super();
        this.userId = userId;
        this.userName = userName;
        this.taskScore = taskScore;
        this.dueDate = dueDate;
        this.taskName = taskName;
        this.taskDetail = taskDetail;
        this.difficulty = difficulty;
        this.tool = tool;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
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

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public String getTaskDetail() {
        return taskDetail;
    }

    public void setTaskDetail(String taskDetail) {
        this.taskDetail = taskDetail;
    }

    public String getTool() {
        return tool;
    }

    public void setTool(String tool) {
        this.tool = tool;
    }

    public Integer getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(Integer difficulty) {
        this.difficulty = difficulty;
    }
}
