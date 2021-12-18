export interface DetalleReserva {
    id:       number;
    ingreso:  Date | null;
    salida:   Date | null;
    precio:   number;
    adelanto: number;
    dias:     number;
}
