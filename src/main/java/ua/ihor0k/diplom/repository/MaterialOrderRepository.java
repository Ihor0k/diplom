package ua.ihor0k.diplom.repository;

import org.springframework.data.repository.CrudRepository;
import ua.ihor0k.diplom.model.MaterialOrder;

public interface MaterialOrderRepository extends CrudRepository<MaterialOrder, Long> {
    Iterable<MaterialOrder> findAllByCompletedIsFalse();
}
