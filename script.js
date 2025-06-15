const loveLetters = [
    "Every moment with you feels like a dream I never want to wake up from.",
    "You are my favorite hello and my hardest goodbye.",
    "In your arms, I’ve found my safe place.",
    "I didn’t believe in soulmates until I met you.",
    "Your love feels like home to me. I love you so much.",
    "Even on my worst days, you make me feel so loved.",
    "You make my heart smile in ways words can’t describe.",
    "Forever doesn’t seem long enough with you.",
    "I love you more with every breath I take.",
    "With you, I’ve found the meaning of true love.",
    "You are the reason my heart beats a little faster.",
    "I still get butterflies every time I think of you.",
    "Being loved by you is my favorite gift.",
    "Every love song makes sense since I met you.",
    "I choose you. And I’ll choose you again and again.",
    "You’re my today and all of my tomorrows.",
    "Your smile is my favorite sight.",
    "You’re not just my love — you’re my whole heart.",
    "I didn’t know what missing someone truly felt like until you left the room.",
    "You make my heart feel so full even when we’re miles apart.",
    "You have the most adorable laugh in the world.",
    "Thinking of you is my favourite part of the day.",
    "No matter how far you are, you always feel close to my heart.",
    "You are my safe place, my peace, my favourite hello and hardest goodbye.",
    "Every time I think of you, my day instantly gets better.",
    "If I had a teleportation device, I’d be in your arms already.",
    "I still replay our last hug in my head when I miss you.",
    "Even when life is chaotic, thoughts of you make everything calm.",
    "You’re the cutest part of my entire existence.",
    "I’m so lucky to love someone who feels like home.",
    "Your voice is the most comforting sound I know.",
    "I’d wait a thousand lifetimes if it means being with you again.",
    "I love you more than sleep, and you know how much that means.",
    "You’re the smile I didn’t know I needed.",
    "Our late-night calls are the highlights of my universe.",
    "You make the stars feel dim, because you shine brighter.",
    "One day we’ll laugh about how hard it was — together, side by side.",
    "You’re not just in my heart; you *are* my heart.",
    "My soul feels quieter when I think of you.",
    "Distance means nothing when the person means everything.",
    "I love how you make me feel seen, even when I feel invisible.",
    "You’re my morning sun to my midnight moon.",
    "No matter what happens, you and I are on the same team.",
    "Somewhere out there, you’re smiling — and it makes my heart flutter.",
    "Your love makes the hard days soft.",
    "Being yours feels like the most natural thing in the world.",
    "You're my favourite notification.",
    "This love is gentle, warm, and endlessly yours.",
    "You’re my favourite way to spend time, even if it's just in my head.",
    "I’d cross galaxies to kiss your cheeks right now.",
    "Even if I saw you every day, I'd still get butterflies.",
    "You are the best thing I’ve never let go of.",
    "Every version of my future has you in it.",
    "You give ordinary things extraordinary meaning.",
    "I wish I could bottle your laugh and keep it with me always.",
    "You’ve got the kind of heart poets dream about.",
    "You're the song I never get tired of.",
    "You're my constant in this ever-changing world.",
    "Your love feels like a soft blanket and warm hot chocolate on a cold, rainy day.",
    "Your love makes my world gentler.",
    "Even in silence, you make me feel heard.",
    "Being loved by you is my most favourite feeling.",
    "I can never get over the thought of not playing with your hair."
];

function playSound() {
    const popSound = document.getElementById("pop-sound");
    popSound.volume = 0.7;
    popSound.currentTime = 0;
    popSound.play()
}

function generateLetter() {
    playSound();
    const letter = document.getElementById("letter");
    let index = Math.floor(Math.random() * loveLetters.length);
    let message = loveLetters[index];
    letter.textContent = message;
}
   
function countdownTimer() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const monthlyversaryDay = 17;

    let nextMonthlyversary = new Date(currentYear, currentMonth, monthlyversaryDay);

    if (today.getDate() == monthlyversaryDay) {
        document.getElementById("month-message").textContent = "Happy Monthly Anniversary Babes!";
        return;
    } else if (today.getDate() > monthlyversaryDay) {
        nextMonthlyversary = new Date(currentYear, currentMonth + 1, monthlyversaryDay);
    } 

    const oneDay = 1000 * 60 * 60 * 24;  
    const diffInTime = nextMonthlyversary.getTime() - today.getTime();
    const daysRemaining = Math.ceil(diffInTime / oneDay);

    if (daysRemaining == 1) {
        document.getElementById("countdown").textContent = daysRemaining + " day";
    } else {
        document.getElementById("countdown").textContent = daysRemaining + " days";
    }
}

countdownTimer();