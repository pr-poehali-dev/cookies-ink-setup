import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: '🍪 Базовое печенье',
      price: 'от 35 000 ₽',
      description: 'Идеально для офисных задач и домашнего использования',
      features: [
        'Процессор Intel Core i3 / AMD Ryzen 3',
        'ОЗУ 8-16 ГБ',
        'SSD 256-512 ГБ',
        'Интегрированная графика',
        'Гарантия 12 месяцев на сборку',
        'Гарантия на компоненты от производителей'
      ],
      icon: 'Cookie',
      color: 'bg-muted'
    },
    {
      title: '🍪🍪 Шоколадное печенье',
      price: 'от 65 000 ₽',
      description: 'Для игр, стриминга и работы с графикой',
      features: [
        'Процессор Intel Core i5 / AMD Ryzen 5',
        'ОЗУ 16-32 ГБ',
        'SSD 512 ГБ + HDD 1 ТБ',
        'Видеокарта GTX 1660 / RX 6600',
        'Гарантия 18 месяцев на сборку',
        'Расширенная гарантия на компоненты'
      ],
      icon: 'Sparkles',
      color: 'bg-secondary/20',
      popular: true
    },
    {
      title: '🍪🍪🍪 Премиум печенье',
      price: 'от 120 000 ₽',
      description: 'Максимальная производительность для профессионалов',
      features: [
        'Процессор Intel Core i7-i9 / AMD Ryzen 7-9',
        'ОЗУ 32-64 ГБ',
        'SSD 1-2 ТБ NVMe',
        'Видеокарта RTX 4060-4070 / RX 7700-7800',
        'Гарантия 24 месяца на сборку',
        'Premium поддержка 24/7'
      ],
      icon: 'Zap',
      color: 'bg-accent/20'
    }
  ];

  const testimonials = [
    {
      name: 'Алексей Морозов',
      role: 'Геймер',
      text: 'Собрали мне игровой ПК за 3 дня. Работает как часы, все игры на ультрах! Ребята реально знают своё дело.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Мария Светлова',
      role: 'Видеомонтажёр',
      text: 'Нужна была мощная рабочая станция. Подобрали идеальную конфигурацию под мой бюджет. Рендер стал быстрее в 3 раза!',
      rating: 5,
      avatar: '👩‍🎨'
    },
    {
      name: 'Дмитрий Волков',
      role: 'Программист',
      text: 'Отличная сборка для разработки. Тихий, холодный, быстрый. Гарантия реально работает - заменили компонент без вопросов.',
      rating: 5,
      avatar: '👨‍💼'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background">
      <nav className="fixed top-0 w-full bg-card/80 backdrop-blur-md border-b border-border z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 animate-fade-in">
              <img src="https://cdn.poehali.dev/files/logoza.ru.png" alt="Cookies Ink" className="h-10 w-10 object-contain" />
              <span className="text-2xl font-bold text-primary">Cookies Ink</span>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'services', 'about', 'testimonials', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-foreground/70'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'services' && 'Услуги'}
                  {section === 'about' && 'О нас'}
                  {section === 'testimonials' && 'Отзывы'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('contacts')} className="hidden md:flex">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Cookies Ink
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
              Делаем компьютеры как выпекающие печеньки
            </p>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Собираем мощные ПК с душой и гарантией качества. Каждая сборка — уникальный рецепт производительности.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" onClick={() => scrollToSection('services')} className="text-lg px-8">
                <Icon name="Cookie" className="mr-2" size={20} />
                Выбрать конфигурацию
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('about')} className="text-lg px-8">
                <Icon name="Info" className="mr-2" size={20} />
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="mt-16 flex justify-center gap-8 flex-wrap animate-scale-in">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Собранных ПК</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">98%</div>
              <div className="text-muted-foreground">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">24 мес</div>
              <div className="text-muted-foreground">Гарантия Premium</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Выберите свой идеальный рецепт производительности. Все сборки с гарантией качества.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all hover:shadow-xl hover:scale-105 ${service.color} border-2 animate-fade-in`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {service.popular && (
                  <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                    Популярное
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name={service.icon} size={32} className="text-primary" />
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{service.price}</div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" onClick={() => scrollToSection('contacts')}>
                    Заказать сборку
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">О нас</h2>
            <p className="text-xl text-muted-foreground">
              Cookies Ink — это команда энтузиастов, которые превращают железо в искусство
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="animate-fade-in">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Icon name="Target" size={28} className="text-primary" />
                  <CardTitle>Наша миссия</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Делать мощные и надёжные компьютеры доступными каждому. Мы подбираем компоненты так же тщательно, как кондитер выбирает ингредиенты для идеального печенья.
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in" style={{ animationDelay: '150ms' }}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Icon name="Award" size={28} className="text-secondary" />
                  <CardTitle>Почему мы?</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  5 лет на рынке, сотни довольных клиентов и честная гарантия. Мы не просто собираем ПК — мы создаём инструменты для ваших побед и достижений.
                </p>
              </CardContent>
            </Card>
          </div>
          <Card className="mt-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-2 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Icon name="Shield" size={28} className="text-accent" />
                <CardTitle>Гарантия качества</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground mb-4">
                Мы настолько уверены в качестве наших сборок, что даём расширенную гарантию:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>12-24 месяца гарантии на сборку</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Официальная гарантия на все компоненты</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Бесплатное обслуживание первые 6 месяцев</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Техподдержка и консультации 24/7</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Наши клиенты делятся своим опытом работы с Cookies Ink
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: `${index * 150}ms` }}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-4xl">{testimonial.avatar}</div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-primary fill-primary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-muted-foreground mb-8">
            Готовы заказать свою идеальную сборку? Свяжитесь с нами удобным способом!
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <Icon name="Phone" size={32} className="text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+79991234567" className="text-primary hover:underline font-medium">
                  +7 (999) 123-45-67
                </a>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '150ms' }}>
              <CardHeader>
                <Icon name="Mail" size={32} className="text-secondary mx-auto mb-2" />
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:info@cookiesink.ru" className="text-primary hover:underline font-medium">
                  info@cookiesink.ru
                </a>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: '300ms' }}>
              <CardHeader>
                <Icon name="MessageCircle" size={32} className="text-accent mx-auto mb-2" />
                <CardTitle className="text-lg">Telegram</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="https://t.me/cookiesink" className="text-primary hover:underline font-medium">
                  @cookiesink
                </a>
              </CardContent>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-2 animate-scale-in">
              <CardContent className="pt-6">
                <p className="text-lg mb-4">
                  <strong>График работы:</strong>
                </p>
                <p className="text-muted-foreground mb-2">Пн-Пт: 10:00 - 20:00</p>
                <p className="text-muted-foreground mb-2">Сб-Вс: 11:00 - 18:00</p>
                <p className="text-sm text-muted-foreground mt-4 flex items-center gap-2">
                  <Icon name="MapPin" size={16} className="text-primary" />
                  Москва, ул. Компьютерная, д. 42
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden animate-scale-in" style={{ animationDelay: '150ms' }}>
              <CardContent className="p-0">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=37.617635,55.755819&z=16&l=map&pt=37.617635,55.755819,pm2rdm"
                  width="100%"
                  height="280"
                  frameBorder="0"
                  className="w-full"
                  title="Наше местоположение"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border bg-card">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src="https://cdn.poehali.dev/files/logoza.ru.png" alt="Cookies Ink" className="h-8 w-8 object-contain" />
            <span className="text-xl font-bold text-primary">Cookies Ink</span>
          </div>
          <p className="text-muted-foreground text-sm mb-2">
            Делаем компьютеры как выпекающие печеньки
          </p>
          <p className="text-muted-foreground text-xs">
            © 2024 Cookies Ink. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}