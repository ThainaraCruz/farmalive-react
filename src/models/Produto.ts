import Categoria from "./Categoria";

export default interface Produto {
id?: number | null;
nome: string;
preco: number;
descricao: string;
fabricante: string;
categoria: Categoria | null;

}