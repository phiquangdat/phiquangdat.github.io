package io.github.phiquangdat.portfolio.controller;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.github.phiquangdat.portfolio.model.Posts;
import io.github.phiquangdat.portfolio.repository.PostsRepository;

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

    @GetMapping("/{id}")
    public ResponseEntity<Posts> getPost(@PathVariable UUID id) {
        Optional<Posts> post = postsRepository.findById(id);
        return post.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Posts> createPost(@RequestBody Posts post) {
        Posts savedPost = postsRepository.save(post);
        return ResponseEntity.ok(savedPost);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Posts> updatePost(@PathVariable UUID id, @RequestBody Posts postDetails) {
        Optional<Posts> optionalPost = postsRepository.findById(id);
        if (optionalPost.isPresent()) {
            Posts post = optionalPost.get();
            post.setTitle(postDetails.getTitle());
            post.setDescription(postDetails.getDescription());
            post.setDate(postDetails.getDate());
            post.setReadTime(postDetails.getReadTime());
            post.setIcon(postDetails.getIcon());
            post.setLink(postDetails.getLink());
            post.setImageUrl(postDetails.getImageUrl());
            
            Posts updatedPost = postsRepository.save(post);
            return ResponseEntity.ok(updatedPost);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable UUID id) {
        if (postsRepository.existsById(id)) {
            postsRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
