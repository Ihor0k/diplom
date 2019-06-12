package ua.ihor0k.diplom.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
public class Material {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String unit;

    public Material(String name, String unit) {
        this.name = name;
        this.unit = unit;
    }
}
