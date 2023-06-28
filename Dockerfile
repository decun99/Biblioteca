# Establece la imagen base
FROM node:14-alpine

# Establece el directorio de trabajo en la imagen del contenedor
WORKDIR /app

# Copia los archivos de tu aplicación en el contenedor
COPY package*.json ./


# Instala las dependencias de producción
RUN npm install --production

# Copia el resto de los archivos de la aplicación en el contenedor
COPY . .

# Compila la aplicación de React
RUN npm run build

# Expone el puerto 3000 para acceder a la aplicación en el contenedor
EXPOSE 3000

# Define el comando para ejecutar la aplicación en el contenedor
CMD [ "npm", "start" ]
