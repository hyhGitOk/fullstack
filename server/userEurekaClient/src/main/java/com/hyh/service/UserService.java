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
	 * find all users
	 * 
	 * @return all user list
	 */
	public Iterable<TUser> findAll() {

		logger.info(this.getClass().getName() + " findAll enter...");

		// get users
		Iterable<TUser> userList = userDao.findAll();

		logger.info(this.getClass().getName() + " findAll completed.");

		return userList;
	}

	/**
	 * Delete user by id
	 * 
	 * @param id user id
	 */
	public void deleteUserById(int id) {

		logger.info(this.getClass().getName() + " deleteUserById enter...");

		// get user by id
		TUser userEntity = userDao.findOne(id);

		// delete user
		userDao.delete(userEntity);

		logger.info(this.getClass().getName() + " deleteUserById completed.");

	}
}
