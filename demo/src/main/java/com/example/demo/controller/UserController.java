package com.example.demo.controller;


import com.alibaba.fastjson.JSONObject;
import com.example.demo.dao.UserRepository;
import com.example.demo.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;

@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserRepository userRepository;
    private PictureController pictureController;

    public UserController(PictureController pictureController) {
        this.pictureController = pictureController;
    }

    @RequestMapping("/getAllUser")
    @ResponseBody
    public List<User> findAll() {
        List<User> list = new ArrayList<User>();
        list = userRepository.findAll();
        return list;
    }

    @RequestMapping("/getDate")
    @ResponseBody
    public Date getUserDate(String userName, String password) {
        User user = userRepository.findByUserNameAndPassword(userName, password);
        return user.getDate();
    }

    @RequestMapping("/getId")
    @ResponseBody
    public Long getUserId(String userName, String password) {
        User user = userRepository.findByUserNameAndPassword(userName, password);
        return user.getId();
    }

    @RequestMapping("getUserPicture")
    @ResponseBody
    public String getUserPicture(Long id) {
        return pictureController.getById(id);
    }

    @RequestMapping(value = "getUserDetail", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public JSONObject getUserDetail(HttpServletRequest request) {
        JSONObject jsonParam = getByRequest(request);
        String password = jsonParam.getString("password");
        String username = jsonParam.getString("username");
        Long id = getUserId(username, password);
        String pictureAddress = getUserPicture(id);
        Date date = getUserDate(username, password);

        JSONObject newJson = new JSONObject();
        newJson.put("userPicture", pictureAddress);
        newJson.put("createdDate", date);

        return newJson;
    }

    @ResponseBody
    @RequestMapping(value = "/getUserByRequest", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    public JSONObject getByRequest(HttpServletRequest request) {

        //获取到JSONObject
        JSONObject jsonParam = getJSONParam(request);

        // 将获取的json数据封装一层，然后在给返回
//        JSONObject result = new JSONObject();
//        result.put("data", jsonParam);
//        return result.toJSONString();
        System.out.println(jsonParam);
        return jsonParam;
    }

    public JSONObject getJSONParam(HttpServletRequest request){
        JSONObject jsonParam = null;
        try {
            // 获取输入流
            BufferedReader streamReader = new BufferedReader(new InputStreamReader(request.getInputStream(), "UTF-8"));

            // 写入数据到Stringbuilder
            StringBuilder sb = new StringBuilder();
            String line = null;
            while ((line = streamReader.readLine()) != null) {
                sb.append(line);
            }
            jsonParam = JSONObject.parseObject(sb.toString());
            // 直接将json信息打印出来
            System.out.println(jsonParam.toJSONString());
        } catch (Exception e) {
            e.printStackTrace();
        }
        return jsonParam;
    }

    @RequestMapping("hello")
    @ResponseBody
    public String hello() {
        return "Hello World!";
    }
}
