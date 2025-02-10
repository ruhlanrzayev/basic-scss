const ad = document.getElementById('ad');
const soyad = document.getElementById('soyad');

const generate = () => {
    if(ad.value == '' || soyad.value == '') alert("Boşluqları doldurun!")
    else {
        alert(`Salam, ${ad.value} ${soyad.value}! Xoş gəldiniz!`)
        ad.value = '';
        soyad.value = '';
    }
}

document.addEventListener('keydown' , (e) => {
    if(e.key === 'Enter') generate()
})