package ua.ihor0k.diplom.controller;

import org.springframework.web.bind.annotation.*;
import ua.ihor0k.diplom.model.Order;
import ua.ihor0k.diplom.model.OrderStatus;
import ua.ihor0k.diplom.repository.OrderRepository;

@RestController
@RequestMapping(path = "printDepartment")
@CrossOrigin(origins = "http://localhost:4200")
public class PrintDepartmentController {
    private final OrderRepository orderRepository;

    public PrintDepartmentController(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @GetMapping("orders")
    public Iterable<Order> getOrders() {
        return orderRepository.findAllByStatusIn(OrderStatus.READY_TO_PRINT, OrderStatus.PRINTED);
    }

    @PostMapping("printer")
    public Order printer(@RequestBody Order order) {
        order.setStatus(OrderStatus.PRINTED);
        return orderRepository.save(order);
    }

    @PostMapping("bookbinder")
    public Order bookbinder(@RequestBody Order order) {
        order.setStatus(OrderStatus.IN_WAREHOUSE);
        return orderRepository.save(order);
    }
}
