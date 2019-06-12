package ua.ihor0k.diplom;

import org.springframework.stereotype.Component;
import ua.ihor0k.diplom.model.*;
import ua.ihor0k.diplom.repository.MaterialRepository;
import ua.ihor0k.diplom.repository.OrderRepository;
import ua.ihor0k.diplom.repository.WarehouseMaterialRepository;

import javax.annotation.PostConstruct;
import java.util.Arrays;
import java.util.List;

@Component
public class StartupInit {
    private final OrderRepository orderRepository;
    private final MaterialRepository materialRepository;
    private final WarehouseMaterialRepository warehouseMaterialRepository;

    public StartupInit(OrderRepository orderRepository, MaterialRepository materialRepository, WarehouseMaterialRepository warehouseMaterialRepository) {
        this.orderRepository = orderRepository;
        this.materialRepository = materialRepository;
        this.warehouseMaterialRepository = warehouseMaterialRepository;
    }

    @PostConstruct
    public void init() {
        Order order1 = new Order("Кобзар", "Т.Г. Шевченко", 3000, 400, "Поезія");
        Order order2 = new Order("Джордж і скарби космосу", "Люсі Гокінг", 4000, 220, "Дитяча література");
        Order order3 = new Order("Незнайома Кліо", "Віктор Горобець", 5000, 310, "Історична");
        Order order4 = new Order("Історія України", "Гісем О.В.", 10000, 870, "Довідник");
        Order order5 = new Order("Українська мова та література", "Авраменко О.М.", 60000, 720, "Довідник");
        Order order6 = new Order("Чорнильне серце", "Функе К.", 6000, 400, "Дитяча література");
        Order order7 = new Order("Артур і мініпути", "Люк Бессон", 15000, 360, "Дитяча література");
        Order order8 = new Order("Зернятка", "Віталій Ващенко", 5000, 80, "Поезія");
        Order order9 = new Order("Чорна рада", "Пантелеймон куліш", 3000, 120, "Художня література");
        Order order10 = new Order("Лісова пісня", "Леся Українка", 2000, 200, "Поезія");
        Order order11 = new Order("Побратими", "Шевчук В.", 2400, 550, "Роман");
        Order order12 = new Order("Аеропорт", "Лойко С.", 15000, 360, "Художня проза");
        Order order13 = new Order("Активні форми азоту і кисню", "Данилович Ю.В.", 200, 240, "Хімія");
        Order order14 = new Order("Туга за людяністю", "Марина Гогуля", 300, 175, "Мовознавство");
        Order order15 = new Order("Воно", "Стівен Кінг", 20000, 750, "Художня література");

        Material material1 = new Material("Папір офсетний, 80г/м2", "кг");
        Material material2 = new Material("Папір офсетний, 120г/м2", "кг");
        Material material3 = new Material("Папір офсетний, 160г/м2", "кг");
        Material material4 = new Material("Папір крейдяний, 135г/м2", "кг");
        Material material5 = new Material("Папір крейдяний, 250г/м2", "кг");
        Material material6 = new Material("Картон палітурний, 2мм", "арк");
        Material material7 = new Material("Картон палітурний, 3мм", "арк");
        Material material8 = new Material("Плівка для припресовки", "м");
        Material material9 = new Material("Нитки, 0.1мм", "м");
        Material material10 = new Material("Фарба чорна", "л");
        Material material11 = new Material("Фарба циан", "л");
        Material material12 = new Material("Фарба маджента", "л");
        Material material13 = new Material("Фарба жовта", "л");
        Material material14 = new Material("Пластина офсетна, 60х90см", "шт");
        Material material15 = new Material("Пластина офсетна, 70х100см", "шт");

        MaterialOrder materialOrder1_1 = new MaterialOrder(material15, 31.0);
        MaterialOrder materialOrder1_2 = new MaterialOrder(material1, 800.0);
        MaterialOrder materialOrder1_3 = new MaterialOrder(material3, 50.0);
        MaterialOrder materialOrder1_4 = new MaterialOrder(material6, 1200.0);
        MaterialOrder materialOrder1_5 = new MaterialOrder(material4, 50.0);
        MaterialOrder materialOrder1_6 = new MaterialOrder(material10, 200.0);
        MaterialOrder materialOrder1_7 = new MaterialOrder(material9, 43.5);
        materialOrder1_1.setCompleted(true);
        materialOrder1_4.setCompleted(true);
        materialOrder1_7.setCompleted(true);
        List<MaterialOrder> materialOrders1 = Arrays.asList(materialOrder1_1, materialOrder1_2, materialOrder1_3, materialOrder1_4, materialOrder1_5, materialOrder1_6, materialOrder1_7);
        OrderDetails orderDetails1 = new OrderDetails(496, materialOrders1, 342000);
        order6.setStatus(OrderStatus.PLANED);
        order6.setDetails(orderDetails1);

        MaterialOrder materialOrder2_1 = new MaterialOrder(material14, 24.0);
        MaterialOrder materialOrder2_2 = new MaterialOrder(material1, 1800.0);
        MaterialOrder materialOrder2_3 = new MaterialOrder(material5, 100.0);
        MaterialOrder materialOrder2_4 = new MaterialOrder(material10, 500.0);
        MaterialOrder materialOrder2_5 = new MaterialOrder(material9, 120.0);
        MaterialOrder materialOrder2_6 = new MaterialOrder(material8, 800.0);
        materialOrder2_3.setCompleted(true);
        materialOrder2_5.setCompleted(true);
        materialOrder2_6.setCompleted(true);
        List<MaterialOrder> materialOrders2 = Arrays.asList(materialOrder2_1, materialOrder2_2, materialOrder2_3, materialOrder2_4, materialOrder2_5, materialOrder2_6);
        OrderDetails orderDetails2 = new OrderDetails(416, materialOrders2, 1026000);
        order7.setStatus(OrderStatus.PLANED);
        order7.setDetails(orderDetails2);

        MaterialOrder materialOrder3_1 = new MaterialOrder(material15, 24.0);
        MaterialOrder materialOrder3_2 = new MaterialOrder(material3, 2300.0);
        MaterialOrder materialOrder3_3 = new MaterialOrder(material5, 140.0);
        MaterialOrder materialOrder3_4 = new MaterialOrder(material6, 1300.0);
        MaterialOrder materialOrder3_5 = new MaterialOrder(material10, 500.0);
        MaterialOrder materialOrder3_6 = new MaterialOrder(material11, 120.0);
        MaterialOrder materialOrder3_7 = new MaterialOrder(material12, 140.0);
        MaterialOrder materialOrder3_8 = new MaterialOrder(material13, 110.0);
        MaterialOrder materialOrder3_9 = new MaterialOrder(material9, 20.0);
        MaterialOrder materialOrder3_10 = new MaterialOrder(material8, 340.0);
        materialOrder3_1.setCompleted(true);
        materialOrder3_2.setCompleted(true);
        materialOrder3_3.setCompleted(true);
        materialOrder3_4.setCompleted(true);
        materialOrder3_5.setCompleted(true);
        materialOrder3_6.setCompleted(true);
        materialOrder3_7.setCompleted(true);
        materialOrder3_8.setCompleted(true);
        materialOrder3_9.setCompleted(true);
        materialOrder3_10.setCompleted(true);
        List<MaterialOrder> materialOrders3 = Arrays.asList(materialOrder3_1, materialOrder3_2, materialOrder3_3, materialOrder3_4, materialOrder3_5, materialOrder3_6, materialOrder3_7, materialOrder3_8, materialOrder3_9, materialOrder3_10);
        OrderDetails orderDetails3 = new OrderDetails(85, materialOrders3, 458000);
        order9.setStatus(OrderStatus.PASSED_ARTIST);
        order9.setDetails(orderDetails3);


        MaterialOrder materialOrder4_1 = new MaterialOrder(material14, 28.0);
        MaterialOrder materialOrder4_2 = new MaterialOrder(material1, 1300.0);
        MaterialOrder materialOrder4_3 = new MaterialOrder(material5, 120.0);
        MaterialOrder materialOrder4_4 = new MaterialOrder(material10, 200.0);
        MaterialOrder materialOrder4_5 = new MaterialOrder(material9, 80.0);
        MaterialOrder materialOrder4_6 = new MaterialOrder(material8, 340.0);
        materialOrder4_1.setCompleted(true);
        materialOrder4_2.setCompleted(true);
        materialOrder4_4.setCompleted(true);
        materialOrder4_6.setCompleted(true);
        List<MaterialOrder> materialOrders4 = Arrays.asList(materialOrder4_1, materialOrder4_2, materialOrder4_3, materialOrder4_4, materialOrder4_5, materialOrder4_6);
        OrderDetails orderDetails4 = new OrderDetails(185, materialOrders4, 348900);
        order10.setStatus(OrderStatus.PRINTED);
        order10.setDetails(orderDetails4);


        MaterialOrder materialOrder7_1 = new MaterialOrder(material15, 34.0);
        MaterialOrder materialOrder7_2 = new MaterialOrder(material1, 500.0);
        MaterialOrder materialOrder7_3 = new MaterialOrder(material3, 20.0);
        MaterialOrder materialOrder7_4 = new MaterialOrder(material7, 1500.0);
        MaterialOrder materialOrder7_5 = new MaterialOrder(material4, 54.0);
        MaterialOrder materialOrder7_6 = new MaterialOrder(material10, 220.0);
        MaterialOrder materialOrder7_7 = new MaterialOrder(material9, 55.0);
        materialOrder7_1.setCompleted(true);
        materialOrder7_3.setCompleted(true);
        materialOrder7_4.setCompleted(true);
        materialOrder7_5.setCompleted(true);
        materialOrder7_6.setCompleted(true);
        materialOrder7_7.setCompleted(true);
        List<MaterialOrder> materialOrders7 = Arrays.asList(materialOrder7_1, materialOrder7_2, materialOrder7_3, materialOrder7_4, materialOrder7_5, materialOrder7_6, materialOrder7_7);
        OrderDetails orderDetails7 = new OrderDetails(680, materialOrders7, 889800);
        order11.setStatus(OrderStatus.READY_TO_PRINT);
        order11.setDetails(orderDetails7);

        List<Order> orders = Arrays.asList(order1, order2, order3, order4, order5, order6, order7, order8, order9, order10, order11, order12, order13, order14, order15);
        orderRepository.saveAll(orders);

        materialRepository.saveAll(Arrays.asList(material1, material2, material3));

        List<WarehouseMaterial> warehouseMaterials = Arrays.asList(
                new WarehouseMaterial(material1, 2240.0),
                new WarehouseMaterial(material2, 5540.0),
                new WarehouseMaterial(material3, 4530.0),
                new WarehouseMaterial(material4, 7489.0),
                new WarehouseMaterial(material5, 6876.0),
                new WarehouseMaterial(material6, 1358.0),
                new WarehouseMaterial(material7, 324.0),
                new WarehouseMaterial(material8, 789.0),
                new WarehouseMaterial(material9, 540.0),
                new WarehouseMaterial(material10, 9985.0),
                new WarehouseMaterial(material11, 1289.0),
                new WarehouseMaterial(material12, 465.0),
                new WarehouseMaterial(material13, 6689.0),
                new WarehouseMaterial(material14, 9875.0),
                new WarehouseMaterial(material15, 569.0)
        );

        warehouseMaterialRepository.saveAll(warehouseMaterials);
    }
}
