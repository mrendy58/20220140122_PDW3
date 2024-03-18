const waktu = document.getElementById("waktu");

function tanggal(){
    const date = new Date();
    waktu.innerHTML = date;

}

setInterval(tanggal, 1000);


tanggal();

function sweetAlert(){
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
}