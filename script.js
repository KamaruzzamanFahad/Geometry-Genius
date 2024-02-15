document.getElementById('tcal').addEventListener('click',function(){
    const b = document.getElementById('trin1');
    const h = document.getElementById('trin2');
    const cal = 0.5*b.value*h.value;
    const result = document.getElementById('tr');
    result.innerText = cal;
})