const tombol = document.getElementById('send')
tombol.onclick = simpan_data

function simpan_data(e) {
    e.preventDefault();

    // ambil nilai dari setiap input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var country = document.getElementById('daerah').value;
    var address = document.getElementById('address').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var position = Array.from(document.querySelectorAll('input[name="position"]:checked')).map(function(position) {
        return position.value;
    });
    var file = document.getElementById('gambar').files[0];
    var motto = document.getElementById('motto').value;

    // buat objek untuk menyimpan nilai dari setiap input
    var data = JSON.parse(sessionStorage.getItem('data')) || [];
    data.push({
        'Full Name' : name,
        'Email' : email,
        'daerah' : country,
        'Address' : address,
        'Gender' : gender,
        'Position' : position,
        'Picture' : file,
        'Motto' : motto,
    })

    // simpan objek ke dalam session storage
    sessionStorage.setItem('data', JSON.stringify(data));
    alert('Data berhasil disimpan ke menu REGISTRAR');

    document.getElementById('form').reset();
}