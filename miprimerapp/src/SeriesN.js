class SeriesN {
    // Método para obtener el término n de los números triangulares
    static numeroTriangular(n) {
      return (n * (n + 1)) / 2;
    }
  
    // Método para obtener el término n de la serie de Fibonacci
    static fibonacci(n) {
      if (n <= 1) return n;
      let a = 0, b = 1;
      for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
      }
      return b;
    }
  
    // Método para verificar si un número es primo
    static esPrimo(n) {
      if (n <= 1) return false;
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
      }
      return true;
    }
  
    // Método para obtener el n-ésimo número primo
    static numeroPrimo(n) {
      let count = 0;
      let num = 1;
      while (count < n) {
        num++;
        if (this.esPrimo(num)) count++;
      }
      return num;
    }
  }
  
  export default SeriesN;
  