package com.blogfusion.model.repositories;

import com.blogfusion.model.entity.EmailConfirmationEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EmailConfirmationRepository extends CrudRepository<EmailConfirmationEntity, Long> {

    Optional<EmailConfirmationEntity> findByConfirmationHash(String hash);

    Optional<EmailConfirmationEntity> findByUserEmail(String email);
}
