package ua.ihor0k.diplom.repository;

import org.springframework.data.repository.CrudRepository;
import ua.ihor0k.diplom.model.Order;
import ua.ihor0k.diplom.model.OrderStatus;

public interface OrderRepository extends CrudRepository<Order, Long> {
    Iterable<Order> findAllByStatus(OrderStatus status);

    Iterable<Order> findAllByStatusIn(OrderStatus... statuses);
}
