const que_list_eng = ['I feel that life is very rewarding.',
'I am able to find the goodness in myself and others.',
'I am optimistic about the future.',
'I take pleasure in everyday activities.'
,'I feel joy from moment to moment.',
'I have a sense of meaning and purpose in my life.',
'I have a lot of energy.',
"I feel best when I'm giving to others.",
"I can find the good, even in a difficult situation.",
"I actively keep in touch with friends and family."]

const que_list_fr =['Je sens que la vie est très enrichissante.',
'Je suis capable de trouver la bonté en moi et chez les autres.',
"Je suis optimiste pour l'avenir.",
"Je prends du plaisir dans les activités quotidiennes."
,"Je ressens de la joie d'instant en instant.",
"J'ai un sens et un but dans ma vie.",
"J'ai beaucoup d'énergie.",
"Je me sens mieux quand je donne aux autres.",
"Je peux trouver le bien, même dans une situation difficile.",
"Je reste activement en contact avec mes amis et ma famille." ]

const result_list_eng = ["<b> Your Score: You're Happier Than Average </b> You are really living a full life! Though you probably know this already, being happy does not mean a perpetual state of bliss. That's just not sustainable for human nature. But what it does mean is that you're able to sit with all of your feelings with curiosity and compassion.",
"<b> Your Score: Your Happiness Is Average </b> This isn't a bad thing; it just reinforces that no one is happy all of the time. And, maybe you could be doing a bit more work to feel more of a sense of purpose.",
"<b> Your Score: You're Unhappier Than Average </b> Okay, so you have some work to do, but the good news is, you can easily shift your mood with a little practice. Start by accepting what you're feeling rather than invalidating it and embrace all feelings with curiosity and nonjudgement."
]

const result_list_fr = ["Votre score : vous êtes plus heureux que la moyenne. Vous vivez vraiment une vie bien remplie ! Bien que vous le sachiez probablement déjà, être heureux ne signifie pas un état de bonheur perpétuel. Ce n'est tout simplement pas durable pour la nature humaine. Mais ce que cela signifie, c'est que vous êtes capable de vous asseoir avec tous vos sentiments avec curiosité et compassion.",
"Votre score : votre bonheur est moyen Ce n'est pas une mauvaise chose ; cela renforce simplement le fait que personne n'est heureux tout le temps. Et peut-être que vous pourriez faire un peu plus de travail pour vous sentir plus utile.",
"Votre score : vous êtes plus malheureux que la moyenne D'accord, vous avez donc du travail à faire, mais la bonne nouvelle est que vous pouvez facilement changer d'humeur avec un peu d'entraînement. Commencez par accepter ce que vous ressentez plutôt que de l'invalider et embrassez tous les sentiments avec curiosité et sans jugement."
]

//questions
const questions  = document.getElementById('que')
const main = document.getElementById('main')
const title = document.getElementById('title')
const que_div= document.getElementById('que-div')

let score = 0
let que_counter = 0

//buttons
const always  = document.getElementById('al')
const often  = document.getElementById('of')
const never  = document.getElementById('nev')
const somet  = document.getElementById('som')
const rarely  = document.getElementById('ra')


//on reload apply these
window.addEventListener('DOMContentLoaded',function(){
    
    questions.textContent = que_list_eng[0]
    score = 0
    que_counter = 0
    
})

//button event
always.addEventListener('click',function(){
    check_ans('al')
})
often.addEventListener('click',function(){
    check_ans('of')
})
somet.addEventListener('click',function(){
    check_ans('som')
})
rarely.addEventListener('click',function(){
    check_ans('ra')
})
never.addEventListener('click',function(){
    check_ans('nev')
})

//check the user answer 
function check_ans (str){
    if (que_counter==que_list_eng.length-1){
        
        always.style.display = 'none'
        often.style.display = 'none'
        somet.style.display = 'none'
        rarely.style.display = 'none'
        never.style.display = 'none'
        document.body.style.backgroundImage = 'url(result.png)'
        title.textContent = 'Results : '
        
        if (score > 15){
            questions.innerHTML = result_list_eng[0]
            que_div.style.height= '210px'
            
        }else if (score <15 && score >8){
            questions.innerHTML = result_list_eng[1]
        }else if (score < 9 ) {
            questions.innerHTML = result_list_eng[2]
            que_div.style.height = '200px'
        }

    }else if (str == 'al' ){
        score += 2
        que_counter ++ 
        questions.textContent = que_list_eng[que_counter]
        console.log(score)

    }else if (str == 'of') {
        score += 2
        que_counter ++ 
        questions.textContent = que_list_eng[que_counter]
        console.log(score)

    }
    else if (str == 'som') {
        score += 1
        que_counter ++ 
        questions.textContent = que_list_eng[que_counter]
        console.log(score)

    }else if (str == 'ra'){
        score += 0
        que_counter ++ 
        questions.textContent = que_list_eng[que_counter]
        console.log(score)

    }else if (str == "nev"){
        score += 0
        que_counter ++ 
        questions.textContent = que_list_eng[que_counter]
        console.log(score)

    }
}

