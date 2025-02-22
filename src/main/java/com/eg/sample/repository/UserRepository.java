package com.eg.sample.repository;

import com.eg.sample.entity.AppUser;  // ✅ Update import
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<AppUser, Long> {  // ✅ Use AppUser instead of User
    Optional<AppUser> findByUsername(String username);
}
