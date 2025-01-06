#!/bin/bash

# Параметры
REPO_URL="https://github.com/ratkus91/mfisher.git"
APP_DIR="/var/www/html/mfisher"

# Шаги
echo "Обновляем репозиторий..."
if [ ! -d "$APP_DIR" ]; then
    git clone $REPO_URL $APP_DIR
else
    cd $APP_DIR
    git reset --hard
    git pull origin main
fi

echo "Устанавливаем зависимости..."
cd $APP_DIR
npm install

echo "Собираем проект..."
npm run build

cd dist

echo 'mfisher.agency' > CNAME

echo "Запускаем сервер..."
pm2 start dist --name "mfisher" --no-daemon
