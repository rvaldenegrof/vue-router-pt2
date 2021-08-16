import Vue from "vue";
import VueRouter from "vue-router";
//import Inicio from '../views/Inicio.vue'
const Inicio = () => import('../views/Inicio.vue')
//import Contacto from '../views/Contacto.vue'
import NotFound from '../views/NotFound.vue'
import AdminSimple from '../views/AdminSimple'
import AdminAdvanced from '../views/AdminAdvanced'
//import SobreMi from '../views/SobreMi'
const SobreMi = () => import('../views/Contacto.vue')

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    //DIRECCIÓN EQUIVOCADA
    {
      path: "/notFound",
      component: NotFound
    },
    //DIRECCIÓN EQUIVOCADA
    {
      path: "*",
      component: NotFound,
    },
/*     {
      path: "",
      redirect: "/inicio"
    },  */
    //REDIRECCION RAÍZ
    {
      path: '',
      redirect: () => {
        return { name: 'inicio'}
      },
      alias: ['/home', '/inicio', '/portada']
    },
    {
      path: '/inicio',
      component: Inicio,
      name: 'inicio'
    },
    {
      path: '/sobremi',
      component: SobreMi,
      name: 'sobremi',
      alias: ['/acerca']
    },
    {
      path: '/contacto',
      alias: ['/contacto', '/contactame'],
      //component: Contacto
      //LAZYLOADING
      component: () => import("../views/Contacto.vue")
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: () => import("../views/Post.vue"),
      children: [
        {
          path: '/',
          //name: 'Articulo',
          component: () => import("../views/Articulo.vue")
        }
      ]
    },
    //SIMPLE ADMIN
    {
      path: '/administrador/simple',
      component: AdminSimple
    },
    //ADMIN AVANZADO
    {
      path: '/administrador/avanzado',
      component: AdminAdvanced
    }
  ],
});

export default router;
