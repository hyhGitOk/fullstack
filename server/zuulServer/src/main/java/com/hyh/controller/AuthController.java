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

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hyh.entity.TUser;
import com.hyh.service.UserService;
import com.hyh.utility.JwtTokenUtils;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/auth")
public class AuthController {

	private final JwtTokenUtils jwtTokenUtils;

	@Autowired
	private UserService userService;

	public AuthController(JwtTokenUtils jwtTokenUtils) {
		this.jwtTokenUtils = jwtTokenUtils;
	}

	@GetMapping(value = "/login")
	public ResponseEntity login(String email, String password) {

		TUser user = userService.findByEmailPwd(email, password);
		if (user == null) {
			return new ResponseEntity("Email or password is invalid.", HttpStatus.INTERNAL_SERVER_ERROR);
		}

		Map map = new HashMap();
		map.put("user", user.getEmail());
		map.put("password", user.getPassword());
		String token = jwtTokenUtils.createToken(map);

		Map resMap = new HashMap();
		resMap.put("userObj", user);
		resMap.put("token", token);
		return ResponseEntity.ok(resMap);
	}

	@GetMapping(value = "/error")
	public ResponseEntity tokenError() {
		return new ResponseEntity("token is invalid.", HttpStatus.UNAUTHORIZED);
	}
}