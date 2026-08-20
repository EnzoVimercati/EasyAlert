const SelectAlert = document.getElementById("Select-alert")

function criarToast(mensagem) {
    console.log(SelectAlert.value)
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
        if(SelectAlert.value == "Sucesso"){
            console.log("oi")
            toast.classList.add("toast-sucess");
        }
        else if(SelectAlert.value == "Error")
        {
            toast.classList.add("toast-error");
        }
    toast.textContent = mensagem;
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add("saindo");

        toast.addEventListener("animationend", () => {
            toast.remove();
        });
    }, 3000);
}