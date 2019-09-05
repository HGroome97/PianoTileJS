package com.groome.respository.persistence;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.groome.repository.domain.Scores;

public interface ScoresRepository extends JpaRepository<Scores, Integer>{
	@Query(value = "SELECT * FROM scores WHERE mode = :mode", nativeQuery = true)
    public List<Scores> searchByMode(@Param("mode") String mode);
}
