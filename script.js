/* Pada code bagian ini kita akan mengaktifkan buttin hitung BMI
    .Kita juga membuat beberapa variable yang relevan dan mengambil 
    data dari variabel tersebut menggunakan id (saya membuatnya dengan ID)"*/

const btn = document.getElementById('hitung-bmi');

btn.addEventListener('click', function(){

    let tinggi = document.querySelector('#tinggi').value;
    let berat = document.querySelector('#berat').value;
    let umur = document.querySelector('#umur').value;
    let gender = document.querySelector('#gender').value;

    /* Pada code bagian ini kita akan membuat verifikasi. Jika data 
    tinggi, berat, umur dan gender ada yang kosong maka akan memunculkan
    pemberitahuan "terdapat data yang kosong"*/
    if(tinggi == '' || berat == '' || umur == '' || gender == ''){
        alert("Terdapat data yang kosong!");
        return;
    }

    /* Pada code bagian ini kita akan melakukan perhitungan BMI. 
    Setelah hasil di dapatkan akan masuk ke bagian if-else 
    dan status akan tergani.*/
    tinggi = tinggi/100
    let BMI = (berat/(tinggi*tinggi));
    BMI = BMI.toFixed(2);

    document.querySelector('#result').innerHTML = BMI;
    let status = '';

    if(BMI < 18.5){
        status = "Kekurangan berat badan";
    }
    if(BMI >= 18.5 && BMI<24.9){
        status = "Normal (ideal) ";
    }
    if(BMI >=24.9 && BMI<29.9){
        status = "Kelebihan berat badan";
    }
    if(BMI>=30.0){
        status = "Kegemukan(obesitas)";
    }
    document.getElementById('comment').innerHTML = `Dari hasil tersebut anda ${status}`;
    /*status yang sudah diperbaharui akan tampil ke bagian htmlnya*/

});