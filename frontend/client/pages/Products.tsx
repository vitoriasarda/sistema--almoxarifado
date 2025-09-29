import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductForm } from "@/features/products/components/ProductForm";
import { ProductList } from "@/features/products/components/ProductList";
import { Sidebar } from "@/components/shared/Sidebar";

// Definimos a "forma" do produto novamente para o estado
interface Product {
  id: number;
  description: string;
  quantity: number;
  category: string;
}

// Dados iniciais de exemplo
const initialProducts: Product[] = [
  {
    id: 1,
    description: "Produto exemplo 1",
    quantity: 50,
    category: "Categoria A",
  },
  {
    id: 2,
    description: "Produto exemplo 2",
    quantity: 25,
    category: "Categoria B",
  },
];

export default function Products() {
  const navigate = useNavigate();
  // . O estado com a lista de produtos
  const [products, setProducts] = useState(initialProducts);

  // . Função para adicionar um novo produto à lista
  const handleAddProduct = (newProduct: Omit<Product, "id">) => {
    setProducts((currentProducts) => [
      // Cria um novo produto com um ID aleatório (temporário, ))
      { ...newProduct, id: Date.now() },
      ...currentProducts, // Adiciona o resto dos produtos existentes
    ]);
  };

  return (
    <div className="flex min-h-screen bg-secondary-gray">
      <Sidebar />
      <main className="flex-1 p-4 md:p-12 pt-20 md:pt-12">
        {/* ... código do botão "Voltar" e do Título da Página ... */}

        <div className="space-y-8">
          {/* . Passamos a função para o formulário */}
          <ProductForm onAddProduct={handleAddProduct} />
          {/* . Passamos a lista de produtos para a tabela */}
          <ProductList products={products} />
        </div>
      </main>
    </div>
  );
}
