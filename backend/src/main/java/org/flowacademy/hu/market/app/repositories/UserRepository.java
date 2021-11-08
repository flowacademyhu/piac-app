package org.flowacademy.hu.market.app.repositories;

import org.flowacademy.hu.market.app.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
