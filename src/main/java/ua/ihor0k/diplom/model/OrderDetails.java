package ua.ihor0k.diplom.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class OrderDetails {
    @Id
    @GeneratedValue
    private Long id;
    private Integer sheets;
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<MaterialOrder> materials;
    private Integer price;

    public OrderDetails(Integer sheets, List<MaterialOrder> materials, Integer price) {
        this.sheets = sheets;
        this.materials = materials;
        this.price = price;
    }
}
