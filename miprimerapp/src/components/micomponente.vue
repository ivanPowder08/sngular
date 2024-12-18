<template>
  <div id="micomponente">

    <div class="container">
        <div class="row">
          <div class="col">
            <div class="card" style="max-width: 540px;">
                <div class="card-header">
                  <img src="../assets/logo.svg" class="img-fluid rounded-start" alt="Vue Ivan" style="width: 3rem;">
                </div>
                
                  <div class="card-body">
                    <h5 class="card-title">{{ mensaje }}</h5>
                    <input class="form-control" type="text" v-model.number="n" @change="calcularOperaciones" placeholder="Escribe un número">
                    <br>
                    <p v-if="result !== null">El resultado es: {{ result }}</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">Mi primer App Vue por Ivan Martínez Rodríguez</small>
                  </div>
                
              
            </div>
          </div>  
        </div>  
    </div>  



  </div>
</template>

<script>
import SeriesN from '../SeriesN.js';

export default {
  name: 'micomponente',
  data() {
    return {
      mensaje: 'Bienvenido',
      result: null, // El resultado será un número, no un string vacío
      n: 0,
    };
  },
  methods: {
    validarEntero() {
      // Validamos que el número sea entero
      if (!Number.isInteger(Number(this.n))) {
        this.n = this.n.slice(0, -1); // eliminar el último carácter si no es un número entero
      }
      this.calcularOperaciones(); // Volver a calcular con el valor corregido
    },
    
    calcularOperaciones() {
      if (this.n <= 0) {
        this.result = 'Por favor, introduce un número válido mayor a 0';
        
      }

      // Limpiar el resultado mientras se emite el evento
      this.result = null;
      this.$emit('calcularOperaciones', this.n); // Emitir al componente padre para el cálculo
    },

    calcularResultado(n) {
      // Llamada a la clase SeriesNumericas para realizar los cálculos
      return {
        triangular: SeriesN.numeroTriangular(n),
        fibonacci: SeriesN.fibonacci(n),
        primo: SeriesN.numeroPrimo(n),
      };
    },
  },
  watch: {
    n(newValue) {
      if (newValue > 0) {
        this.result = this.calcularResultado(newValue); 
      } else {
        this.result = 'Por favor, introduce un número válido mayor a 0';
      }
    },
  },
};
</script>

<style scoped>

</style>
