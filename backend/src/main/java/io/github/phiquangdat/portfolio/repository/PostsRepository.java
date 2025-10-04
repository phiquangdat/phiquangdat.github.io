package io.github.phiquangdat.portfolio.repository;

import io.github.phiquangdat.portfolio.model.Posts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface PostsRepository extends JpaRepository<Posts, UUID> {

    List<Posts> findByTitleContaining(String title);

    List<Posts> findByDescriptionContaining(String description);

    List<Posts> findByDateContaining(String date);

    List<Posts> findByReadTimeContaining(String readTime);

    List<Posts> findByIconContaining(String icon);

    List<Posts> findByLinkContaining(String link);

    List<Posts> findByImageUrlContaining(String imageUrl);
}
