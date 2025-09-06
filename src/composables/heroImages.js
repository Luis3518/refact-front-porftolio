// heroImages.js - Script para generar y manejar las imágenes del hero con D3.js

// Importar D3 desde node_modules
import * as d3 from 'd3';

// Datos de los nodos simplificados
const nodeData = [
  { id: 'node1' },
  { id: 'node2' },
  { id: 'node3' },
  { id: 'node4' },
  { id: 'node5' },
  { id: 'node6' },
  { id: 'node7' },
  { id: 'node8' }
];

// Conexiones entre nodos
const linkData = [
  { source: 'node1', target: 'node2' },
  { source: 'node1', target: 'node3' },
  { source: 'node2', target: 'node4' },
  { source: 'node3', target: 'node5' },
  { source: 'node4', target: 'node6' },
  { source: 'node5', target: 'node7' },
  { source: 'node6', target: 'node8' }
];

// Función para crear el gráfico interactivo con D3.js
function createInteractiveGraph() {
  const container = document.getElementById('hero-images-container');
  if (!container) return null;

  // Limpiar contenedor
  container.innerHTML = '';

  // Dimensiones del contenedor
  const containerRect = container.getBoundingClientRect();
  const width = containerRect.width || 400;
  const height = containerRect.height || 400;

  // Color único para todos los nodos (se puede cambiar fácilmente)
  const nodeColor = '#667eea';

  // Crear SVG con fondo transparente
  const svg = d3.select(container)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('background', 'transparent')
    .style('border-radius', '12px');

  // Crear simulación de fuerzas
  const simulation = d3.forceSimulation(nodeData)
    .force('link', d3.forceLink(linkData).id(d => d.id).distance(80))
    .force('charge', d3.forceManyBody().strength(-300))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collision', d3.forceCollide().radius(25))
    .force('x', d3.forceX(width / 2).strength(0.1))
    .force('y', d3.forceY(height / 2).strength(0.1));

  // Crear enlaces
  const links = svg.append('g')
    .selectAll('line')
    .data(linkData)
    .enter()
    .append('line')
    .attr('stroke', 'rgba(102, 126, 234, 0.3)')
    .attr('stroke-width', 2);

  // Crear contenedor para cada nodo
  const nodeGroups = svg.append('g')
    .selectAll('g')
    .data(nodeData)
    .enter()
    .append('g')
    .attr('class', 'node-group')
    .style('cursor', 'pointer')
    .call(d3.drag()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended));

  // Agregar círculos a los nodos (sin etiquetas)
  nodeGroups.append('circle')
    .attr('r', 20)
    .attr('fill', nodeColor)
    .attr('stroke', 'white')
    .attr('stroke-width', 2)
    .style('filter', 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))');

  // Agregar efectos de hover
  nodeGroups
    .on('mouseenter', function(event, d) {
      d3.select(this).select('circle')
        .transition()
        .duration(200)
        .attr('r', 25)
        .attr('stroke-width', 3);
    })
    .on('mouseleave', function(event, d) {
      d3.select(this).select('circle')
        .transition()
        .duration(200)
        .attr('r', 20)
        .attr('stroke-width', 2);
    });

  // Actualizar posiciones en cada tick de la simulación
  simulation.on('tick', () => {
    // Mantener nodos dentro de los límites del contenedor
    nodeData.forEach(d => {
      const nodeRadius = 25; // Radio máximo del nodo (considerando hover)
      d.x = Math.max(nodeRadius, Math.min(width - nodeRadius, d.x));
      d.y = Math.max(nodeRadius, Math.min(height - nodeRadius, d.y));
    });

    links
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);

    nodeGroups
      .attr('transform', d => `translate(${d.x},${d.y})`);
  });

  // Funciones de drag con límites
  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(event, d) {
    const nodeRadius = 25; // Radio máximo del nodo
    // Limitar la posición del nodo dentro del contenedor
    d.fx = Math.max(nodeRadius, Math.min(width - nodeRadius, event.x));
    d.fy = Math.max(nodeRadius, Math.min(height - nodeRadius, event.y));
  }

  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }

  return { svg, simulation };
}

// Función de fallback simplificada
function createFallbackSVG() {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '100%');
  svg.setAttribute('viewBox', '0 0 400 400');
  svg.style.background = 'transparent';
  svg.style.borderRadius = '12px';

  // Color único para todos los círculos
  const nodeColor = '#667eea';

  // Crear círculos estáticos simples
  const circles = [
    { cx: 150, cy: 120, r: 20 },
    { cx: 250, cy: 120, r: 20 },
    { cx: 320, cy: 200, r: 20 },
    { cx: 250, cy: 280, r: 20 },
    { cx: 150, cy: 280, r: 20 },
    { cx: 80, cy: 200, r: 20 },
    { cx: 200, cy: 160, r: 20 },
    { cx: 200, cy: 240, r: 20 }
  ];

  circles.forEach((circleData, index) => {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', circleData.cx);
    circle.setAttribute('cy', circleData.cy);
    circle.setAttribute('r', circleData.r);
    circle.setAttribute('fill', nodeColor);
    circle.setAttribute('stroke', 'white');
    circle.setAttribute('stroke-width', '2');
    circle.style.animation = 'float 3s ease-in-out infinite';
    circle.style.animationDelay = `${index * 0.3}s`;
    circle.style.filter = 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))';
    svg.appendChild(circle);
  });

  return svg;
}
function createAnimationStyles() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    .hero-image-animated {
      animation: fadeIn 1s ease-out;
    }
  `;
  
  if (!document.querySelector('style[data-hero-animations]')) {
    style.setAttribute('data-hero-animations', 'true');
    document.head.appendChild(style);
  }
}

// Función principal para inicializar las imágenes
function initHeroImages() {
  const container = document.getElementById('hero-images-container');
  
  if (!container) {
    console.warn('Container para imágenes del hero no encontrado');
    return;
  }

  // Limpiar container
  container.innerHTML = '';
  
  // Crear estilos de animación
  createAnimationStyles();
  
  try {
    // Crear gráfico interactivo con D3
    const graph = createInteractiveGraph();
    if (!graph) {
      // Si falla, usar fallback
      const svg = createFallbackSVG();
      svg.classList.add('hero-image-animated');
      container.appendChild(svg);
    }
  } catch (error) {
    console.error('Error inicializando gráfico:', error);
    // Usar fallback en caso de error
    const svg = createFallbackSVG();
    svg.classList.add('hero-image-animated');
    container.appendChild(svg);
  }
  
  console.log('Imágenes del hero inicializadas');
}

// Función para actualizar las imágenes (para futuras modificaciones)
function updateHeroImages(newImageData) {
  // Esta función se puede expandir en el futuro para manejar diferentes tipos de imágenes
  console.log('Actualizando imágenes del hero:', newImageData);
  initHeroImages();
}

// Exponer funciones globalmente para que puedan ser llamadas desde Vue
window.initHeroImages = initHeroImages;
window.updateHeroImages = updateHeroImages;

// Auto-inicializar si el DOM ya está listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initHeroImages, 100); // Pequeño delay para asegurar que el DOM esté completamente listo
  });
} else {
  setTimeout(initHeroImages, 100);
}

export { initHeroImages, updateHeroImages };
