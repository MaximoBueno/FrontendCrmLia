export interface ResponseContacto {
    value: Value
    hasSucceeded: boolean
  }
  
  export interface Value {
    contactos: Contacto[]
  }
  
  export interface Contacto {
    id: number
    idGestor: number
    idGestorAsignado: any
    nombres: string
    apellidoPaterno: string
    apellidoMaterno: string
    idTipoDocumento: number
    numeroDocumento: string
    fechaCreacion: string
  }
  