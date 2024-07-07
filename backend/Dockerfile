# Use a imagem oficial do PHP como base
FROM php:8.2-fpm

# Instalar dependências do sistema
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

# Instalar extensões do PHP necessárias pelo Laravel
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Configurar o diretório de trabalho
WORKDIR /var/www/html

# Copiar o conteúdo da aplicação para dentro do contêiner
COPY . .

# Instalar dependências do PHP
RUN composer install

# Definir permissões corretas
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html/storage

# Expor a porta que o PHP-FPM escuta
EXPOSE 9000

# Comando para iniciar o PHP-FPM
CMD ["php-fpm"]