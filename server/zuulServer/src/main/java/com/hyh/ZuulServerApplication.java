package com.hyh;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;

import com.hyh.filter.TokenFilter;
import com.hyh.security.JwtAuthenticationTokenFilter;

@SpringBootApplication
@EnableZuulProxy
public class ZuulServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ZuulServerApplication.class, args);
	}

//	@Bean
//	public TokenFilter tokenFilter() {
//		return new TokenFilter();
//	}

	@Bean
	public FilterRegistrationBean registration(JwtAuthenticationTokenFilter filter) {
		FilterRegistrationBean registration = new FilterRegistrationBean(filter);
		registration.setEnabled(true);
		return registration;
	}
}
