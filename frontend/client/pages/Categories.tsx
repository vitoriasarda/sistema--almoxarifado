import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CategoryForm } from "@/features/categories/components/CategoryForm";
import { CategoryList } from "@/features/categories/components/CategoryList";
import { Sidebar } from "@/components/shared/Sidebar";
import { ArrowLeft } from "lucide-react";

interface Category {
  id: number;
  description: string;
  attributes: string;
}

const initialCategories: Category[] = [];

export default function Categories() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState(initialCategories);

  const handleAddCategory = (newCategory: Omit<Category, "id">) => {
    setCategories((currentCategories) => [
      { ...newCategory, id: Date.now() },
      ...currentCategories,
    ]);
  };

  return (
    <div className="flex min-h-screen bg-secondary-gray">
      <Sidebar />
      <main className="flex-1 p-4 md:p-12 pt-8 md:pt-12">
        <div className="mb-6 md:mb-8">
          <button
            onClick={() => navigate("/cadastros")}
            className="flex items-center gap-2 text-back-nav-text hover:text-back-nav-text/80 transition-colors mb-4 md:mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-[20px] font-medium font-inter">
              Voltar para Cadastros
            </span>
          </button>
          <h1 className="text-4xl md:text-[36px] font-medium font-inter text-primary-blue">
            Cadastro de Categorias
          </h1>
        </div>

        <div className="space-y-8">
          <CategoryForm onAddCategory={handleAddCategory} />
          <CategoryList categories={categories} />
        </div>
      </main>
    </div>
  );
}
