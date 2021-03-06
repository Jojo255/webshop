package com.dhbw.domain.item;

import javax.persistence.*;
import java.util.List;

/**
 * Created by jgerle on 28.02.2017.
 */
@Entity
@DiscriminatorValue("multiple")
public class MultipleItem extends BaseItem {

    @ManyToMany(fetch = FetchType.EAGER, targetEntity = SingleItem.class, cascade = CascadeType.DETACH)
    private List<SingleItem> items;

    public List<SingleItem> getItems() { return items; }

    public void setItems(List<SingleItem> items) {
        this.items = items;
    }
}
