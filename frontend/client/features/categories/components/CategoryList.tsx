import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface Category {
  id: number;
  description: string;
  attributes: string;
}

interface CategoryListProps {
  categories: Category[];
}

export function CategoryList({ categories }: CategoryListProps) {
  return (
    <div className="w-full bg-white rounded-lg p-6 md:p-8">
      <h2 className="text-[26px] font-medium font-inter mb-6 text-primary-blue">
        Categorias Cadastradas
      </h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-[16px] font-medium text-primary-blue">
                DESCRIÇÃO
              </TableHead>
              <TableHead className="text-[16px] font-medium text-primary-blue text-right">
                AÇÕES
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell className="text-[14px]">{category.description}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="link"
                    className="text-[#0859FF] hover:text-[#0859FF]/80 p-0 mr-2 h-auto text-[14px] font-medium"
                  >
                    EDITAR
                  </Button>
                  <Button
                    variant="link"
                    className="text-[#FF0808] hover:text-[#FF0808]/80 p-0 h-auto text-[14px] font-medium"
                  >
                    EXCLUIR
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
