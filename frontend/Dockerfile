# Use uma imagem base do Node.js
FROM node:latest

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o arquivo package.json e o package-lock.json (se existir)
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o código do frontend para o diretório de trabalho do container
COPY . .

# Exponha a porta 8080 para o servidor de desenvolvimento do Vue.js
EXPOSE 8080

# Comando padrão para iniciar o servidor de desenvolvimento do Vue.js com hot reload
CMD ["npm", "run", "serve"]