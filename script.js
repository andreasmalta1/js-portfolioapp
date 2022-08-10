const countersEl = document.querySelectorAll('.counter')

countersEl.forEach(counter =>{
    counter.innerText = 0
    incrementCounter()
    function incrementCounter(){
        let currentNum = +counter.innerHTML
        const ceil = counter.getAttribute('data-ceil')
        const increment = ceil / 10
        currentNum += Math.floor(increment)
        
        if (currentNum < ceil){
            counter.innerHTML = currentNum
            setTimeout(incrementCounter, 50)
        } else{
            counter.innerHTML = ceil
        }
    }
})