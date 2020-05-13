/** 
 * Project Name:eurekaServer 
 * File Name:JwtAccessDeniedHandler.java 
 * Package Name:com.hyh 
 * Date:2020年5月8日下午8:36:05 
 * 
 */
package com.hyh.security;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

@Component
public class JwtAccessDeniedHandler implements AccessDeniedHandler {
	@Override
	public void handle(HttpServletRequest request, HttpServletResponse response,
			AccessDeniedException accessDeniedException) throws IOException {
		response.sendError(HttpServletResponse.SC_FORBIDDEN, accessDeniedException.getMessage());
	}
}