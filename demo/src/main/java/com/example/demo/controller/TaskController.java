package com.example.demo.controller;

import com.alibaba.fastjson.JSONObject;
import com.example.demo.dao.TaskRepository;
import com.example.demo.domain.Task;
import com.example.demo.domain.Upload_Picture;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("task")
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;
    private UserController userController;

    public TaskController(UserController userController) {
        this.userController = userController;
    }

    @RequestMapping("/getAllTask")
    @ResponseBody
    public List<Task> findAll() {
        List<Task> list = new ArrayList<Task>();
        list = taskRepository.findAll();
        return list;
    }

    @RequestMapping("/getTaskNumber")
    @ResponseBody
    public Integer getTaskNumber(Long userId) {
        List<Task> list = new ArrayList<Task>();
        list = taskRepository.fingByUserId(userId);
        return list.size();
    }

    @RequestMapping("/getTaskList")
    @ResponseBody
    public List<Task> getTaskList(Long userId) {
        List<Task> list = new ArrayList<Task>();
        list = taskRepository.fingByUserId(userId);
        return list;
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

    public JSONObject getJSONParam(HttpServletRequest request) {
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

    @RequestMapping("/getOneTaskDetail")
    @ResponseBody
    public JSONObject getOneTaskDetail(HttpServletRequest request){
        JSONObject jsonParam = getByRequest(request);

        JSONObject tempJson = new JSONObject();
        JSONObject newJson = new JSONObject();

        String password = jsonParam.getString("password");
        String username = jsonParam.getString("username");
        Long userId = userController.getUserId(username, password);

        if (getTaskNumber(userId) == 1) {
            JSONObject taskJson = new JSONObject();
            taskJson.put("taskname", getTaskList(userId).get(0).getTaskName());
            taskJson.put("task_detail", getTaskList(userId).get(0).getTaskDetail());
            taskJson.put("difficulty", getTaskList(userId).get(0).getDifficulty());
            taskJson.put("tools", getTaskList(userId).get(0).getTool());
            tempJson.put("task1", taskJson);
        }

        if (getTaskNumber(userId) == 2) {
            JSONObject taskJson = new JSONObject();
            taskJson.put("taskname", getTaskList(userId).get(0).getTaskName());
            taskJson.put("task_detail", getTaskList(userId).get(0).getTaskDetail());
            taskJson.put("difficulty", getTaskList(userId).get(0).getDifficulty());
            taskJson.put("tools", getTaskList(userId).get(0).getTool());
            tempJson.put("task1", taskJson);

            JSONObject taskJson2 = new JSONObject();
            taskJson2.put("taskname", getTaskList(userId).get(1).getTaskName());
            taskJson2.put("task_detail", getTaskList(userId).get(1).getTaskDetail());
            taskJson2.put("difficulty", getTaskList(userId).get(1).getDifficulty());
            taskJson2.put("tools", getTaskList(userId).get(1).getTool());
            tempJson.put("task2", taskJson2);
        }

        if (getTaskNumber(userId) == 3) {
            JSONObject taskJson = new JSONObject();
            taskJson.put("taskname", getTaskList(userId).get(0).getTaskName());
            taskJson.put("task_detail", getTaskList(userId).get(0).getTaskDetail());
            taskJson.put("difficulty", getTaskList(userId).get(0).getDifficulty());
            taskJson.put("tools", getTaskList(userId).get(0).getTool());
            tempJson.put("task1", taskJson);

            JSONObject taskJson2 = new JSONObject();
            taskJson2.put("taskname", getTaskList(userId).get(1).getTaskName());
            taskJson2.put("task_detail", getTaskList(userId).get(1).getTaskDetail());
            taskJson2.put("difficulty", getTaskList(userId).get(1).getDifficulty());
            taskJson2.put("tools", getTaskList(userId).get(1).getTool());
            tempJson.put("task2", taskJson2);

            JSONObject taskJson3 = new JSONObject();
            taskJson3.put("taskname", getTaskList(userId).get(2).getTaskName());
            taskJson3.put("task_detail", getTaskList(userId).get(2).getTaskDetail());
            taskJson3.put("difficulty", getTaskList(userId).get(2).getDifficulty());
            taskJson3.put("tools", getTaskList(userId).get(2).getTool());
            tempJson.put("task3", taskJson3);
        }

        newJson.put("number", getTaskNumber(userId));
        newJson.put("tasks", tempJson);

        return newJson;
    }
}
