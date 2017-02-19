package com.dhbw.domain.item;

import javax.persistence.*;
import java.util.List;

/**
 * Created by jgerle on 14.02.2017.
 */
@Entity
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    @ManyToOne(targetEntity = Category.class, cascade = CascadeType.ALL)
    private Category category;

    @ManyToMany(targetEntity = ItemSet.class, cascade = CascadeType.ALL)
    private List<ItemSet> itemSets;

    private String description;

    private double price;

    private String color;

    private int weight;

    private String material;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) { this.name = name; }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) { this.category = category; }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public List<ItemSet> getItemSets() { return itemSets; }

    public void setItemSets(List<ItemSet> itemSets) { this.itemSets = itemSets; }
}