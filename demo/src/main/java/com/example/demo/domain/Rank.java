package com.example.demo.domain;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table
public class Rank {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue
    private Long id;
    @Column(name = "username")
    private String userName;
    @Column (name = "score")
    private Integer score;
    @Column (name = "rank")
    private Integer rank;


    public Rank() {
        super();
    }

    public Rank(String userName, Integer score, Integer rank) {
        super();
        this.userName = userName;
        this.score = score;
        this.rank = rank;
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

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public Integer getRank() {
        return rank;
    }

    public void setRank(Integer rank) {
        this.rank = rank;
    }
}
