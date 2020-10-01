package com.example.demo.dao;

import com.example.demo.domain.Upload_Picture;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PictureRepository extends JpaRepository<Upload_Picture, Long> {

    Optional<Upload_Picture> findById(Long id);
}
