package ua.ihor0k.diplom.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ua.ihor0k.diplom.model.*;
import ua.ihor0k.diplom.repository.MaterialRepository;
import ua.ihor0k.diplom.repository.OrderRepository;
import ua.ihor0k.diplom.repository.WarehouseMaterialRepository;

@RestController
@RequestMapping(path = "planningDepartment")
@CrossOrigin(origins = "http://localhost:4200")
public class PlanningDepartmentController {
    private final OrderRepository orderRepository;
    private final MaterialRepository materialRepository;
    private final WarehouseMaterialRepository warehouseMaterialRepository;

    @Autowired
    public PlanningDepartmentController(OrderRepository orderRepository, MaterialRepository materialRepository, WarehouseMaterialRepository warehouseMaterialRepository) {
        this.orderRepository = orderRepository;
        this.materialRepository = materialRepository;
        this.warehouseMaterialRepository = warehouseMaterialRepository;
    }

    @PostMapping("orders")
    public Order newOrder(@RequestBody Order order) {
        order.setStatus(OrderStatus.PLANED);
        order = orderRepository.save(order);
        for (MaterialOrder materialOrder : order.getDetails().getMaterials()) {
            Material material = materialOrder.getMaterial();
            if (!warehouseMaterialRepository.existsByMaterial(material)) {
                WarehouseMaterial warehouseMaterial = new WarehouseMaterial(material, 0.0);
                warehouseMaterialRepository.save(warehouseMaterial);
            }
        }
        return order;
    }

    @GetMapping("orders")
    public Iterable<Order> getOrders() {
        return orderRepository.findAllByStatus(OrderStatus.NEW);
    }

    @GetMapping("materials")
    public Iterable<Material> getMaterials() {
        return materialRepository.findAll();
    }
}

