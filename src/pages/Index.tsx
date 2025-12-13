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
      name: 'Жилкомплекс - ЖБИ',
      duration: '45 мин',
      stops: 24,
      workingHours: '06:00 - 23:00',
      interval: '12-15 мин',
      description: 'Основной маршрут, связывающий жилые районы с промышленной зоной',
      keyStops: ['Жилкомплекс', 'Площадь Труда', 'ТРЦ Сибирь', 'Автовокзал', 'Завод ЖБИ']
    },
    {
      number: '90',
      name: 'Микрорайон Солнечный - Центральный рынок',
      duration: '38 мин',
      stops: 19,
      workingHours: '06:30 - 22:30',
      interval: '15-20 мин',
      description: 'Связывает новые районы с центром города и рыночной зоной',
      keyStops: ['Солнечный', 'Университет', 'Центр', 'Филармония', 'Центральный рынок']
    }
  ];

  const tariffs = [
    { type: 'Разовый билет', price: '35 ₽', description: 'Одна поездка на любом маршруте' },
    { type: 'Проездной на 10 поездок', price: '320 ₽', description: 'Экономия 30 рублей' },
    { type: 'Месячный проездной', price: '1200 ₽', description: 'Безлимитные поездки 30 дней' },
    { type: 'Студенческий', price: '900 ₽', description: 'При предъявлении студенческого' },
    { type: 'Льготный', price: '600 ₽', description: 'Для пенсионеров и инвалидов' }
  ];

  const faqItems = [
    {
      question: 'Как купить проездной билет?',
      answer: 'Проездные билеты можно приобрести у водителя автобуса, в киосках на остановках, а также через мобильное приложение "Транспорт Иркутска".'
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
      answer: 'Дети до 7 лет путешествуют бесплатно в сопровождении взрослого. Школьники от 7 до 18 лет могут приобрести льготный проездной по предъявлении справки из школы.'
    },
    {
      question: 'Как отследить местоположение автобуса?',
      answer: 'Используйте нашу интерактивную карту на сайте или мобильное приложение для отслеживания автобусов в режиме реального времени.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Bus" className="text-primary" size={32} />
            <span className="text-xl font-bold text-foreground">БайкалАвтоТранс</span>
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => scrollToSection('routes')} className="text-lg">
                  <Icon name="MapPin" className="mr-2" size={20} />
                  Посмотреть маршруты
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('schedule')}>
                  <Icon name="Clock" className="mr-2" size={20} />
                  Расписание
                </Button>
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
                  <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-white">
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
                        <Icon name="Clock" size={20} className="text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Время в пути</p>
                          <p className="font-semibold">{route.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="MapPin" size={20} className="text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Остановок</p>
                          <p className="font-semibold">{route.stops}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="CalendarClock" size={20} className="text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Часы работы</p>
                          <p className="font-semibold">{route.workingHours}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Timer" size={20} className="text-primary" />
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
              <p className="text-muted-foreground text-lg">Отслеживайте автобусы в режиме реального времени</p>
            </div>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative w-full h-[500px] bg-gradient-to-br from-blue-50 to-blue-100">
                  <svg className="w-full h-full" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e0e0e0" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    
                    <rect width="800" height="500" fill="url(#grid)"/>
                    
                    <g id="route-74">
                      <path 
                        d="M 100 400 Q 150 350, 200 300 T 350 200 T 500 150 T 650 120" 
                        stroke="#0EA5E9" 
                        strokeWidth="4" 
                        fill="none"
                        strokeDasharray="8,4"
                      />
                      {[
                        { x: 100, y: 400, label: 'Жилкомплекс' },
                        { x: 200, y: 300, label: 'Площадь Труда' },
                        { x: 350, y: 200, label: 'ТРЦ Сибирь' },
                        { x: 500, y: 150, label: 'Автовокзал' },
                        { x: 650, y: 120, label: 'ЖБИ' }
                      ].map((stop, idx) => (
                        <g key={idx}>
                          <circle cx={stop.x} cy={stop.y} r="8" fill="#0EA5E9" stroke="white" strokeWidth="2"/>
                          <text x={stop.x} y={stop.y - 15} fontSize="12" fill="#0EA5E9" fontWeight="600" textAnchor="middle">
                            {stop.label}
                          </text>
                        </g>
                      ))}
                    </g>
                    
                    <g id="route-90">
                      <path 
                        d="M 150 450 Q 200 400, 280 350 T 450 280 T 600 250 T 720 240" 
                        stroke="#DC2626" 
                        strokeWidth="4" 
                        fill="none"
                        strokeDasharray="8,4"
                      />
                      {[
                        { x: 150, y: 450, label: 'Солнечный' },
                        { x: 280, y: 350, label: 'Университет' },
                        { x: 450, y: 280, label: 'Центр' },
                        { x: 600, y: 250, label: 'Филармония' },
                        { x: 720, y: 240, label: 'Центр. рынок' }
                      ].map((stop, idx) => (
                        <g key={idx}>
                          <circle cx={stop.x} cy={stop.y} r="8" fill="#DC2626" stroke="white" strokeWidth="2"/>
                          <text x={stop.x} y={stop.y + 25} fontSize="12" fill="#DC2626" fontWeight="600" textAnchor="middle">
                            {stop.label}
                          </text>
                        </g>
                      ))}
                    </g>
                    
                    <g id="buses">
                      <g>
                        <animateMotion 
                          dur="15s" 
                          repeatCount="indefinite"
                          path="M 100 400 Q 150 350, 200 300 T 350 200 T 500 150 T 650 120"
                        />
                        <rect x="-12" y="-8" width="24" height="16" rx="2" fill="#0EA5E9"/>
                        <text x="0" y="4" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">74</text>
                      </g>
                      <g>
                        <animateMotion 
                          dur="18s" 
                          repeatCount="indefinite"
                          path="M 150 450 Q 200 400, 280 350 T 450 280 T 600 250 T 720 240"
                        />
                        <rect x="-12" y="-8" width="24" height="16" rx="2" fill="#DC2626"/>
                        <text x="0" y="4" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">90</text>
                      </g>
                    </g>
                    
                    <g id="legend" transform="translate(20, 20)">
                      <rect x="0" y="0" width="180" height="80" fill="white" stroke="#e0e0e0" strokeWidth="1" rx="4"/>
                      <line x1="15" y1="25" x2="45" y2="25" stroke="#0EA5E9" strokeWidth="3" strokeDasharray="6,3"/>
                      <text x="55" y="30" fontSize="14" fill="#333">Маршрут №74</text>
                      <line x1="15" y1="55" x2="45" y2="55" stroke="#DC2626" strokeWidth="3" strokeDasharray="6,3"/>
                      <text x="55" y="60" fontSize="14" fill="#333">Маршрут №90</text>
                    </g>
                  </svg>
                </div>
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
                        <p className="font-semibold">+7 (3952) 500-100</p>
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
                        <p className="font-semibold">ул. Транспортная, 15</p>
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
                        <p className="font-semibold">+7 (3952) 500-101</p>
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
            <div className="flex items-center gap-2">
              <Icon name="Bus" className="text-primary" size={24} />
              <span className="font-semibold">БайкалАвтоТранс</span>
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