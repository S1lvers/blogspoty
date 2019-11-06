package com.blogfusion.model.entity;

import com.blogfusion.model.enums.AuthorityType;
import lombok.Data;
import lombok.experimental.Accessors;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Accessors(chain = true)
public class UserEntity {

    @Id
    private String email;

    @Column(nullable = false)
    private String username;

    @ElementCollection(targetClass = AuthorityType.class)
    @Enumerated(EnumType.STRING)
    private Set<AuthorityType> authorities = new HashSet<>();

    //BCrypt pswd
    private String password;

    private Boolean accountNonExpired = true;

    private Boolean accountNonLocked = true;

    private Boolean credentialsNonExpired = true;

    private Boolean enabled = false;

    @Column
    private LocalDateTime createdAt;
}
