package ua.ihor0k.diplom.model;

public enum OrderStatus {
    NEW,
    PLANED,
    PASSED_EDITOR,
    PASSED_ARTIST,
    PASSED_EDITOR_AND_ARTIST,
    READY_TO_PRINT,
    PRINTED,
    IN_WAREHOUSE,
    DISPATCHED
}
