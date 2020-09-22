function definirTriangulo(lado1, lado2, lado3){
    if (lado1 === lado2 && lado1 === lado3) {
        console.log(`O triangulo de lados ${lado1} é Equilátero.`)
    } else if ((lado1 === lado2 && lado1 != lado3)|| 
        (lado1 === lado3 && lado1 != lado2)|| 
        (lado2 === lado3 && lado2 != lado3))
        {
            console.log(`O triangulo de lados ${lado1}, ${lado2}, ${lado3} é Isósceles.`)
    } else console.log(console.log(`O triangulo de lados ${lado1}, ${lado2}, ${lado3} é Escaleno.`))
}

definirTriangulo(1,2,3)
definirTriangulo(1,1,3)
definirTriangulo(4,4,4)