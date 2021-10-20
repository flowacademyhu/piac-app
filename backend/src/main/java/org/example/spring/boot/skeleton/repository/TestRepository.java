package org.example.spring.boot.skeleton.repository;

import org.example.spring.boot.skeleton.model.Test;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestRepository extends MongoRepository<Test,String> {

}
