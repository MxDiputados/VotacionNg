import gql from 'graphql-tag';
export const listaPersonajes = gql`
query listaPersonajes($skip: Boolean!) {
    characters {
        id
        name
        actor @skip(if: $skip)
        description @skip(if: $skip)
        total_episodes @skip(if: $skip)
        photo @skip(if: $skip)
        url @skip(if: $skip)
        votes
    }
}
`;
export const queryVotacionActiva = gql`
{
  getVotacionActiva {
    OID
    FHoraInicioVotacion
    FHoraFinVotacion
    Tema {
      NombreTema
      Activa
      Descripcion
      UltimaVotacion {
        OID
        Activa
        FHoraInicioVotacion
        FHoraFinVotacion
        Resultado
        Votos {
          Oid
          TipoVoto
          PosicionVoto
          fechaHora
          Diputado {
            NombreCompleto
            NombreAMostrar
            OID
            Partido {
              NombrePartido
              NombreCompleto
              OID
              Orden
            }
          }
        }
      }
    }
    Votos {
      Oid
      TipoVoto
      PosicionVoto
      fechaHora
      FechaHoraUltima
      Diputado {
        OID
        NombreCompleto
        NombreAMostrar
        Partido {
          OID
          Orden
          NombrePartido
          NombreCompleto
        }
      }
    }
  }
}
`;
export const queryAsistenciaActiva = gql`
 {
  getAsistenciaActiva {
    Oid
    Numero
    FechaHoraInicioRegistro
    FechaHoraFinRegistro
    Activa
    Cerrada
    Asistencias {
      Oid
      TipoAsistencia
      FechaHora
      FechaHoraUltima
      Diputado{
        OID
        Nombre
        NombreCompleto
        NombreAMostrar
        Partido{
          Orden
          OID
          NombrePartido
          NombreCompleto
        }
      }
    }
  }
}
`;

export const queryAllDiputados = gql`
{
  allDiputados{
    OID
    Nombre
    PrimerApellido
    SegundoApellido
    NombreCompleto
    NombreAMostrar
    Partido{
      OID
      Orden
      NombrePartido
      NombreCompleto
    }
  }
}
`;
