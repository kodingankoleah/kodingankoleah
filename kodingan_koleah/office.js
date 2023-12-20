document.getElementById("myButton").addEventListener("click", function () {
  alert("Tombol diklik!");
});

document.addEventListener('DOMContentLoaded', function () {
  const buttonContainer = document.getElementById('button-container');

  buttonContainer.addEventListener('click', function (event) {
    const targetButton = event.target;
    
    if (targetButton.id === 'button1' || targetButton.id === 'button2' || targetButton.id === 'button3') {
      window.open('office.html', '_blank');
    }
  });
});
