/** 
 * Project Name:eurekaServer 
 * File Name:AuthController2.java 
 * Package Name:com.hyh 
 * Date:2020年5月8日下午8:44:03 
 * Copyright (c) 2020, 46265559@qq.com All Rights Reserved. 
 * 
 */
package com.hyh.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hyh.utility.JwtTokenUtils;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/auth")
public class AuthController {

	private final JwtTokenUtils jwtTokenUtils;

	public AuthController(JwtTokenUtils jwtTokenUtils) {
		this.jwtTokenUtils = jwtTokenUtils;
	}

	@GetMapping(value = "/login")
	public String login(String user, String password) {
		Map map = new HashMap();
		map.put("user", user);
		map.put("password", password);
		return jwtTokenUtils.createToken(map);
	}

	@GetMapping(value = "/hello")
	public String hello() {
		return "Hello success!";
	}

	@GetMapping(value = "/error")
	public ResponseEntity tokenError() {
		  return new ResponseEntity("token is invalid.", HttpStatus.UNAUTHORIZED);
	}
}