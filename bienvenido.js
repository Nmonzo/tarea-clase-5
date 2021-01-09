
document.querySelector('#entrar').onclick = function(){
    const nombre1 = document.querySelector('#nombre1').value
    const nombre2 = document.querySelector('#nombre2').value
    const apellido = document.querySelector('#apellido').value
    const edadUsuario = document.querySelector('#edad').value
   document.querySelector('#resultado').innerText = `Hola ${nombre1} ${nombre2} ${apellido} tenes ${edadUsuario} años`
   document.querySelector('h1').innerText = `Bienvenido ${nombre1}`; return false
}
