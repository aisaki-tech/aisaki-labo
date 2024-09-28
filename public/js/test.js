
const clickButtonEventListener = async () => {

    const result = await fetch('/api/test')
    console.log(await result.json())
}

window.addEventListener('load', () => {

    const button = document.getElementById('button1');
    button.addEventListener('click', clickButtonEventListener)
})