function updatescores () {
    OLED.clear()
    OLED.writeStringNewLine("Player1: " + Player1)
    OLED.newLine()
    OLED.writeStringNewLine("Player2: " + Player2)
    OLED.newLine()
    OLED.writeStringNewLine("Ties: " + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds: " + Rounds)
}
let Rounds = 0
let Ties = 0
let Player2 = 0
let Player1 = 0
OLED.init(128, 64)
OLED.writeStringNewLine("Shall we play a game?")
Player1 = 0
Player2 = 0
Ties = 0
Rounds = 0
basic.pause(2000)
updatescores()
