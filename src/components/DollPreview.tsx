
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Share2, RotateCw } from 'lucide-react';

interface DollPreviewProps {
  photo: string;
}

export function DollPreview({ photo }: DollPreviewProps) {
  const [dollImage, setDollImage] = useState<string | null>(null);
  
  useEffect(() => {
    // В реальном приложении здесь был бы запрос к API для создания куклы
    // Сейчас просто имитируем результат
    setDollImage(photo);
  }, [photo]);

  const downloadDoll = () => {
    if (!dollImage) return;
    
    const link = document.createElement('a');
    link.href = dollImage;
    link.download = 'my-virtual-doll.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const shareDoll = () => {
    if (navigator.share && dollImage) {
      navigator.share({
        title: 'Моя виртуальная кукла',
        text: 'Смотри, какую куклу я создал!',
        url: dollImage
      }).catch(console.error);
    } else {
      alert('Функция поделиться не поддерживается вашим браузером');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-xs bg-gradient-to-b from-blue-50 to-pink-50 rounded-lg p-6 mb-4">
        {dollImage ? (
          <img 
            src={dollImage} 
            alt="Виртуальная кукла" 
            className="w-full h-auto rounded-lg object-contain doll-animation"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(0, 0, 0, 0.1))'
            }}
          />
        ) : (
          <div className="w-full h-64 flex items-center justify-center">
            <RotateCw className="w-8 h-8 text-gray-400 animate-spin" />
          </div>
        )}
      </div>
      
      <div className="flex gap-4 mt-4 w-full">
        <Button 
          variant="outline" 
          className="flex-1"
          onClick={downloadDoll}
          disabled={!dollImage}
        >
          <Download className="mr-2 h-4 w-4" />
          Скачать
        </Button>
        <Button 
          variant="outline" 
          className="flex-1"
          onClick={shareDoll}
          disabled={!dollImage}
        >
          <Share2 className="mr-2 h-4 w-4" />
          Поделиться
        </Button>
      </div>
      
      <style jsx>{`
        .doll-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
}
