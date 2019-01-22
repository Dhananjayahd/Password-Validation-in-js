document.querySelector(".myform").addEventListener("submit",(event) =>{
    event.preventDefault()
    let pass1 = event.target.pass.value
    let pass2 = event.target.confirm.value

    if(pass1==pass2){
        console.log(pass1)
        console.log(pass2)
    }
    else{
        document.getElementById('demo').innerHTML="*password does not match"
    }
   event.target.username.value=''
   event.target.pass.value=''
   event.target.confirm.value=''
   event.target.email.value=''
})
var reload= document.querySelectorAll('p')
for(var i=0;i<reload.length;i++){
    reload[i].addEventListener('click',(event)=>{
        document.getElementById('demo').innerHTML=''
    })
}
