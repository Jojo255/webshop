package com.dhbw.domain.item;

import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

/**
 * Created by jgerle on 14.02.2017.
 */
@Transactional
public interface ItemDao extends CrudRepository<Item, Long> {

}
