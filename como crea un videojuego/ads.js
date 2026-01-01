// ads.js - Gestión modular y limpia de anuncios Google AdSense

// ID del publisher (ya está fijo en el script principal cargado en HTML)
// No es necesario volver a definirlo aquí

function insertarAnuncio(contenedorId, slotId) {
    const contenedor = document.getElementById(contenedorId);
    if (!contenedor) {
        console.warn(`Contenedor "${contenedorId}" no encontrado.`);
        return;
    }

    // Inserta el bloque de anuncio con formato responsive y centrado
    contenedor.innerHTML = `
        <div style="text-align:center; margin:40px 0; padding:10px;">
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="ca-pub-9290443289256816"
                 data-ad-slot="${slotId}"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
        </div>
    `;

    // Muestra el anuncio
    try {
        (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
        console.error('Error al cargar el anuncio:', e);
    }
}