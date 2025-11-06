import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const cars = [
    {
      id: 1,
      name: 'ГАЗ-21 «Волга»',
      years: '1956–1970',
      image: 'https://cdn.poehali.dev/projects/077b2a90-4cfc-4d22-b3c5-c62b1e5ff205/files/89f2bed9-7654-493f-888f-c68d0c725005.jpg',
      description: 'Легендарный советский автомобиль высшего класса, символ эпохи. Отличался высоким качеством сборки и комфортом.'
    },
    {
      id: 2,
      name: 'ВАЗ-2101 «Жигули»',
      years: '1970–1988',
      image: 'https://cdn.poehali.dev/projects/077b2a90-4cfc-4d22-b3c5-c62b1e5ff205/files/38095de9-c0e8-498e-af3d-43d37fc2c35f.jpg',
      description: 'Первый автомобиль Волжского автозавода, народная «копейка». Самый массовый советский автомобиль.'
    },
    {
      id: 3,
      name: 'Москвич-412',
      years: '1967–2001',
      image: 'https://cdn.poehali.dev/projects/077b2a90-4cfc-4d22-b3c5-c62b1e5ff205/files/89f2bed9-7654-493f-888f-c68d0c725005.jpg',
      description: 'Надёжный советский седан с передовым для своего времени двигателем. Экспортировался в десятки стран.'
    },
    {
      id: 4,
      name: 'ЗАЗ-968 «Запорожец»',
      years: '1971–1994',
      image: 'https://cdn.poehali.dev/projects/077b2a90-4cfc-4d22-b3c5-c62b1e5ff205/files/38095de9-c0e8-498e-af3d-43d37fc2c35f.jpg',
      description: 'Компактный народный автомобиль с задним расположением двигателя. Доступный и неприхотливый.'
    },
    {
      id: 5,
      name: 'УАЗ-469',
      years: '1972–н.в.',
      image: 'https://cdn.poehali.dev/projects/077b2a90-4cfc-4d22-b3c5-c62b1e5ff205/files/89f2bed9-7654-493f-888f-c68d0c725005.jpg',
      description: 'Легендарный внедорожник повышенной проходимости. Надёжный и неубиваемый труженик.'
    },
    {
      id: 6,
      name: 'ВАЗ-2106',
      years: '1976–2006',
      image: 'https://cdn.poehali.dev/projects/077b2a90-4cfc-4d22-b3c5-c62b1e5ff205/files/38095de9-c0e8-498e-af3d-43d37fc2c35f.jpg',
      description: 'Улучшенная модификация «Жигулей», известная как «шестёрка». Популярный семейный автомобиль.'
    }
  ];

  const timeline = [
    { year: '1924', event: 'Основание завода «АМО» — будущий ЗИЛ' },
    { year: '1932', event: 'Запуск Горьковского автозавода (ГАЗ)' },
    { year: '1945', event: 'Начало производства «Победы» ГАЗ-М20' },
    { year: '1956', event: 'Выпуск легендарной «Волги» ГАЗ-21' },
    { year: '1966', event: 'Основание Волжского автозавода (ВАЗ)' },
    { year: '1970', event: 'Старт производства ВАЗ-2101 «Жигули»' },
    { year: '1991', event: 'Распад СССР и трансформация автопрома' }
  ];

  const gallery = [
    { id: 1, image: 'https://cdn.poehali.dev/projects/077b2a90-4cfc-4d22-b3c5-c62b1e5ff205/files/89f2bed9-7654-493f-888f-c68d0c725005.jpg', caption: 'ГАЗ-21 на выставке' },
    { id: 2, image: 'https://cdn.poehali.dev/projects/077b2a90-4cfc-4d22-b3c5-c62b1e5ff205/files/38095de9-c0e8-498e-af3d-43d37fc2c35f.jpg', caption: 'Классическая «копейка»' },
    { id: 3, image: 'https://cdn.poehali.dev/projects/077b2a90-4cfc-4d22-b3c5-c62b1e5ff205/files/f0249530-9324-4bd4-8ed3-a4f3237ea48e.jpg', caption: 'Заводской конвейер' },
    { id: 4, image: 'https://cdn.poehali.dev/projects/077b2a90-4cfc-4d22-b3c5-c62b1e5ff205/files/89f2bed9-7654-493f-888f-c68d0c725005.jpg', caption: 'Ретро автомобиль' },
    { id: 5, image: 'https://cdn.poehali.dev/projects/077b2a90-4cfc-4d22-b3c5-c62b1e5ff205/files/38095de9-c0e8-498e-af3d-43d37fc2c35f.jpg', caption: 'Коллекционная модель' },
    { id: 6, image: 'https://cdn.poehali.dev/projects/077b2a90-4cfc-4d22-b3c5-c62b1e5ff205/files/f0249530-9324-4bd4-8ed3-a4f3237ea48e.jpg', caption: 'Производство СССР' }
  ];

  const articles = [
    {
      id: 1,
      title: 'История создания ГАЗ-21 «Волга»',
      excerpt: 'Как создавался символ советского автопрома и почему эта модель стала легендой.',
      date: '15 октября 2024'
    },
    {
      id: 2,
      title: 'ВАЗ: от итальянских корней до народного автомобиля',
      excerpt: 'История сотрудничества с FIAT и рождение легендарных «Жигулей».',
      date: '22 сентября 2024'
    },
    {
      id: 3,
      title: 'Запорожец: автомобиль для народа',
      excerpt: 'Уникальная конструкция и роль ЗАЗ-968 в истории советской автомобилизации.',
      date: '8 августа 2024'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">АВТОМОБИЛИ СССР</h1>
            <nav className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-secondary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('catalog')} className="hover:text-secondary transition-colors">Каталог</button>
              <button onClick={() => scrollToSection('history')} className="hover:text-secondary transition-colors">История</button>
              <button onClick={() => scrollToSection('gallery')} className="hover:text-secondary transition-colors">Галерея</button>
              <button onClick={() => scrollToSection('articles')} className="hover:text-secondary transition-colors">Статьи</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-secondary transition-colors">Контакты</button>
            </nav>
            <Button variant="ghost" size="icon" className="md:hidden text-primary-foreground">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="relative h-[600px] bg-primary text-primary-foreground flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70 z-10"></div>
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://cdn.poehali.dev/projects/077b2a90-4cfc-4d22-b3c5-c62b1e5ff205/files/f0249530-9324-4bd4-8ed3-a4f3237ea48e.jpg" 
            alt="Soviet cars" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 z-20 text-center animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">ЛЕГЕНДЫ СОВЕТСКОГО АВТОПРОМА</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Откройте для себя историю автомобилей, которые стали символами целой эпохи
          </p>
          <Button onClick={() => scrollToSection('catalog')} size="lg" variant="secondary" className="text-lg px-8">
            Изучить каталог
            <Icon name="ChevronRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Каталог автомобилей СССР</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Легендарные модели советского автопрома</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <Card key={car.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{car.name}</h3>
                  <div className="flex items-center gap-2 text-secondary mb-3">
                    <Icon name="Calendar" size={18} />
                    <span className="font-semibold">{car.years}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{car.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="history" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">История автопрома СССР</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Ключевые вехи развития советской автомобильной промышленности</p>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-4 border-secondary pl-8 space-y-10">
              {timeline.map((item, index) => (
                <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="absolute -left-11 w-6 h-6 rounded-full bg-secondary border-4 border-background"></div>
                  <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold text-secondary mb-2">{item.year}</h3>
                    <p className="text-lg">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Фотогалерея ретро автомобилей</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Уникальные снимки советских автомобилей</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((photo) => (
              <div key={photo.id} className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer animate-scale-in">
                <img 
                  src={photo.image} 
                  alt={photo.caption} 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-primary-foreground p-4 text-lg font-semibold">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="articles" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Статьи и материалы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Интересные публикации об истории советского автопрома</p>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {articles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer animate-fade-in">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Icon name="FileText" size={32} className="text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 hover:text-secondary transition-colors">{article.title}</h3>
                      <p className="text-muted-foreground mb-3">{article.excerpt}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Calendar" size={16} />
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Свяжитесь с нами для получения дополнительной информации</p>
          
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                    <Input placeholder="Введите ваше имя" className="text-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" className="text-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Сообщение</label>
                    <Textarea placeholder="Напишите ваше сообщение..." rows={6} className="text-lg" />
                  </div>
                  <Button type="submit" size="lg" className="w-full" variant="secondary">
                    Отправить сообщение
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon name="Mail" size={24} className="text-secondary" />
                </div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground">info@sovietcars.ru</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon name="Phone" size={24} className="text-secondary" />
                </div>
                <h3 className="font-semibold mb-1">Телефон</h3>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon name="MapPin" size={24} className="text-secondary" />
                </div>
                <h3 className="font-semibold mb-1">Адрес</h3>
                <p className="text-muted-foreground">Москва, Россия</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">&copy; 2024 Автомобили СССР. Все права защищены.</p>
          <p className="text-sm mt-2 opacity-80">Сохраняя историю советского автопрома</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
