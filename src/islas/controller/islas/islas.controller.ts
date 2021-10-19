import { Body, Controller, Get } from '@nestjs/common';
import { ManejoIslasService } from '../../services/manejo-islas/manejo-islas.service'
import { CMapa, CResultado } from '../../dto/Mapa.class';

@Controller('islas')
export class IslasController {

    constructor(
        private manejoIslasService: ManejoIslasService
    ) {}

    @Get()
    islasAll(@Body() xdatos: CMapa): CResultado {
        return this.manejoIslasService.getCantidadIslas(xdatos);
    }
}
