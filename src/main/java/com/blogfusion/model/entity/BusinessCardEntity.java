package com.blogfusion.model.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class BusinessCardEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Long followers;

    private Long subscribtions;

    private Long publications;

    private String facebook;

    private String instagramm;

    private String twitter;

    private String twitch;

    private String vk;

    private String youtube;

    private String telegramm;

}
