auth.onAuthStateChanged(firebaseUser => {
    if(firebaseUser) window.location.pathname = "home.html"
})

const signup = () => {
    const signupFields = {
        email: window.document.querySelector("#emailSignup").value,
        password: window.document.querySelector("#passwordSignup").value,
        passwordConfirm: window.document.querySelector("#passwordConfirmSignup").value
    }

    if (signupFields.password === signupFields.passwordConfirm) {
        auth.createUserWithEmailAndPassword(signupFields.email, signupFields.password)  
    }
}

const signin = () => {
    const signinFields = {
        email: window.document.querySelector("#emailSignin").value,
        password: window.document.querySelector("#passwordSignin").value,
    }

    auth.signInWithEmailAndPassword(signinFields.email, signinFields.password)
}

const signinGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()

    const signIn = provider => firebase.auth().signInWithPopup(provider)

    signIn(provider)
}