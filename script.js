const btn = document.getElementById('btn');
const input = document.querySelector('.input');
const errorMessage = document.querySelector('.error'); 
const successMessage = document.querySelector('.success');
btn.addEventListener('click', function(){
    if(input.value === ""){
        errorMessage.style.display = 'block';
        
    }else{
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
        window.location.href = 'success.html'
    }
})