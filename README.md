## Wall app
### Introducción
Conectarse a la api cryptocompare cada hora, guardar datos (BTC, ETH, DASH) y visualizar mediante gráficos los datos guardados en nuestra BD 
### Descripción e instalación
Proyecto realizado con Node, React, Redux y MongoDB
Los requisitos son únicamente tener instalado una versión de `node >= 4`,`npm`, `mongoDB`.

En primer lugar instalar las dependencias de nuestro Backend, para ello en la raíz de nuestro proyecto ejecutar
```
npm install
```
posteriormente instalar las dependencias del frontend, para ello debemos ir a la carpeta Clien, para ello ejecutar
```
cd Client
npm install
```
Posterior a las instalaciones de las dependencias de ambos ambientes, volvemos a la raíz e iniciamos la aplicación
```
cd..
npm run dev
```

Si todo funcionó correctamente, va a correr el servidor, y vas a poder acceder a través de cualquier navegador en la dirección: [localhost:3000](http://localhost:3000). 
