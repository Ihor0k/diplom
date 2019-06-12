package ua.ihor0k.diplom.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class MaterialOrder {
    @Id
    @GeneratedValue
    private Long id;
    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private Material material;
    private Double amount;
    private boolean completed;

    public MaterialOrder(Material material, Double amount) {
        this.material = material;
        this.amount = amount;
    }
}
