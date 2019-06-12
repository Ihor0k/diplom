package ua.ihor0k.diplom.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ua.ihor0k.diplom.model.Order;
import ua.ihor0k.diplom.repository.OrderRepository;

@RestController
@RequestMapping(path = "manager")
@CrossOrigin(origins = "http://localhost:4200")
public class ManagerController {
    private final OrderRepository orderRepository;

    @Autowired
    public ManagerController(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @PostMapping("orders")
    public Order newOrder(@RequestBody Order order) {
        return orderRepository.save(order);
    }

    @GetMapping("orders")
    public Iterable<Order> getOrders() {
        return orderRepository.findAll();
    }
}

