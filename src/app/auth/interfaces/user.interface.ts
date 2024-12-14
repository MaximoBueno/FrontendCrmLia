export interface LoginUsuarioRequest{
    correo:string;
    clave:string;
}

export interface LoginUsuarioResponse{
    value:UserResponse,
    hasSucceeded:boolean
}

export interface UserResponse {
    token: string;
}