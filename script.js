new Typed("#typed", {
  strings: ["FPGA Developer","VLSI Enthusiast","Embedded Engineer"],
  typeSpeed:50,
  backSpeed:30,
  loop:true
});

AOS.init();

function showMessage(e){
  document.getElementById("message").innerText="Thanks for visiting 🚀";
}

function openModal(type){
  let text=document.getElementById("modalText");
  if(type==="fir")
    text.innerText="Adaptive FIR filter implemented on FPGA.";
  else
    text.innerText="AES encryption with UART communication.";
  document.getElementById("modal").style.display="block";
}

function closeModal(){
  document.getElementById("modal").style.display="none";
}

function validateForm(){
  let n=document.getElementById("name").value;
  let e=document.getElementById("email").value;
  if(n===""||e===""){ alert("Fill all fields"); return false;}
  alert("Submitted!");
  return true;
}

function toggleTheme(){
  document.body.classList.toggle("dark");
}

window.onscroll=function(){
  document.getElementById("topBtn").style.display=
    window.scrollY>200?"block":"none";
};

function scrollTopPage(){
  window.scrollTo({top:0,behavior:"smooth"});
}