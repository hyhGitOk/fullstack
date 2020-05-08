package com.hyh.service;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.hyh.dao.UserDao;
import com.hyh.entity.TUser;

@Component
public class UserService {

	private Logger logger = Logger.getLogger(getClass());

	@Autowired
	private UserDao userDao;

	/**
	 * find user by email&password.
	 * 
	 * @param id user id
	 * 
	 * @return TUser
	 */
	public TUser getUser(String email, String password) {

		logger.info(this.getClass().getName() + " getUser enter...");

		// get users
		TUser user = userDao.getUser(email, password);

		logger.info(this.getClass().getName() + " getUser completed.");

		return user;
	}
}
