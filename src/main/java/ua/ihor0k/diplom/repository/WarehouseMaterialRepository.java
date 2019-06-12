package ua.ihor0k.diplom.repository;

import org.springframework.data.repository.CrudRepository;
import ua.ihor0k.diplom.model.Material;
import ua.ihor0k.diplom.model.WarehouseMaterial;

public interface WarehouseMaterialRepository extends CrudRepository<WarehouseMaterial, Long> {
    WarehouseMaterial findByMaterial(Material material);

    boolean existsByMaterial(Material material);
}
