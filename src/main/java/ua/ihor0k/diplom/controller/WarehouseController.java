package ua.ihor0k.diplom.controller;

import org.springframework.web.bind.annotation.*;
import ua.ihor0k.diplom.model.MaterialOrder;
import ua.ihor0k.diplom.model.Order;
import ua.ihor0k.diplom.model.OrderStatus;
import ua.ihor0k.diplom.model.WarehouseMaterial;
import ua.ihor0k.diplom.repository.MaterialOrderRepository;
import ua.ihor0k.diplom.repository.OrderRepository;
import ua.ihor0k.diplom.repository.WarehouseMaterialRepository;

import javax.websocket.server.PathParam;

@RestController
@RequestMapping(path = "warehouse")
@CrossOrigin(origins = "http://localhost:4200")
public class WarehouseController {
    private final OrderRepository orderRepository;
    private final MaterialOrderRepository materialOrderRepository;
    private final WarehouseMaterialRepository warehouseMaterialRepository;

    public WarehouseController(OrderRepository orderRepository, MaterialOrderRepository materialOrderRepository, WarehouseMaterialRepository warehouseMaterialRepository) {
        this.orderRepository = orderRepository;
        this.warehouseMaterialRepository = warehouseMaterialRepository;
        this.materialOrderRepository = materialOrderRepository;
    }

    @GetMapping("orders")
    public Iterable<Order> getOrders() {
        return orderRepository.findAllByStatus(OrderStatus.IN_WAREHOUSE);
    }

    @GetMapping("materialOrders")
    public Iterable<MaterialOrder> getMaterialOrders() {
        return materialOrderRepository.findAllByCompletedIsFalse();
    }

    @GetMapping("warehouseMaterials")
    public Iterable<WarehouseMaterial> warehouseMaterials() {
        return warehouseMaterialRepository.findAll();
    }

    @PostMapping("complete")
    public MaterialOrder complete(@RequestBody MaterialOrder materialOrder) {
        WarehouseMaterial warehouseMaterial = warehouseMaterialRepository.findByMaterial(materialOrder.getMaterial());
        warehouseMaterial.setAmount(warehouseMaterial.getAmount() - materialOrder.getAmount());
        materialOrder.setCompleted(true);
        warehouseMaterialRepository.save(warehouseMaterial);
        return materialOrderRepository.save(materialOrder);
    }

    @PostMapping("dispatch")
    public Order dispatch(@RequestBody Order order) {
        order.setStatus(OrderStatus.DISPATCHED);
        return orderRepository.save(order);
    }

    @PostMapping("delivery/{id}")
    public WarehouseMaterial delivery(@PathVariable Long id, @RequestBody Double amount) {
        WarehouseMaterial warehouseMaterial = warehouseMaterialRepository.findById(id).orElse(null);
        if (warehouseMaterial != null) {
            warehouseMaterial.setAmount(warehouseMaterial.getAmount() + amount);
            return warehouseMaterialRepository.save(warehouseMaterial);
        }
        return null;
    }
}
