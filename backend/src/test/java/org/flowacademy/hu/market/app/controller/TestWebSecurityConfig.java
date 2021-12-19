package org.flowacademy.hu.market.app.controller;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Inherited;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import org.flowacademy.hu.market.app.config.WebSecurityConfig;
import org.flowacademy.hu.market.app.jwtandsecurity.JwtAuthenticationEntryPoint;
import org.flowacademy.hu.market.app.jwtandsecurity.JwtFilter;
import org.flowacademy.hu.market.app.jwtandsecurity.TokenManager;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.test.context.ContextConfiguration;

@Target({ ElementType.METHOD, ElementType.TYPE })
@Retention(RetentionPolicy.RUNTIME)
@Inherited
@Documented
@ContextConfiguration(classes = { WebSecurityConfig.class, JwtAuthenticationEntryPoint.class, JwtFilter.class,
                TokenManager.class, InMemoryUserDetailsManager.class })
public @interface TestWebSecurityConfig {

}
