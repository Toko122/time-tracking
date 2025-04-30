const daily = document.getElementById("daily")
const weekly = document.getElementById("weekly")
const monthly = document.getElementById("monthly")

const work = document.getElementById("work")
const play = document.getElementById("play")
const study = document.getElementById("study")
const social = document.getElementById("social")
const exercise = document.getElementById("exercise")
const selfcare = document.getElementById("selfcare")
         
    function change(button, hours){
        
        [daily, weekly, monthly].forEach(btn => {
            btn.classList.remove("text-white")
            btn.classList.add("text-[#ccc]")
        })

        button.classList.remove("text-[#ccc]")
        button.classList.add("text-white")


        work.textContent = hours.work
        study.textContent = hours.study
        exercise.textContent = hours.exercise
        selfcare.textContent = hours.selfcare
        play.textContent = hours.play
        social.textContent = hours.social
    }

        
    
    daily.addEventListener("click", ()=>{
           change(daily, {
             work: "3hrs",
             play: "5hrs",
             study: "6hrs",
             exercise: "4hrs",
             social: "11hrs",
             selfcare: "3hrs"
           })
    })

    weekly.addEventListener("click", ()=>{
        change(weekly, {
            work: "32hrs",
            play: "10hrs",
            study: "12hrs",
            exercise: "8hrs",
            social: "5hrs",
            selfcare: "4hrs"
        })
 })

 monthly.addEventListener("click", ()=>{
    change(monthly, {
        work: "103hrs",
        play: "40hrs",
        study: "50hrs",
        exercise: "30hrs",
        social: "25hrs",
        selfcare: "20hrs"
    })
})

