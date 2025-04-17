
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Dices, Palette, Shirt, Crown } from 'lucide-react';

export function DollCustomizer() {
  const [activeTab, setActiveTab] = useState('style');
  
  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium mb-4">Настройка куклы</h3>
      
      <Tabs defaultValue="style" onValueChange={setActiveTab} value={activeTab}>
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="style">
            <Palette className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Стиль</span>
          </TabsTrigger>
          <TabsTrigger value="clothing">
            <Shirt className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Одежда</span>
          </TabsTrigger>
          <TabsTrigger value="accessories">
            <Crown className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Аксессуары</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="style" className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="art-style">Художественный стиль</Label>
              <span className="text-xs text-muted-foreground">Аниме</span>
            </div>
            <Slider
              id="art-style"
              defaultValue={[50]}
              max={100}
              step={1}
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="realism">Реалистичность</Label>
              <span className="text-xs text-muted-foreground">Средняя</span>
            </div>
            <Slider
              id="realism"
              defaultValue={[60]}
              max={100}
              step={1}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Switch id="cartoon" />
            <Label htmlFor="cartoon">Мультяшный стиль</Label>
          </div>
        </TabsContent>
        
        <TabsContent value="clothing" className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-20 flex flex-col">
              <Shirt className="h-8 w-8 mb-2" />
              Повседневная
            </Button>
            <Button variant="outline" className="h-20 flex flex-col">
              <span className="text-2xl mb-2">👗</span>
              Нарядная
            </Button>
            <Button variant="outline" className="h-20 flex flex-col">
              <span className="text-2xl mb-2">🧙‍♀️</span>
              Фэнтези
            </Button>
            <Button variant="outline" className="h-20 flex flex-col">
              <span className="text-2xl mb-2">👩‍🚀</span>
              Космос
            </Button>
          </div>
          
          <div className="flex justify-center mt-4">
            <Button variant="outline" size="sm">
              <Dices className="h-4 w-4 mr-2" />
              Случайная одежда
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="accessories" className="space-y-4">
          <div className="grid grid-cols-3 gap-2">
            <Button variant="outline" className="h-16 flex flex-col p-1">
              <span className="text-xl mb-1">👑</span>
              <span className="text-xs">Корона</span>
            </Button>
            <Button variant="outline" className="h-16 flex flex-col p-1">
              <span className="text-xl mb-1">👓</span>
              <span className="text-xs">Очки</span>
            </Button>
            <Button variant="outline" className="h-16 flex flex-col p-1">
              <span className="text-xl mb-1">🎒</span>
              <span className="text-xs">Рюкзак</span>
            </Button>
            <Button variant="outline" className="h-16 flex flex-col p-1">
              <span className="text-xl mb-1">🧣</span>
              <span className="text-xs">Шарф</span>
            </Button>
            <Button variant="outline" className="h-16 flex flex-col p-1">
              <span className="text-xl mb-1">🎩</span>
              <span className="text-xs">Шляпа</span>
            </Button>
            <Button variant="outline" className="h-16 flex flex-col p-1">
              <span className="text-xl mb-1">🧸</span>
              <span className="text-xs">Игрушка</span>
            </Button>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="flex justify-center mt-6">
        <Button className="w-full">
          <Sparkles className="mr-2 h-4 w-4" />
          Применить изменения
        </Button>
      </div>
    </div>
  );
}

// Иконка для кнопки применения
function Sparkles({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M12 3v5m4-2-1 3m-6-3 1 3M8 13l-4 2 7 3v-5m9 2-4-2-1 4 5 1z"/>
    </svg>
  );
}
