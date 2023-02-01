<script setup>
import { useListadoStore } from "@/stores/Listado.js";
import { useCursosStore } from "@/stores/Cursos.js";
const listado = useListadoStore();
const cursos = useCursosStore();
</script>

<template>
  <h1>Listado</h1>
  <ul>
    <li v-for="dato in cursos.lista" :key="dato">
      {{ dato.nombre }} - {{ dato.fechaInicio }} - {{ dato.matriculados }}
      <button @click="dato.matriculados++" id="ana">AÑADIR</button>
      <button @click="dato.matriculados--" id="del">ELIMINAR</button>
      <button @click="cursos.borrar(dato.nombre)" id="delcu">
        BORRAR CURSO
      </button>
    </li>
  </ul>
</template>

<style scoped>
#ana {
  background-color: rgb(107, 228, 27);
  border: 1px solid whitesmoke;
  border-radius: 15%;
}
#del {
  background-color: rgb(228, 84, 27);
  border: 1px solid whitesmoke;
  border-radius: 15%;
}
#delcu {
  background-color: rgb(255, 0, 0);
  border: 1px solid whitesmoke;
  border-radius: 15%;
}
</style>
