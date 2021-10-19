package org.example.spring.boot.skeleton.repository;

import org.example.spring.boot.skeleton.model.Test;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestRepository extends JpaRepository<Test,String> {

}
