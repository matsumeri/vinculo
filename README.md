# VÍNCULO

Landing page para una marca de accesorios y joyería artesanal en cobre, inspirada en la conexión interior, el amor propio y el autocuidado.

## Desarrollo

```sh
npm install
npm run dev
```

## Validación

```sh
npm run lint
npm run build
```

## GitHub Pages

El sitio se compila y despliega automáticamente en GitHub Pages al enviar cambios a `main`.
En la configuración del repositorio, selecciona **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Colección y contacto

La colección aparece después de la portada. Cada tarjeta permite abrir sus detalles y
preparar una consulta por correo con el nombre de la pieza. Los enlaces `mailto:`
requieren una aplicación de correo; la dirección también se muestra para copiarla.
El menú móvil se cierra al navegar, pulsar Escape o tocar fuera de él.

Las fotografías de Unsplash son referenciales y corresponden a las categorías, no a
productos finales. Sustituirlas por fotografías propias y confirmar los datos de las
piezas antes de ofrecerlas a la venta. El contacto existente (`hola@vinculo.com`),
centralizado en `src/App.jsx`, debe confirmarse con la marca antes de publicar.

No se recogen correos: la sección de novedades avisa que la suscripción aún no está
disponible. Cuando exista un servicio real, integrar el envío y sus estados de éxito
y error, junto con la información de privacidad correspondiente. El enlace genérico
a Instagram se ha retirado hasta disponer de un perfil de la marca.
