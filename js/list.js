const listMusics = () => {
    const tableMusics = window.document.querySelector("#table-musics").querySelector("tbody")

    // const url = "https://etec24-3dc8c-default-rtdb.firebaseio.com/musicas.json"

    const url = "https://etec-c8a17-default-rtdb.firebaseio.com/music.json"

    const options = {
        method: "GET",
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json;charset=utf-8',
        }
    }

    fetch(url, options)
        .then(response => response.json())
            .then(data => {
                console.log(data)

                for(const key in data) {
                    const music = data[key]

                    tableMusics.innerHTML += `
                        <tr>
                            <td>${music.faixa}</td>
                            <td>${music.cantor}</td>
                            <td>${music.estrelas}</td>
                            <td>${music.album}</td>
                            <td>
                                <button data-key=${key} onclick="deleteMusic(this)"><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                    `
                }
            })
}

const deleteMusic = button => {
    const key = button.getAttribute("data-key")

    // const url = `https://etec24-3dc8c-default-rtdb.firebaseio.com/musicas/${key}.json`

    const url = `https://etec-c8a17-default-rtdb.firebaseio.com/music/${key}.json`

    const options = {
        method: "DELETE",
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json;charset=utf-8',
        }
    }

    fetch(url,options)
        .then(response => response.json())
            .then(data => location.reload()
    )
}

window.addEventListener("load", listMusics)