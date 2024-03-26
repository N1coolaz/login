auth.onAuthStateChanged(user => {
    const userEmailAndNameField = window.document.querySelector("#user-email")
    const userAvatarField = window.document.querySelector("#user-avatar")
    
    if(user) {
        const currentUserAvatar = auth.currentUser.photoURL
        const currentUserName = auth.currentUser.displayName
        const currentUserEmail = auth.currentUser.email

        userEmailAndNameField.innerHTML = `"${currentUserEmail}"`

        if(currentUserName) { /* "currentUserName" só existirá caso o usuário tenha se authenticado utilizando o Google */
            userAvatarField.src = currentUserAvatar
            userEmailAndNameField.innerHTML = currentUserName
        }
    } else {
        window.location.pathname = "login/index.html"
    }
})

const signout = () => auth.signOut()