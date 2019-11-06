package com.blogfusion.util;

import lombok.extern.slf4j.Slf4j;

import java.time.LocalDateTime;
import java.time.ZoneId;

@Slf4j
public class DateUtils {

    public static final ZoneId DEFAULT_ZONE_ID = ZoneId.of("Europe/Moscow");

    private DateUtils(){}

    public static LocalDateTime getCurrentLocalDateTime() {
        return LocalDateTime.now(DEFAULT_ZONE_ID);
    }
}
