import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

// 1. Definimos a "forma" de um produto para usar no TypeScript
interface Product {
  id: number;
  description: string;
  quantity: number;
  category: string;
}

// 2. Definimos que o componente receberá uma lista de produtos como propriedade
interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  return (
    <div className="w-full bg-white rounded-lg p-6 md:p-8">
      <h2 className="text-[26px] font-medium font-inter mb-6 text-primary-blue">
        Produtos Cadastrados
      </h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-[16px] font-medium text-primary-blue">
                DESCRIÇÃO
              </TableHead>
              <TableHead className="text-[16px] font-medium text-primary-blue">
                QUANTIDADE
              </TableHead>
              <TableHead className="text-[16px] font-medium text-primary-blue">
                CATEGORIA
              </TableHead>
              <TableHead className="text-[16px] font-medium text-primary-blue">
                AÇÕES
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* 3. Mapeamos a lista de produtos recebida via props */}
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>
                  <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-800 p-0 mr-2 h-auto"
                  >
                    Editar
                  </Button>
                  <Button
                    variant="link"
                    className="text-red-600 hover:text-red-800 p-0 h-auto"
                  >
                    Excluir
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
