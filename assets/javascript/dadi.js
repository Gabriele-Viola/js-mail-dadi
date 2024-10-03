
const cpu_num = Math.floor(Math.random() * 6);
const player_num = Math.floor(Math.random() * 6);
if (cpu_num > player_num) {
    alert(`Your result is ${player_num} and the cpu result is ${cpu_num}
        You Lose!`)
} else if (cpu_num < player_num) {
    alert(`Your result is ${player_num} and the cpu result is ${cpu_num}
You Win!`)
} else {
    alert(`Your result is ${player_num} and the cpu result is ${cpu_num}
        You Drew!
re-roll the dice`)
}