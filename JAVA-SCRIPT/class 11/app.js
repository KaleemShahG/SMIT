function getInputValue(){
    var Input = document.getElementById("username")
    var InputValue = Input.value.trim()
    console.log(InputValue);
if(InputValue === ""){
        alert("Please enter a username");
    }else{
        alert("Username is valid");
    }
}

