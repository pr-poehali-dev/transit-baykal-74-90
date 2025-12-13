import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const routes = [
    {
      number: '74',
      name: 'Первомайский - Первомайский (кольцевой)',
      duration: '60 мин',
      stops: 28,
      workingHours: '06:00 - 23:00',
      interval: '12-15 мин',
      description: 'Кольцевой маршрут, соединяющий Первомайский микрорайон с центром города через основные транспортные узлы',
      keyStops: ['Первомайский м-н', 'Институт МВД', 'Свердловский рынок', 'Сквер Кирова', 'Филармония', 'Байкальская', 'Плотина ГЭС', 'Лермонтова', 'Университетский м-н']
    },
    {
      number: '90',
      name: 'Аэропорт - Аэропорт (кольцевой)',
      duration: '55 мин',
      stops: 24,
      workingHours: '06:00 - 23:00',
      interval: '15-20 мин',
      description: 'Кольцевой маршрут из аэропорта через центр города по Лермонтова и Байкальской',
      keyStops: ['Аэропорт', 'Рынок', 'Лермонтова', 'Байкальская', 'Аэропорт']
    }
  ];

  const tariffs = [
    { type: 'Наличные до 20:00', price: '40 ₽', description: 'Оплата наличными в дневное время' },
    { type: 'Наличные после 20:00', price: '45 ₽', description: 'Оплата наличными в вечернее время' },
    { type: 'Карта БайкалАвтоТранс', price: '30 ₽', description: 'Поездка по карте в любое время' }
  ];

  const faqItems = [
    {
      question: 'Как получить карту БайкалАвтоТранс?',
      answer: 'Транспортную карту можно приобрести у водителя автобуса или в киосках на остановках. Пополнить баланс карты можно наличными у водителя.'
    },
    {
      question: 'Какая стоимость проезда?',
      answer: 'Наличными: 40₽ до 20:00 и 45₽ после 20:00. По карте БайкалАвтоТранс — 30₽ в любое время. Экономьте 10-15₽ на каждой поездке с картой!'
    },
    {
      question: 'Работают ли автобусы в выходные дни?',
      answer: 'Да, маршруты №74 и №90 работают ежедневно, включая выходные и праздничные дни. В выходные интервал движения может быть увеличен на 5-7 минут.'
    },
    {
      question: 'Можно ли перевозить багаж?',
      answer: 'Разрешается бесплатная перевозка ручной клади размером до 60x40x20 см. Крупногабаритный багаж перевозится по отдельному тарифу.'
    },
    {
      question: 'Есть ли льготы для детей?',
      answer: 'Дети до 7 лет путешествуют бесплатно в сопровождении взрослого. Для детей старше 7 лет действует общий тариф.'
    },
    {
      question: 'Как отследить местоположение автобуса?',
      answer: 'Используйте интерактивную карту на irkbus.ru или наш сайт для отслеживания автобусов в режиме реального времени.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://cdn.poehali.dev/files/1000114044.jpg" alt="БайкалАвтоТранс" className="h-12" />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {[
              { id: 'home', label: 'Главная' },
              { id: 'routes', label: 'Маршруты' },
              { id: 'schedule', label: 'Расписание' },
              { id: 'tariffs', label: 'Тарифы' },
              { id: 'about', label: 'О компании' },
              { id: 'faq', label: 'FAQ' },
              { id: 'contacts', label: 'Контакты' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Городские перевозки <span className="text-primary">Иркутска</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Надежный общественный транспорт на маршрутах №74 и №90. 
                Комфортно, безопасно, вовремя.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" onClick={() => scrollToSection('routes')} className="text-lg">
                  <Icon name="MapPin" className="mr-2" size={20} />
                  Посмотреть маршруты
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('schedule')}>
                  <Icon name="Clock" className="mr-2" size={20} />
                  Расписание
                </Button>
              </div>
              <div className="mt-8 max-w-2xl mx-auto">
                <img 
                  src="https://cdn.poehali.dev/files/1000120798.jpg" 
                  alt="Транспортная карта БайкалАвтоТранс" 
                  className="w-full rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="routes" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши маршруты</h2>
              <p className="text-muted-foreground text-lg">Два основных маршрута, охватывающих весь город</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {routes.map((route) => (
                <Card key={route.number} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className={`bg-gradient-to-r text-white ${route.number === '90' ? 'from-destructive to-destructive/80' : 'from-primary to-primary/80'}`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-3xl font-bold mb-2">№{route.number}</CardTitle>
                        <CardDescription className="text-white/90 text-base">{route.name}</CardDescription>
                      </div>
                      <Icon name="Bus" size={48} className="opacity-80" />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-6">{route.description}</p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" size={20} className={route.number === '90' ? 'text-destructive' : 'text-primary'} />
                        <div>
                          <p className="text-xs text-muted-foreground">Время в пути</p>
                          <p className="font-semibold">{route.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="MapPin" size={20} className={route.number === '90' ? 'text-destructive' : 'text-primary'} />
                        <div>
                          <p className="text-xs text-muted-foreground">Остановок</p>
                          <p className="font-semibold">{route.stops}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="CalendarClock" size={20} className={route.number === '90' ? 'text-destructive' : 'text-primary'} />
                        <div>
                          <p className="text-xs text-muted-foreground">Часы работы</p>
                          <p className="font-semibold">{route.workingHours}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Timer" size={20} className={route.number === '90' ? 'text-destructive' : 'text-primary'} />
                        <div>
                          <p className="text-xs text-muted-foreground">Интервал</p>
                          <p className="font-semibold">{route.interval}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">Ключевые остановки:</p>
                      <div className="flex flex-wrap gap-2">
                        {route.keyStops.map((stop, index) => (
                          <span key={index} className="text-xs bg-muted px-3 py-1 rounded-full">
                            {stop}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="schedule" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Интерактивная карта маршрутов</h2>
              <p className="text-muted-foreground text-lg">Отслеживайте автобусы в режиме реального времени на irkbus.ru</p>
            </div>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <iframe 
                  src="http://www.irkbus.ru/index.php?nomobile=1" 
                  className="w-full h-[600px] border-0"
                  title="Интерактивная карта IrkBus"
                  loading="lazy"
                />
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="tariffs" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Тарифы</h2>
              <p className="text-muted-foreground text-lg">Выгодные цены на проезд</p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {tariffs.map((tariff, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{tariff.type}</CardTitle>
                    <div className="text-3xl font-bold text-primary mt-2">{tariff.price}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{tariff.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">О компании</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-lg mb-4">
                    <strong>БайкалАвтоТранс</strong> — ведущий оператор городских пассажирских перевозок в Иркутске. 
                    С 2010 года мы обеспечиваем комфортное и безопасное передвижение жителей города.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Наш автопарк состоит из современных автобусов большой вместимости, оснащённых системами 
                    кондиционирования, низким полом для удобства маломобильных граждан и бесконтактной системой оплаты.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">2</div>
                      <p className="text-sm text-muted-foreground">Маршрута</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">32</div>
                      <p className="text-sm text-muted-foreground">Автобуса</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">50К+</div>
                      <p className="text-sm text-muted-foreground">Пассажиров в день</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="faq" className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Часто задаваемые вопросы</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Контакты</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Диспетчерская служба</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Phone" className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-semibold">666-206</p>
                        <p className="text-sm text-muted-foreground">Круглосуточно</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Mail" className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-semibold">info@baikal-trans.ru</p>
                        <p className="text-sm text-muted-foreground">Обратная связь</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-semibold">ул. Култукская, 107/1</p>
                        <p className="text-sm text-muted-foreground">г. Иркутск, 664000</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Отдел по работе с клиентами</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-semibold">Пн-Пт: 9:00 - 18:00</p>
                        <p className="text-sm text-muted-foreground">Сб-Вс: выходной</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="MessageSquare" className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-semibold">666-206</p>
                        <p className="text-sm text-muted-foreground">Жалобы и предложения</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Globe" className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-semibold">www.baikal-trans.ru</p>
                        <p className="text-sm text-muted-foreground">Официальный сайт</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 bg-muted/50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img src="https://cdn.poehali.dev/files/1000114044.jpg" alt="БайкалАвтоТранс" className="h-8" />
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 БайкалАвтоТранс. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Mail" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;