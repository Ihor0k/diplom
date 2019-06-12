package ua.ihor0k.diplom.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class Order {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String author;
    private Integer copies;
    private Integer manuscriptSheets;
    private String subject;
    @OneToOne(cascade = CascadeType.ALL)
    private OrderDetails details;
    private OrderStatus status = OrderStatus.NEW;

    public Order(String name, String author, Integer copies, Integer manuscriptSheets, String subject) {
        this.name = name;
        this.author = author;
        this.copies = copies;
        this.manuscriptSheets = manuscriptSheets;
        this.subject = subject;
    }
}
