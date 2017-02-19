package com.dhbw.domain.item;

import javax.persistence.*;
import java.util.List;

/**
 * Created by jgerle on 14.02.2017.
 */
@Entity
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private String description;

    @OneToMany(targetEntity = Item.class, cascade = CascadeType.ALL)
    private List<Item> items;

    @OneToMany(targetEntity = ItemSet.class, cascade = CascadeType.ALL)
    private List<ItemSet> itemSets;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    
    public List<Item> getItems() { return items; }

    public void setItems(List<Item> items) {
        this.items = items;
    }

    public List<ItemSet> getItemSets() {
        return itemSets;
    }

    public void setItemSets(List<ItemSet> itemSets) {
        this.itemSets = itemSets;
    }
}
