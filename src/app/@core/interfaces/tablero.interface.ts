export interface DiputadoVotacion {
    Oid: string;
    Sesion: string;
    Orden: number;
    NombreCompleto: string;
    Asistencia: number;
    Votacion: number;
    Ubicacion: number;
    VotacionActiva: boolean;
    Partido: string;
  }

export interface Totales {
    count: number;
  }
export interface TiempoRestante {
    minutos: number;
    segundos: number;
    tiemporestante: number;
  }
