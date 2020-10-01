package com.example.demo.controller;

import com.example.demo.dao.PictureRepository;
import com.example.demo.domain.Upload_Picture;
import com.example.demo.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("picture")
public class PictureController {

    @Autowired
    private PictureRepository picture;

    @RequestMapping("/getAllPicture")
    @ResponseBody
    public List<Upload_Picture> findAll() {
        List<Upload_Picture> list = new ArrayList<Upload_Picture>();
        list = picture.findAll();
        return list;
    }

    @RequestMapping("/getById")
    @ResponseBody
    public String getById(Long id) {
        Optional<Upload_Picture> optinal = picture.findById(id);
        if (optinal.get() instanceof Upload_Picture) {
            return optinal.get().getPictureAddress();
        }
        return "Id not exist.";
    }

    @RequestMapping("hello")
    @ResponseBody
    public String hello() {
        return "Hello World!";
    }
}
