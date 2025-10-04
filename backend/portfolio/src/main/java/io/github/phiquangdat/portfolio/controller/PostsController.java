package io.github.phiquangdat.portfolio.controller;

import io.github.phiquangdat.portfolio.model.Posts;
import io.github.phiquangdat.portfolio.repository.PostsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "http://localhost:8010")
public class PostsController {
    private final PostsRepository postsRepository;

    @Autowired
    public PostsController(PostsRepository postsRepository) {
        this.postsRepository = postsRepository;
    }

    @GetMapping
    public ResponseEntity<List<Posts>> getPosts() {
        List<Posts> posts = postsRepository.findAll();
        return ResponseEntity.ok(posts);
    }

}
