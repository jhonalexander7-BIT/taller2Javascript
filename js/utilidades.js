function conversionDolarACop() {

    var dolaresEEUU = document.getElementById("dolares").value
    var dolarEEUU = parseFloat(dolaresEEUU)
    var valordolarEEUU = 4415.0
    var conversion = dolarEEUU * valordolarEEUU
    document.getElementById("COP").value = conversion
}

function conversionCelciusAFahrenheit() {

    var gradosCelcius = document.getElementById("celcius").value
    var celcius = parseFloat(gradosCelcius)
    var conversionCelAFar = celcius * 9 / 5 + 32
    document.getElementById("fahrenheit").value = conversionCelAFar
}

function adicionarEmpleado() {

    const codigo = document.getElementById("code").value
    const nombreEmpleado = document.getElementById("name").value

    if (codigo && nombreEmpleado) {

        const table = document.getElementById("adicionEmpleado")
        const newRow = table.insertRow()
        
        const numCodigo = newRow.insertCell(0)
        const numNombre = newRow.insertCell(1)

        numCodigo.textContent = codigo
        numNombre.textContent = nombreEmpleado
    }
    else
    {
        alert("DEBES COMPLETAR TODOS LOS CAMPOS!")
    }
}

function ocultarTexto(text) {
    
    const parafo = text.previousElementSibling

    if (parafo.style.display === "none") {

        parafo.style.display = "block"
        text.textContent = "Ocultar contenido"
    }
    else
    {
        parafo.style.display = "none"
        text.textContent = "Mostrar contenido"
    }
}

document.addEventListener("mousemove",function (event) {
    const x = event.clientX
    const y = event.clientY
    const posicion = `Posición del puntero: X: ${x}, Y: ${y}`
    document.getElementById("coordenadas").textContent = posicion
})