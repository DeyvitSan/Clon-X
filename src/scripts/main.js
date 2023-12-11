export async function validarLogin(email, password, user) {
    if (email === '' || password === '' || user === '')
        return null;
    const usuario = {
        email: email,
        password: password,
        user: user,
    }
    const response = await fetch('http://localhost:3001/auth', {
        method: 'POST',
        mode: 'cors',
        credentials: "include",
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        withCredentials: true,
        body: JSON.stringify(usuario)
    })
    if (response.ok){
        return true;
    }
    return null;
}