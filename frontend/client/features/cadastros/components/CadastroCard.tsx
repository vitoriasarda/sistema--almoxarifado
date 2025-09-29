import { Button } from "@/components/ui/button";

interface CadastroCardProps {
  iconSrc: string;
  title: string;
  buttonText: string;
  onClick: () => void;
}

export function CadastroCard({
  iconSrc,
  title,
  buttonText,
  onClick,
}: CadastroCardProps) {
  return (
    <div className="w-full max-w-[228px] h-[262px] bg-white rounded-lg flex flex-col items-center justify-between p-6 mx-auto">
      <div className="flex flex-col items-center flex-1 justify-center">
        <img src={iconSrc} alt={title} className="w-12 h-12 mb-6" />
        <h3 className="text-[28px] font-medium font-inter text-center mb-4 text-primary-blue">
          {title}
        </h3>
      </div>
      <Button
        className="w-[189px] h-[49px] rounded-lg text-white text-[18px] font-medium font-inter bg-primary-blue hover:bg-primary-blue/90 transition-opacity"
        onClick={onClick}
      >
        {buttonText}
      </Button>
    </div>
  );
}
