package com.blogfusion.model.repositories;

import com.blogfusion.model.entity.BusinessCardEntity;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BusinessCardRepository extends PagingAndSortingRepository <BusinessCardEntity, Long> {
}
