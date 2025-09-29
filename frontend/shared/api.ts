// frontend/shared/api.ts

export interface Produto {
  id: number;
  nome: string;
  quantidade_estoque: number;
  // ...outros campos que o backend definir
}

export interface Categoria {
  id: number;
  nome: string;
}
