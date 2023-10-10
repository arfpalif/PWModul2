function validateInputs(){
    let username = document.getElementById('username').value
    let Email = document.getElementById('Email').value
    let Alamat = document.getElementById('Alamat').value
    if (username === " " || Email === "" || Alamat === " ") {
        document.getElementById("form").onsubmit(
            alert("Data yang kamu isi belum semua")
        )        
    }
}