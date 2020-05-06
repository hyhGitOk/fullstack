package com.hyh.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.hyh.entity.TUser;
import com.hyh.service.UserService;
import com.hyh.utility.CollectionUtil;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {

	@Autowired
	private UserService userService;

	/**
	 * Find all access level
	 * 
	 * @param request HttpServletRequest
	 * @return StatusDto
	 * @throws IOException
	 */
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<Iterable<TUser>> findAll(HttpServletRequest request) throws IOException {
		Iterable<TUser> userList = null;
		userList = userService.findAll();
		if (CollectionUtil.isEmpty(userList)) {
			ResponseEntity.notFound();
		}
		return ResponseEntity.ok(userList);
	}
}