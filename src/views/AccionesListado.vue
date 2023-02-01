<script setup>
import { ref } from "vue";
import { useListadoStore } from "@/stores/Listado.js";
import { useCursosStore } from "@/stores/Cursos.js";
const listado = useListadoStore();
const cursos = useCursosStore();
const elemento = ref(0);
const eliminar = ref(0);
const nombre = ref("");

const id = ref("");

const fechaini = ref("");

const fechafin = ref("");

const matri = ref("");
</script>

<template>
  <h1>Acciones sobre el Listado</h1>
  <p>El último elemento es: {{ listado.ultimo }}</p>
  <label>Elemento a eliminar</label>
  <input
    type="text"
    v-model="eliminar"
    @keyup.enter="listado.eliminaElemento(eliminar)"
  />
  <label>Elemento a añadir</label>
  <input
    type="text"
    v-model="elemento"
    @keyup.enter="listado.anadeElemento(elemento)"
  />

  <h2>AÑADE CURSOS</h2>

  ID
  <input type="text" v-model="id" />
  <br />
  NOMBRE
  <input type="text" v-model="nombre" />
  <br />
  FECHA INICIO
  <input type="text" v-model="fechaini" />
  <br />
  FECHA FIN
  <input type="text" v-model="fechafin" />
  <br />
  MATRICULADOS
  <input type="text" v-model="matri" />
  <br />
  <button @click="cursos.escribirDatos(id, nombre, fechaini, fechafin, matri)">
    AÑADIR
  </button>
</template>

<style scoped></style>
