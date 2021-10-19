import { Injectable } from '@nestjs/common';
import { CMapa, CResultado } from '../../dto/Mapa.class';

@Injectable()
export class ManejoIslasService {
    private auxMapa: number[][];
    private coordenada: string[];
    private maxX: number;
    private maxY: number;

    getCantidadIslas(mapa: CMapa): CResultado {
        this.auxMapa = [];
        this.auxMapa.push(...mapa.datos);

        let contIslas = 0;
        this.coordenada = [];
        this.maxX = this.auxMapa.length -1;
        this.maxY = this.auxMapa[0].length -1;

        this.auxMapa.forEach((valFil, x) => {
            valFil.forEach((valCol, y) => {

                if ((valCol === 1) && (!this.existeCoordenada(x, y))) {
                    contIslas++;
                    this.calcularArea(x, y);
                }
            });
        });

        return new CResultado(`Cantidad de Islas: ${contIslas}`);
    }

    private calcularArea(x: number, y: number) : void {

        if ((this.auxMapa[x][y] === 1) && (!this.existeCoordenada(x, y))) {
            this.coordenada.push(... [`${x},${y}`]);
        }

        if ((y + 1) <= this.maxY) {
            if ((this.auxMapa[x][y + 1] === 1) && (!this.existeCoordenada(x, y + 1))) {
                this.calcularArea(x, y + 1);
            }
        }

        if ((y - 1) >= 0) {
            if ((this.auxMapa[x][y - 1] === 1) && (!this.existeCoordenada(x, y - 1))) {
                this.calcularArea(x, y - 1);
            }
        }

        if ((x + 1) <= this.maxX) {
            if ((this.auxMapa[x + 1][y] === 1) && (!this.existeCoordenada(x + 1, y))) {
                this.calcularArea(x + 1, y);
            }
        }

        if ((x - 1) >= 0) {
            if ((this.auxMapa[x - 1][y] === 1) && (!this.existeCoordenada(x - 1, y))) {
                this.calcularArea(x - 1, y);
            }
        }
    }

    private existeCoordenada(x: number, y: number) : boolean {
        return this.coordenada.includes(`${x},${y}`);
    }
}
