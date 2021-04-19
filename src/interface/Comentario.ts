export interface Comentario {
    idComentario?: number;
    idForo: number;
    idComentarioPadre?: number;
    idUsuario: number;
    contenido: string;
}