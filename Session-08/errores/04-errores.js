function calcularDescuento(precio, descuento) {
    if (typeof precio !== "number" || typeof descuento !== "number") {
      throw new Error("Precio y descuento deben ser números");
    }
  
    if (descuento > 100) {
      throw new Error("El descuento no puede superar el 100%",);
    }

    if (descuento < 0) {
      throw new Error("El descuento no puede ser negativo",);
    }
  
    return precio - (precio * descuento) / 100;
  }
  

  // Ejecutamos
  try {
    const final = calcularDescuento(100, 20);
    console.log('El precio descontado es: ', final);
  } catch (e) {
    console.error(e.message);
  }

  