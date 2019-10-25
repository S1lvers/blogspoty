package com.blogfusion.util;

public class Utils {
    private Utils(){}

    public static boolean isEmpty(Object[] objects){
        return objects == null || objects.length == 0;
    }
}
