import { Sidebar } from "@/components/shared/Sidebar";

export default function Index() {
  return (
    <div className="flex min-h-screen bg-secondary-gray">
      <Sidebar />

      {/* Conteúdo Principal */}
      <main className="flex-1 p-4 md:p-8 pt-10 md:pt-10">
        {/* Cards de Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 mb-6 md:mb-6">
          <div className="w-full max-w-[310px] h-[155px] bg-white rounded-lg flex flex-col justify-center items-center mx-auto md:mx-0">
            <h3 className="text-lg md:text-[24px] font-medium font-inter text-center mb-4 text-primary-blue">
              Total de itens
            </h3>
          </div>
          <div className="w-full max-w-[310px] h-[155px] bg-white rounded-lg flex flex-col justify-center items-center mx-auto md:mx-0">
            <h3 className="text-lg md:text-[24px] font-medium font-inter text-center mb-4 text-primary-blue">
              Requisições pendentes
            </h3>
          </div>
          <div className="w-full max-w-[310px] h-[155px] bg-white rounded-lg flex flex-col justify-center items-center mx-auto md:mx-0">
            <h3 className="text-lg md:text-[24px] font-medium font-inter text-center mb-4 text-primary-blue">
              Itens com estoque baixo
            </h3>
          </div>
        </div>

        {/* Tabelas de Dados */}
        <div className="space-y-4 md:space-y-6">
          {/* Tabela de Itens com estoque baixo */}
          <div className="w-full max-w-[960px] bg-white rounded-lg p-4 md:p-6">
            <h2 className="text-lg md:text-[24px] font-medium font-inter mb-4 md:mb-6 text-primary-blue">
              Itens com estoque baixo
            </h2>
            <div className="w-full h-10 rounded-lg flex items-center px-4 bg-gray-200 bg-opacity-50">
              <div className="text-sm md:text-[16px] font-medium font-inter text-primary-blue w-1/2">
                PRODUTO
              </div>
              <div className="text-sm md:text-[16px] font-medium font-inter text-primary-blue w-1/2">
                QUANTIDADE
              </div>
            </div>
            {/* As linhas da tabela virão da API aqui */}
          </div>

          {/* Tabela de Requisições pendentes */}
          <div className="w-full max-w-[960px] bg-white rounded-lg p-4 md:p-6">
            <h2 className="text-lg md:text-[24px] font-medium font-inter mb-4 md:mb-6 text-primary-blue">
              Requisições pendentes
            </h2>
            <div className="w-full h-10 rounded-lg flex items-center px-4 bg-gray-200 bg-opacity-50">
              <div className="text-sm md:text-[16px] font-medium font-inter text-primary-blue w-1/3">
                PRODUTO
              </div>
              <div className="text-sm md:text-[16px] font-medium font-inter text-primary-blue w-1/3">
                QUANTIDADE
              </div>
              <div className="text-sm md:text-[16px] font-medium font-inter text-primary-blue w-1/3">
                STATUS
              </div>
            </div>
            {/* As linhas da tabela virão da API aqui */}
          </div>

          {/* Tabela de Últimas movimentações */}
          <div className="w-full max-w-[960px] bg-white rounded-lg p-4 md:p-6">
            <h2 className="text-lg md:text-[24px] font-medium font-inter mb-4 md:mb-6 text-primary-blue">
              Últimas movimentações
            </h2>
            <div className="w-full h-10 rounded-lg flex items-center px-4 bg-gray-200 bg-opacity-50">
              <div className="text-sm md:text-[16px] font-medium font-inter text-primary-blue w-1/4">
                TIPO
              </div>
              <div className="text-sm md:text-[16px] font-medium font-inter text-primary-blue w-1/4">
                PRODUTO
              </div>
              <div className="text-sm md:text-[16px] font-medium font-inter text-primary-blue w-1/4">
                QUANTIDADE
              </div>
              <div className="text-sm md:text-[16px] font-medium font-inter text-primary-blue w-1/4">
                DATA
              </div>
            </div>
            {/* As linhas da tabela virão da API aqui */}
          </div>
        </div>
      </main>

      {/* Header Mobile */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-10 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-center">
          <img
            src="/assets/faurg-logo.png"
            alt="FAURG Logo"
            className="w-24 h-auto"
          />
        </div>
      </div>
    </div>
  );
}
