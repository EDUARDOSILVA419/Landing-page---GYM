/* Motor de la página. Para cambiar información, edita gym-data.js. */
(() => {
  "use strict";
  const data = window.GYM_DATA;
  if (!data) return;
  const el = (tag, text, className) => {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (className) node.className = className;
    return node;
  };
  const put = (id, text) => { document.getElementById(id).textContent = text; };
  document.querySelectorAll('[data-name]').forEach(node => { node.textContent = data.nombre; });
  document.title = `${data.nombre} | Tu energía. Tu siguiente nivel.`;
  put('intro', data.introduccion);
  data.beneficios.forEach((item, index) => {
    const article = el('article');
    article.append(el('span', `0${index + 1}`, 'number'), el('h3', item.titulo), el('p', item.texto));
    document.getElementById('benefits').append(article);
  });
  data.planes.forEach(item => {
    const article = el('article', undefined, `plan${item.destacado ? ' featured' : ''}`);
    article.append(el('p', item.etiqueta, 'eyebrow'), el('h3', item.nombre), el('p', item.descripcion, 'plan-description'), el('p', item.precio || 'Consulta el precio', 'price'));
    const list = el('ul');
    item.incluye.forEach(text => list.append(el('li', text)));
    const link = el('a', 'Consultar información ↗', 'button');
    link.href = '#contacto';
    link.setAttribute('aria-label', `Consultar información del plan ${item.nombre}`);
    article.append(list, link);
    document.getElementById('plans').append(article);
  });
  put('plans-note', data.notaPlanes);
  data.preguntas.forEach(item => {
    const details = el('details');
    details.append(el('summary', item.pregunta), el('p', item.respuesta));
    document.getElementById('faqs').append(details);
  });
  put('address', data.direccion || 'Ubicación por confirmar.');
  if (data.horarios.length) {
    data.horarios.forEach(item => {
      const row = el('div');
      row.append(el('dt', item.dias), el('dd', item.horas));
      document.getElementById('hours').append(row);
    });
  } else { document.getElementById('hours').append(el('dd', 'Horarios por confirmar.')); }
  put('first-visit', data.primeraVisita);
  const addContact = (label, url, primary = false) => {
    const link = el('a', label, primary ? 'button' : 'text-link');
    link.href = url;
    if (url.startsWith('https:')) { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
    document.getElementById('contact-links').append(link);
  };
  if (/^\d{10,15}$/.test(data.whatsapp)) addContact('Consultar por WhatsApp ↗', `https://wa.me/${data.whatsapp}?text=${encodeURIComponent(data.mensajeWhatsapp)}`, true);
  if (/^\+?\d{10,15}$/.test(data.telefono)) addContact('Llamar al gimnasio', `tel:${data.telefono}`);
  const safeLink = value => { try { return new URL(value).protocol === 'https:'; } catch { return false; } };
  if (safeLink(data.instagram)) addContact('Instagram ↗', data.instagram);
  if (safeLink(data.mapa)) addContact('Cómo llegar ↗', data.mapa);
  put('contact-note', document.getElementById('contact-links').children.length ? 'La atención se realiza directamente con el gimnasio.' : 'Los canales de contacto estarán disponibles próximamente.');
  put('footer-note', data.demostracion ? 'Sitio de demostración · Servicios sujetos a confirmación. Fotografía ilustrativa, no corresponde a las instalaciones.' : `© ${new Date().getFullYear()} ${data.nombre}. Fotografía ilustrativa.`);
})();
