//avribels
let sendBtn = document.querySelector("#btn-Send");

let emali = document.querySelector("#email");
let subject = document.querySelector("#Subject");
let textarea = document.querySelector("#textarea");

let btnReset = document.querySelector("#btn-Reset");
let btnSend=document.querySelector("#btn-Send");

let error2=document.querySelector("#error2");



// eventListeners
addEventListener();
function addEventListener() {
  document.addEventListener("DOMContentLoaded", inpApp);
  emali.addEventListener("blur", validFeild);
  subject.addEventListener("blur", validFeild);
  textarea.addEventListener("blur", validFeild);
  btnReset.addEventListener("click",resetForm);
  btnSend.addEventListener("click",btnSendShowSpiner);
}

// functions
function inpApp() {
  sendBtn.disabled = true;
}

function validFeild() {
  valideLength(this);
  if (this.classList.contains("email1")) {
    validEmail(this);
  }
  let error = document.querySelectorAll(".error");

  if (emali.value !== "" && subject.value !== "" && textarea.value !== "") {
    if (error.length === 0) {
      sendBtn.disabled = false;
    }
  }
}



function validEmail(filde) {
  if (emali.value== "" && subject.value== "" && textarea.value == ""){
    sendBtn.disabled = true;
  }
  const emailText = filde.value;
  if (emailText.includes("@")) {
    filde.style.borderBottomColor = "green";
    filde.classList.remove("error");
    error2.style.border="none"
    error2.innerHTML="";
  } else {
    error2.innerHTML="مقدار فیلد را به درستی پر کنید"
    filde.style.borderBottomColor = "red";
    error2.style.border=" 5px outset #00ffcc"
    filde.classList.add("error");
    sendBtn.disabled = true;
  }
}

function valideLength(filde) {
  if (filde.value.length > 0) {
    filde.style.borderBottomColor = "green";
    filde.classList.remove("remove");
  } else {
    filde.style.borderBottomColor = "red";
    filde.classList.add("remove");
    sendBtn.disabled = true;
  }
}


function resetForm() {
  form.reset()
}


function btnSendShowSpiner(e) {
  e.preventDefault();
  let loaders=document.querySelector("#loders")
  let spiner=document.querySelector("#spine-r");
let sendEmailImage=document.createElement("img");
sendEmailImage.src="../image/icons8-tick-box.gif";
sendEmailImage.classList="sendEmailImage";
 setTimeout(()=> {
  spiner.style.display="block";
  setTimeout(() => {
    spiner.style.display="none";
    sendEmailImage.style.display="block";
     loaders.appendChild(sendEmailImage);
      setTimeout(() => {
       
        sendEmailImage.remove();
        resetForm() 
      }, 4000);
  }, 2000);
 },1000);
}