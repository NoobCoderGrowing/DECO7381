package com.example.demo.domain;

import javax.persistence.*;

@Entity
@Table
public class Teacher {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue
    private Long id;
    @Column(name = "username")
    private String userName;


    public Teacher() {
        super();
    }

    public Teacher(String userName) {
        super();
        this.userName = userName;
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

}
