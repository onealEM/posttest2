const tombol = document.getElementById('kirim')
tombol.onclick = simpan_data

function simpan_data(e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var kontak = document.getElementById('kontak1').value;
    var email = document.getElementById('email').value;
    var pesan = document.getElementById('message').value;
    var asal = document.getElementById('asal').value;
    var temp = document.querySelector('input[name="tempat"]:checked').value;
    var acara = Array.from(document.querySelectorAll('input[name="acara"]:checked')).map(function(acara) {
        return acara.value;
    });

    var data = JSON.parse(sessionStorage.getItem('data')) || [];
    data.push({
        'Nama' : name,
        'Kontak' : kontak,
        'Email' : email,
        'Pesan' : pesan,
        'Asal' : asal,
        'Tempat Acara' : temp,
        'Gelaran Acara' : acara,
    })

    sessionStorage.setItem('data', JSON.stringify(data));
    alert('Data berhasil dikirim');

    window.location.href='../file-html/tampil-data.html';
    document.getElementById('form').reset();
}