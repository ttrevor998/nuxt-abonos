// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules:['@nuxt/image', '@nuxt/content'],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'
        },
        {
          rel:'preconnect',
          href:'https://fonts.googleapis.com'
        },
        {
          rel:'preconnect',
          href:'https://fonts.gstatic.com',
          crossorigin:""
        },
        {
          href:'https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
          rel:'stylesheet'
        }
        
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',
          tagPosition: 'bodyClose'
        }
      ]
    }
  },/*
  css: ['@/assets/main.css'],*/
  content: {
    api: {
      baseURL: '/api/_content'
    }
  }
})