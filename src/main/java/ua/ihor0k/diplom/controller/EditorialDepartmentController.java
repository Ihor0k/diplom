package ua.ihor0k.diplom.controller;

import org.springframework.web.bind.annotation.*;
import ua.ihor0k.diplom.model.Order;
import ua.ihor0k.diplom.model.OrderStatus;
import ua.ihor0k.diplom.repository.OrderRepository;

@RestController
@RequestMapping(path = "editorialDepartment")
@CrossOrigin(origins = "http://localhost:4200")
public class EditorialDepartmentController {
    private final OrderRepository orderRepository;

    public EditorialDepartmentController(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @GetMapping("orders")
    public Iterable<Order> getOrders() {
        return orderRepository.findAllByStatusIn(OrderStatus.PLANED, OrderStatus.PASSED_ARTIST, OrderStatus.PASSED_EDITOR, OrderStatus.PASSED_EDITOR_AND_ARTIST);
    }

    @PostMapping("editor")
    public Order editor(@RequestBody Order order) {
        if (order.getStatus() == OrderStatus.PASSED_ARTIST) {
            order.setStatus(OrderStatus.PASSED_EDITOR_AND_ARTIST);
        } else {
            order.setStatus(OrderStatus.PASSED_EDITOR);
        }
        return orderRepository.save(order);
    }

    @PostMapping("artist")
    public Order artist(@RequestBody Order order) {
        if (order.getStatus() == OrderStatus.PASSED_EDITOR) {
            order.setStatus(OrderStatus.PASSED_EDITOR_AND_ARTIST);
        } else {
            order.setStatus(OrderStatus.PASSED_ARTIST);
        }
        return orderRepository.save(order);
    }


    @PostMapping("bookmaker")
    public Order bookmaker(@RequestBody Order order) {
        order.setStatus(OrderStatus.READY_TO_PRINT);
        return orderRepository.save(order);
    }
}
