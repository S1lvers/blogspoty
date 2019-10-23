package com.blogfusion.model.entity;

import com.blogfusion.model.enums.AuthorityType;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "authority")
public class Authority {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Enumerated(EnumType.STRING)

    private AuthorityType name;
}
