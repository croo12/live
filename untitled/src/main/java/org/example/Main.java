package org.example;
import java.util.*;
public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        String s = sc.next();

        Long answer = 0L;
        for(int i=0; i<s.length(); i++){
            answer *= 10;
            answer += s.charAt(i)%20000303;
        }

        System.out.println(answer);
    }
}