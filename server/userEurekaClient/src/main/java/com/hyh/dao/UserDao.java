package com.hyh.dao;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import com.hyh.entity.TUser;

@Transactional
public interface UserDao extends CrudRepository<TUser, Integer>, JpaSpecificationExecutor<TUser> {

}
