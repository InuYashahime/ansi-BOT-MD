# ANSÍ BOT

![Menú Principal](https://github.com/Eliasar54/ansi-BOT-MD/blob/master/media/menu2.jpg)



 
<p align="center">
  <a href="https://github.com/tu-usuario/tu-repositorio">
    <img src="http://readme-typing-svg.herokuapp.com?font=mono&size=17&duration=4000&color=FFFF00&center=false&vCenter=false&lines=ANSI+✨;Gracias+por+visitar+este+repositorio.+%F0%9F%8C%B4" height="90px">
  </a>
</p>



# ANSI-BOT MD


## Requisitos previos

- Termux instalado en tu dispositivo Android.
- Conexión a Internet estable.
- termux https://www.mediafire.com/file/3hsvi3xkpq3a64o/termux_118.apk/file

## Comandos de instalación

1. Configura el almacenamiento en Termux:
    ```bash
    termux-setup-storage
    ```

2. Actualiza e instala los paquetes necesarios:
    ```bash
    apt update && apt upgrade && pkg update && pkg upgrade && pkg install bash && pkg install libwebp && pkg install git -y && pkg install nodejs -y && pkg install ffmpeg -y && pkg install wget && pkg install imagemagick -y && pkg install yarn
    ```

3. Clona el repositorio de YuGi-BOT:
    ```bash
    git clone https://github.com/Eliasar54/ansi-BOT-MD.git && cd YuGi-BOT-1.2 cd ansi-BOT-MD && yarn && npm install
   ```
   
6. inicia el bot:
    ```bash
    npm start
    ```
## Activar en caso de detenerse en Termux

Si después de instalar el bot y Termux se detiene (pantalla en blanco, pérdida de conexión a Internet, reinicio del dispositivo), sigue estos pasos:

1. Abre Termux y navega al directorio del bot:
    ```bash
    cd ansi-BOT-MD
    ```

2. Inicia el bot nuevamente:
    ```bash
    npm start
    ```

## Obtener otro código QR en Termux

Para obtener un nuevo código QR, sigue estos pasos:

1. Detén el bot presionando `CTRL` + `Z` en tu teclado y luego presiona `Enter`.
2. Navega al directorio del bot y elimina la sesión anterior:
    ```bash
    cd ~
    cd ansi-BOT-MD
    rm -rf sessions
    ```

3. Inicia el bot nuevamente:
    ```sh
    npm start
    ```

