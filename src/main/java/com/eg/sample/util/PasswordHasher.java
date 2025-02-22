package com.eg.sample.util;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordHasher {
    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    // ✅ Method to hash a password
    public static String hashPassword(String rawPassword) {
        return encoder.encode(rawPassword);
    }

    // ✅ Method to verify password
    public static boolean verifyPassword(String rawPassword, String hashedPassword) {
        return encoder.matches(rawPassword, hashedPassword);
    }

    public static void main(String[] args) {
        String rawPassword = "moni12";
        String hashedPassword = hashPassword(rawPassword);

        System.out.println("Raw Password: " + rawPassword);
        System.out.println("Hashed Password: " + hashedPassword);
        System.out.println("Password Match: " + verifyPassword(rawPassword, hashedPassword));
    }
}
