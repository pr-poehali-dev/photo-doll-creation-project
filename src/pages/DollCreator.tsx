
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Upload, Sparkles, Dices } from 'lucide-react';
import { DollPreview } from '@/components/DollPreview';
import { DollCustomizer } from '@/components/DollCustomizer';

export default function DollCreator() {
  const [photo, setPhoto] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDollCreated, setIsDollCreated] = useState(false);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhoto(e.target?.result as string);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const createDoll = () => {
    if (!photo) return;
    
    setIsProcessing(true);
    
    // Имитация процесса обработки
    setTimeout(() => {
      setIsProcessing(false);
      setIsDollCreated(true);
    }, 2000);
  };

  return (
    <div className="container mx-auto max-w-6xl py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Создание виртуальной куклы</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Загрузка фотографии</h2>
          
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-12 mb-4">
            {photo ? (
              <div className="relative w-full max-w-xs">
                <img 
                  src={photo} 
                  alt="Загруженное фото" 
                  className="w-full h-auto rounded-lg" 
                />
                <Button 
                  variant="outline" 
                  className="mt-4 w-full"
                  onClick={() => setPhoto(null)}
                >
                  Изменить фото
                </Button>
              </div>
            ) : (
              <>
                <Upload className="w-12 h-12 text-gray-400 mb-4" />
                <p className="text-sm text-gray-500 mb-4 text-center">
                  Перетащите фото сюда или нажмите для выбора
                </p>
                <Input
                  id="photo-upload"
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
                <Button asChild variant="outline">
                  <label htmlFor="photo-upload">Выбрать фото</label>
                </Button>
              </>
            )}
          </div>
          
          <Button 
            className="w-full"
            disabled={!photo || isProcessing}
            onClick={createDoll}
          >
            {isProcessing ? (
              <>
                <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                Создаем куклу...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Создать куклу
              </>
            )}
          </Button>
        </Card>
        
        {photo && (
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">
              {isDollCreated ? "Ваша виртуальная кукла" : "Предпросмотр"}
            </h2>
            
            {isDollCreated ? (
              <DollPreview photo={photo} />
            ) : (
              <div className="flex items-center justify-center border rounded-lg p-6 h-64 bg-gray-50">
                {isProcessing ? (
                  <div className="flex flex-col items-center">
                    <Sparkles className="w-10 h-10 text-primary animate-bounce" />
                    <p className="mt-4 text-sm text-gray-500">Обрабатываем вашу фотографию...</p>
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">
                    Нажмите "Создать куклу", чтобы сгенерировать виртуальную куклу
                  </p>
                )}
              </div>
            )}
            
            {isDollCreated && <DollCustomizer />}
          </Card>
        )}
      </div>
    </div>
  );
}
