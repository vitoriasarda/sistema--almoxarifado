import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Início", path: "/", icon: "/assets/icone-inicio.svg" },
  {
    name: "Cadastros",
    path: "/cadastros",
    icon: "/assets/icone-cadastros.svg",
  },
  {
    name: "Movimentações",
    path: "/movimentacoes",
    icon: "/assets/icone-movimentacoes.svg",
  },
  {
    name: "Requisições",
    path: "/requisicoes",
    icon: "/assets/icone-requisicoes.svg",
  },
  {
    name: "Relatórios",
    path: "/relatorios",
    icon: "/assets/icone-relatorios.svg",
  },
];

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation(); // Hook para saber a página atual

  return (
    <aside className="w-[373px] bg-white flex-col hidden md:flex">
      <div className="flex items-center justify-center py-8 px-6">
        <img
          src="/assets/faurg-logo.png"
          alt="FAURG Logo"
          className="w-48 h-auto"
        />
      </div>
      <nav className="flex-1 px-9 space-y-3">
        {navItems.map((item) => {
          // Verifica se a rota atual corresponde ao item de navegação
          const isActive = location.pathname === item.path;
          return (
            <div
              key={item.name}
              className={cn(
                "flex items-center px-4 py-4 rounded-lg hover:bg-gray-100 hover:bg-opacity-60 cursor-pointer",
                isActive && "bg-light-gray-bg" // Aplica a classe se estiver ativo
              )}
              onClick={() => navigate(item.path)}
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-10 h-10 mr-6 flex-shrink-0"
              />
              <span className="text-[28px] font-medium font-inter text-primary-blue">
                {item.name}
              </span>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
