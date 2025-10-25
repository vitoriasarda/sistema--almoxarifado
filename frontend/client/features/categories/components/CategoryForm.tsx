import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface NewCategory {
  description: string;
  attributes: string;
}

interface CategoryFormProps {
  onAddCategory: (category: NewCategory) => void;
}

export function CategoryForm({ onAddCategory }: CategoryFormProps) {
  const [description, setDescription] = useState("");
  const [attributes, setAttributes] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!description || !attributes) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    onAddCategory({
      description,
      attributes,
    });

    setDescription("");
    setAttributes("");
  };

  return (
    <div className="w-full bg-white rounded-lg p-6 md:p-8">
      <div className="flex items-center mb-8">
        <svg
          className="w-12 h-12 mr-4 flex-shrink-0"
          viewBox="0 0 49 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2001_48)">
            <path
              d="M24.5 4.25L13.2708 23.375H35.7292L24.5 4.25Z"
              fill="#52658C"
            />
            <path
              d="M35.7292 46.75C40.8033 46.75 44.9167 42.4687 44.9167 37.1875C44.9167 31.9063 40.8033 27.625 35.7292 27.625C30.655 27.625 26.5417 31.9063 26.5417 37.1875C26.5417 42.4687 30.655 46.75 35.7292 46.75Z"
              fill="#52658C"
            />
            <path
              d="M6.125 28.6875H22.4583V45.6875H6.125V28.6875Z"
              fill="#52658C"
            />
          </g>
          <defs>
            <clipPath id="clip0_2001_48">
              <rect width="49" height="51" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <h2 className="text-[26px] font-medium font-inter text-primary-blue">
          Adicionar Nova Categoria
        </h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
            className="w-full h-[31px] px-3 border-light-border rounded-lg"
          />
        </div>
        <div>
          <Label
            htmlFor="attributes"
            className="block text-[16px] font-medium font-inter mb-2 text-primary-blue"
          >
            ATRIBUTOS
          </Label>
          <Input
            id="attributes"
            type="text"
            value={attributes}
            onChange={(e) => setAttributes(e.target.value)}
            className="w-full h-[31px] px-3 border-light-border rounded-lg"
          />
        </div>
        <div className="md:col-span-2 mt-6 flex justify-end">
          <Button
            type="submit"
            className="px-6 h-[43px] bg-primary-blue text-white text-[16px] font-medium rounded-lg hover:bg-primary-blue/90"
          >
            ADICIONAR CATEGORIA
          </Button>
        </div>
      </form>
    </div>
  );
}
