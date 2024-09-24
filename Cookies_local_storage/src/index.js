function setCookies() {
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
    document.cookie = `firstname=  ${firstname}; path=/;`
    document.cookie = `  email=  ${email}; path=/;`
}
function showCookies() {
    const cookies = document.cookie;
    const elemnt = document.createElement("p");
    elemnt.innerHTML = `Cookies: ${cookies}`;
    document.body.appendChild(elemnt);
}