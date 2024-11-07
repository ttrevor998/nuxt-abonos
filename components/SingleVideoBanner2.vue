<template>
    <div class="container-fluid" style="height:600px !important; ">
      <header class="hero text-white text-center d-flex align-items-center justify-content-center">
        <video class="position-absolute w-100 " style="object-fit: cover; height: 800px !important; top: 50px;" autoplay muted loop>
          <source src="/public/videos/2.mp4" type="video/mp4">
        </video>
        <div class="hero-content position-relative p-3" id="banner-title">
          <!-- Título Principal Rediseñado -->
          <h1 class="display-4 fw-bold">Transforma tu Hogar con Naturaleza</h1>
          <p class="lead">Soluciones orgánicas de compost y humus que revitalizan tus plantas y cuidan el ambiente.</p>
          
          <!-- Lista de Beneficios -->
          <ul class="list-unstyled mt-3">
            <li class="mb-3" style="font-size: 1.25rem; font-weight: 600;">
              <i class="fas fa-leaf me-3" style="font-size: 1.5rem;"></i> Fomenta el crecimiento saludable de tus plantas
            </li>
            <li class="mb-3" style="font-size: 1.25rem; font-weight: 600;">
              <i class="fas fa-seedling me-3" style="font-size: 1.5rem;"></i> Mejoras visibles en la textura y nutrición del suelo
            </li>
            <li class="mb-3" style="font-size: 1.25rem; font-weight: 600;">
              <i class="fas fa-water me-3" style="font-size: 1.5rem;"></i> Retención de agua para un jardín más verde y resistente
            </li>
            <li class="mb-3" style="font-size: 1.25rem; font-weight: 600;">
              <i class="fas fa-recycle me-3" style="font-size: 1.5rem;"></i> Productos sostenibles, amigables con el medio ambiente
            </li>
          </ul>
          
          <!-- Botón de Llamada a la Acción -->
          <div class="cta-buttons mt-4">
            <a href="/tienda" class="btn btn-lg btn-success">Compra Ahora</a>
          </div>
        </div>
      </header>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  #banner-title {
    top: 0px;
    background:rgba(140, 202, 47, 0.514) !important; ;
  }
  
  h1, p, a, li {
    color: azure !important;
  }
  
  @media only screen and (max-width: 600px) {
    #banner-title {
      top: -10vw;
    }
  }
  </style>