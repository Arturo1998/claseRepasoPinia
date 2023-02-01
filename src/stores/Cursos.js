import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCursosStore = defineStore("cursos", () => {
  const curso = ref({});
  const cogerArray = computed(() => lista.value);
  const dameCurso = computed(() => curso.value);
  const masMatri = () => {
    curso.value.matriculados++;
  };

  const lista = ref([
    {
      id: 1,
      nombre: "Informática",
      fechaInicio: "11/01/27",
      fechaFinal: "28/03/28",
      matriculados: 10,
    },
    {
      id: 2,
      nombre: "Programación",
      fechaInicio: "10/02/21",
      fechaFinal: "27/05/25",
      matriculados: 12,
    },
    {
      id: 3,
      nombre: "Baloncesto",
      fechaInicio: "11/02/22",
      fechaFinal: "2/04/25",
      matriculados: 9,
    },
    {
      id: 4,
      nombre: "Diseño",
      fechaInicio: "19/03/21",
      fechaFinal: "28/07/21",
      matriculados: 5,
    },
  ]);

  const borrar = (nombre) =>
    (lista.value = lista.value.filter((x) => x.nombre != nombre));

  const escribirDatos = (id, nombre, fechIni, fechFin, matriculados) => {
    const objeto = {
      id: id,
      nombre: nombre,
      fechaIni: fechIni,
      fechFin: fechFin,
      matriculados: matriculados,
    };
    lista.value.push(objeto);
    console.log(lista);
  };
  /*

  const ultimo = computed(() => lista.value[lista.value.length - 1]);
  const eliminaElemento = (elemento) => {
    lista.value = lista.value.filter((el) => el != elemento);
  };
  const anadeElemento = (elemento) => lista.value.push(elemento);

  */
  return {
    lista,
    cogerArray,
    masMatri,
    dameCurso,
    borrar,
    escribirDatos,
  };
});
