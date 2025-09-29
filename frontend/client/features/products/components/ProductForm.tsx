import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// 1. Definimos a "forma" de um novo produto (sem o ID)
interface NewProduct {
  description: string;
  quantity: number;
  category: string;
}

// 2. Definimos que o componente receberá uma função como propriedade
interface ProductFormProps {
  onAddProduct: (product: NewProduct) => void;
}

export function ProductForm({ onAddProduct }: ProductFormProps) {
  // 3. Estados para controlar os valores dos inputs
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Impede que a página recarregue

    // Validação simples
    if (!description || !quantity || !category) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // 4. Chama a função do componente "pai" com os novos dados
    onAddProduct({
      description,
      quantity: Number(quantity),
      category,
    });

    // 5. Limpa os campos do formulário após o envio
    setDescription("");
    setQuantity("");
    setCategory("");
  };

  return (
    <div className="w-full bg-white rounded-lg p-6 md:p-8">
      <div className="flex items-center mb-8">
        <img
          src="/assets/icone-produtos.svg"
          alt="Produtos"
          className="w-11 h-12 mr-4"
        />
        <h2 className="text-[26px] font-medium font-inter text-primary-blue">
          Adicionar Novo Produto
        </h2>
      </div>
      {/* 6. Adiciona o evento onSubmit ao formulário */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div>
          <Label
            htmlFor="description"
            className="block text-[16px] font-medium font-inter mb-2 text-primary-blue"
          >
            DESCRIÇÃO
          </Label>
          <Input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-[31px] px-3 border-light-border"
          />
        </div>
        <div>
          <Label
            htmlFor="initial-quantity"
            className="block text-[16px] font-medium font-inter mb-2 text-primary-blue"
          >
            QUANTIDADE INICIAL
          </Label>
          <Input
            id="initial-quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full h-[31px] px-3 border-light-border"
          />
        </div>
        <div>
          <Label className="block text-[16px] font-medium font-inter mb-2 text-primary-blue">
            CATEGORIA
          </Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full h-[31px] px-3 border-light-border">
              <SelectValue placeholder="Selecionar categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Categoria A">Categoria A</SelectItem>
              <SelectItem value="Categoria B">Categoria B</SelectItem>
              <SelectItem value="Categoria C">Categoria C</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="md:col-span-3 mt-6 flex justify-end">
          <Button
            type="submit"
            className="px-6 py-2 bg-primary-blue text-white rounded-lg hover:bg-primary-blue/90"
          >
            Adicionar Produto
          </Button>
        </div>
      </form>
    </div>
  );
}
