package com.blogfusion.model.entity;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class EmailConfirmationEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(unique = true)
    private String email;

    @Column(unique = true)
    private String confirmationHash;

    @Column
    private LocalDateTime createdAt;

    @Column
    private LocalDateTime updatedAt;

}
