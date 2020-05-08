/** 
     * Project Name:authClient 
     * File Name:AuthController.java 
     * Date:2020年5月8日上午9:48:51 
     * 
     */
package com.hyh.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hyh.entity.TUser;
import com.hyh.service.UserService;
import com.hyh.utility.JwtUtil;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {

	@Autowired
	private UserService userService;

	/**
	 * verify if user is valid
	 * 
	 * @param id user id
	 * @return ResponseEntity<TUser>
	 */
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public ResponseEntity<String> login(@RequestParam(value = "email", required = true) String email,
			@RequestParam(value = "password", required = true) String password) {

		// get user info by email&password
		TUser user = userService.getUser(email, password);
		if (user == null) {
			return new ResponseEntity("Email or password is invalid.", HttpStatus.INTERNAL_SERVER_ERROR);
		}

		String token = JwtUtil.createToken(user.getName(), user.getPassword());

		return ResponseEntity.ok(token);
	}
}