package com.example.demo.domain;

import javax.persistence.*;

@Entity
@Table
public class Upload_Picture {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue
    private Long id;
    @Column(name = "username")
    private String userName;
    @Column(name = "picture_address")
    private String pictureAddress;


    public Upload_Picture() {
        super();
    }

    public Upload_Picture(String userName, String pictureAddress) {
        super();
        this.userName = userName;
        this.pictureAddress = pictureAddress;
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

    public String getPictureAddress() {
        return pictureAddress;
    }

    public void setPictureAddress(String pictureAddress) {
        this.pictureAddress = pictureAddress;
    }

}
