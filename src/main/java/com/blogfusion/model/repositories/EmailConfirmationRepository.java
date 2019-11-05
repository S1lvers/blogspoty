package com.blogfusion.model.repositories;

import com.blogfusion.model.entity.EmailConfirmationEntity;
import org.springframework.data.repository.CrudRepository;

public interface EmailConfirmationRepository extends CrudRepository<EmailConfirmationEntity, Long> {


}
