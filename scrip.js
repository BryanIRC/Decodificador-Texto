const txt_noencrypt = document.querySelector(".txt-noencrypt");
const txt_encrypt = document.querySelector(".txt-encrypt");

function BtnEncrypt() {
    let textencrypt = EncryptTxt(txt_noencrypt.value);
    txt_encrypt.value = textencrypt;
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

function UnscryptTxt(txtencrypt) {
    let keys = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    txtencrypt = txtencrypt.toLowerCase();
    for (let i = 0; i < keys.length; i++) {
        if (txtencrypt.includes(keys[i][1])) {
            txtencrypt = txtencrypt.replaceAll(keys[i][1], keys[i][0]);
        }
    }
    return txtencrypt;
}