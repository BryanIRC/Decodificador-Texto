const txt_noencrypt = document.querySelector(".txt-noencrypt");
const txt_encrypt = document.querySelector(".txt-encrypt");

function BtnEncrypt() {
    let textvalidated=false;
    textvalidated = ValidateTxt(txt_noencrypt.value);
    if((textvalidated)){
        alert("El texto que intenta encriptar contiene acentos, caracteres especiales y/o números");
    }
    else{
        let textencrypt = EncryptTxt(txt_noencrypt.value);
        txt_encrypt.value = textencrypt;
    }
}
function BtnUnscrypt() {
    let textencrypt = UnscryptTxt(txt_noencrypt.value);
    txt_encrypt.value = textencrypt;
}
function EncryptTxt(txtencrypt) {
    let keys = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    txtencrypt = txtencrypt.toLowerCase();
    for (let i = 0; i < keys.length; i++) {
        if (txtencrypt.includes(keys[i][0])) {
            txtencrypt = txtencrypt.replaceAll(keys[i][0], keys[i][1]);
        }
    }
    return txtencrypt;
}
function UnscryptTxt(txtunscrypt) {
    let keys = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    for (let i = 0; i < keys.length; i++) {
        if (txtunscrypt.includes(keys[i][1])) {
            txtunscrypt = txtunscrypt.replaceAll(keys[i][1], keys[i][0]);
        }
    }
    return txtunscrypt;
}
function ValidateTxt(txtvalidated) {
    for (let i = 33; i <=64; i++) {
        if (txtvalidated.includes(String.fromCharCode(i))) {
            return true;
        }
    }
    for (let i = 91; i <=96; i++) {
        if (txtvalidated.includes(String.fromCharCode(i))) {
            return true;
        }
    }
    for (let i = 123; i <=255; i++){
        if(i<164 || i>165){
            if (txtvalidated.includes(String.fromCharCode(i))) {
                return true;}
            }}
    return false;
}
function CopyTxt(){
    navigator.clipboard.writeText(txt_encrypt.value);
}