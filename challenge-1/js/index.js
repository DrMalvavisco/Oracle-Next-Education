// Obtenemos nuestros botones por su ID
let btn_encript = document.getElementById("btn-encript")
let btn_decript = document.getElementById("btn-decript")
let btn_copy = document.getElementById("btn-copy")

function encriptText(){

    let ta_encript = document.getElementById("ta-encript")
    let ta_decript = document.getElementById("ta-decript")
    let msg_div = document.getElementById("msg-div")
    let text = ta_encript.value
    // Obtenemos el valor del textarea, convertirlo a minúsculas y remover espacios del inicio/final
    if(!text){
        msg_div.classList.remove("hidden")
        btn_copy.classList.add("hidden")
        ta_decript.value = ''
        return
    }
    text = text.toLowerCase().trim()
    let new_text = ''
    btn_copy.classList.remove("hidden")
    msg_div.classList.add("hidden")
    // Iteramos sobre nuestro texto y reemplezamos los respectivos caracteres con su valor secreto
    for(let char of text){

        switch(char){
            case 'a':
                char = 'ai'
                break
            case 'e':
                char = 'enter'
                break
            case 'i':
                char = 'imes'
                break
            case 'o':
                char = 'ober'
                break
            case 'u':
                char = 'ufat'
                break
        }

        new_text += char
    }
    
    // Ponemos nuestra cadena encriptada en el textarea correspondiente
    ta_decript.value = new_text
}

function decriptText(){

    let ta_encript = document.getElementById("ta-encript")
    let ta_decript = document.getElementById("ta-decript")
    let msg_div = document.getElementById("msg-div")
    // Obtenemos el valor del textarea, convertirlo a minúsculas y remover espacios del inicio/final
    let text = ta_encript.value
    if(!text){
        msg_div.classList.remove("hidden")
        btn_copy.classList.add("hidden")
        ta_decript.value = ''
        return
    }
    
    btn_copy.classList.remove("hidden")
    msg_div.classList.add("hidden")
    text = text.toLowerCase().trim()
    let new_text = text
    // Reemplezamos todas las ocurrencias de las secuencias secretas para desencriptar el mensaje
    new_text = new_text.replaceAll('ai', 'a')
    new_text = new_text.replaceAll('enter', 'e')
    new_text = new_text.replaceAll('imes', 'i')
    new_text = new_text.replaceAll('ober', 'o')
    new_text = new_text.replaceAll('ufat', 'u')

    // Ponemos nuestra cadena encriptada en el textarea correspondiente
    ta_decript.value = new_text
}

function copyClipboard(){
    
    let ta_decript = document.getElementById("ta-decript")
    // Select the text field
    ta_decript.select()
    ta_decript.setSelectionRange(0, 99999) // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(ta_decript.value)
  
}

// Asignamos funciones al evento onclick de cada boton
btn_encript.onclick = encriptText
btn_decript.onclick = decriptText
btn_copy.onclick = copyClipboard




