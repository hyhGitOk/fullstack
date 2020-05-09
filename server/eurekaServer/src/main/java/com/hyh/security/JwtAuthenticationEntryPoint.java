/** 
 * Project Name:eurekaServer 
 * File Name:JwtAuthenticationEntryPoint.java 
 * Package Name:com.hyh 
 * Date:2020年5月8日下午8:38:55 
 * Copyright (c) 2020, 46265559@qq.com All Rights Reserved. 
 * 
 */
package com.hyh.security;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {
	@Override
	public void commence(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException authException) throws IOException {
		response.sendError(HttpServletResponse.SC_UNAUTHORIZED,
				authException == null ? "Unauthorized" : authException.getMessage());
	}
}