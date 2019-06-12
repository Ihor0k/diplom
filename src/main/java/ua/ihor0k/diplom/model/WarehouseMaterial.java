package ua.ihor0k.diplom.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class WarehouseMaterial {
    @Id
    @GeneratedValue
    private Long id;
    @OneToOne(cascade = CascadeType.MERGE)
    private Material material;
    private Double amount;

    public WarehouseMaterial(Material material, Double amount) {
        this.material = material;
        this.amount = amount;
    }
}
