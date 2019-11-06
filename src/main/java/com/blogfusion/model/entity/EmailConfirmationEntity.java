package com.blogfusion.model.entity;

import com.blogfusion.util.DateUtils;
import lombok.Data;
import lombok.experimental.Accessors;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Accessors(chain = true)
public class EmailConfirmationEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne
    private UserEntity user;

    @Column(unique = true)
    private String confirmationHash;

    @Column
    private LocalDateTime createdAt = DateUtils.getCurrentLocalDateTime();

    @Column
    private LocalDateTime updatedAt = DateUtils.getCurrentLocalDateTime();

}
