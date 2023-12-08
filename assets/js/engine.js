/** Motor do Simulador */

const pianoKeys = document.querySelectorAll(".piano-keys .key")
const volumeSlider = document.querySelector(".volume-slider input")
const keyCheck = document.querySelector(".keys-check input")

let audio  = new Audio("./assets/audios/a.wav")

const mappedKeys = []

const playTune = (key) => {
    audio.src = `./assets/audios/${key}.wav`
    audio.play()
    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active")
    setTimeout(()=>{ clickedKey.classList.remove("active")}, 150)
}

pianoKeys.forEach( (key)=>{
    key.addEventListener("click", ()=>{
        playTune(key.dataset.key)
    })

    mappedKeys.push(key.dataset.key)
})


document.addEventListener("keydown", (e) =>{
    if (mappedKeys.includes(e.key)){
        playTune(e.key)
    }
    console.log(e)
})

const handleVolume = (e) =>{
    audio.volume = e.target.value
    console.log(e.target.value)
}

const showHideKeys = () => {
    pianoKeys.forEach( (key) => key.classList.toggle("hide"))
}

volumeSlider.addEventListener("input", handleVolume)
keyCheck.addEventListener("click", showHideKeys)