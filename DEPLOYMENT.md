# 🚀 Руководство по деплою BitcoinMaster Landing

## 📋 Чек-лист перед деплоем

- [x] Главный файл переименован в `index.html`
- [x] Логотип добавлен в папку `images/`
- [x] Стили вынесены в `css/styles.css`
- [x] Скрипты вынесены в `js/main.js`
- [x] SEO meta-теги добавлены
- [x] Favicon настроен
- [x] Мобильная адаптация проверена
- [x] Все пути к ресурсам относительные

## 🌐 Варианты деплоя

### 1. GitHub Pages (Бесплатно)

```bash
# 1. Инициализация Git репозитория
cd landing
git init
git add .
git commit -m "Initial commit: Production landing page"

# 2. Создайте репозиторий на GitHub
# github.com -> New Repository -> bitcoinmaster-landing

# 3. Подключите удаленный репозиторий
git remote add origin https://github.com/ВАШ_ЛОГИН/bitcoinmaster-landing.git
git branch -M main
git push -u origin main

# 4. Настройте GitHub Pages
# Репозиторий -> Settings -> Pages
# Source: main branch -> / (root)
# Save

# Сайт будет доступен по адресу:
# https://ВАШ_ЛОГИН.github.io/bitcoinmaster-landing/
```

### 2. Netlify (Бесплатно, рекомендуется)

**Вариант A: Через Git**

1. Создайте Git репозиторий (см. выше)
2. Зайдите на [netlify.com](https://netlify.com)
3. «New site from Git» → выберите GitHub
4. Выберите репозиторий `bitcoinmaster-landing`
5. Build settings оставьте пустыми (это статический сайт)
6. Deploy site

**Вариант B: Drag & Drop**

1. Зайдите на [netlify.com](https://netlify.com)
2. Перетащите папку `landing` в область Drag & Drop
3. Готово!

**Преимущества Netlify:**

- ✅ Бесплатный SSL (HTTPS)
- ✅ CDN
- ✅ Автодеплой при push в Git
- ✅ Кастомные домены

### 3. Vercel (Бесплатно)

```bash
# 1. Установите Vercel CLI
npm install -g vercel

# 2. Деплой
cd landing
vercel

# Следуйте инструкциям в терминале
```

### 4. Традиционный хостинг (Shared hosting)

**Через FTP:**

1. Подключитесь к FTP (FileZilla, Cyberduck, Total Commander)
2. Загрузите ВСЕ файлы в корневую директорию (обычно `public_html` или `www`)
3. Убедитесь, что структура папок сохранена:
   ```
   public_html/
   ├── index.html
   ├── css/
   │   └── styles.css
   ├── js/
   │   └── main.js
   └── images/
       └── logo.png
   ```
4. Откройте ваш домен в браузере

**Популярные хостинги:**

- Timeweb (RU)
- Beget (RU)
- HostGator
- Bluehost

## 🔧 Настройка после деплоя

### Кастомный домен

**GitHub Pages:**

```bash
# Создайте файл CNAME в корне
echo "bitcoinmaster.ru" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

Затем в DNS вашего домена добавьте:

```
Type: CNAME
Name: www
Value: ВАШ_ЛОГИН.github.io
```

**Netlify / Vercel:**

- Dashboard → Domain settings → Add custom domain
- Следуйте инструкциям для настройки DNS

### SSL/HTTPS

- **GitHub Pages**: Автоматически после настройки домена
- **Netlify/Vercel**: Автоматически
- **Shared hosting**: Через панель управления (cPanel → SSL/TLS)

## 📊 Аналитика и метрики

### Google Analytics

1. Создайте аккаунт на [analytics.google.com](https://analytics.google.com)
2. Получите код отслеживания (G-XXXXXXXXXX)
3. Добавьте в `<head>` секцию `index.html`:

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX");
</script>
```

### Яндекс.Метрика

1. Создайте счетчик на [metrika.yandex.ru](https://metrika.yandex.ru)
2. Скопируйте код счетчика
3. Вставьте перед закрывающим `</body>` в `index.html`

## 🎯 Оптимизация для SEO

### robots.txt

Создайте файл `robots.txt` в корне:

```txt
User-agent: *
Allow: /
Sitemap: https://ваш-домен.com/sitemap.xml
```

### sitemap.xml

Создайте файл `sitemap.xml` в корне:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ваш-домен.com/</loc>
    <lastmod>2024-12-29</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Регистрация в поисковых системах

**Google Search Console:**

1. [search.google.com/search-console](https://search.google.com/search-console)
2. Добавьте ваш сайт
3. Подтвердите владение (через HTML-файл или meta-тег)
4. Отправьте sitemap.xml

**Яндекс.Вебмастер:**

1. [webmaster.yandex.ru](https://webmaster.yandex.ru)
2. Добавьте сайт
3. Подтвердите владение
4. Добавьте sitemap.xml

## 🔒 Безопасность

### Заголовки безопасности

Если у вас есть доступ к `.htaccess` (Apache) или nginx config:

**Apache (.htaccess):**

```apache
# Защита от XSS
Header set X-XSS-Protection "1; mode=block"

# Защита от clickjacking
Header set X-Frame-Options "SAMEORIGIN"

# HTTPS Strict Transport Security
Header set Strict-Transport-Security "max-age=31536000; includeSubDomains"

# Content Type Options
Header set X-Content-Type-Options "nosniff"
```

**Netlify (\_headers file):**

```
/*
  X-Frame-Options: SAMEORIGIN
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Strict-Transport-Security: max-age=31536000; includeSubDomains
```

## ⚡ Производительность

### Сжатие изображений

Оптимизируйте `logo.png`:

- [TinyPNG](https://tinypng.com/)
- [Squoosh](https://squoosh.app/)

### CDN для библиотек

Tailwind CSS уже подключен через CDN. Для продакшена рассмотрите локальную сборку.

### Кеширование

**Apache (.htaccess):**

```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

## 📱 Тестирование

После деплоя протестируйте:

- ✅ [Google PageSpeed Insights](https://pagespeed.web.dev/)
- ✅ [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- ✅ [SSL Labs](https://www.ssllabs.com/ssltest/)
- ✅ Разные браузеры (Chrome, Firefox, Safari, Edge)
- ✅ Разные устройства (Desktop, Tablet, Mobile)

## 🐛 Решение проблем

### Проблема: Логотип не отображается

**Решение:**

1. Проверьте путь: `./images/logo.png` (относительный)
2. Убедитесь, что папка `images/` загружена на сервер
3. Проверьте регистр (некоторые серверы чувствительны): `images` не равно `Images`

### Проблема: Стили не применяются

**Решение:**

1. Проверьте путь к `./css/styles.css`
2. Очистите кеш браузера (Ctrl+Shift+R)
3. Проверьте консоль браузера на ошибки 404

### Проблема: Мобильное меню не работает

**Решение:**

1. Проверьте, что `./js/main.js` загружен
2. Откройте консоль браузера (F12) на наличие ошибок JS
3. Убедитесь, что скрипт подключен ПОСЛЕ элементов DOM

## 📞 Поддержка

По вопросам деплоя обращайтесь к:

- Документации хостинга
- [Stack Overflow](https://stackoverflow.com/)
- [GitHub Issues](https://github.com/)

---

**Дата обновления**: 29 декабря 2024  
**Версия**: 1.0.0
