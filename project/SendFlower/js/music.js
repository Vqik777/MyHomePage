// 背景音乐
function audio(url, isLoop) {
    // 创建背景音频实例
    var audio = new Audio(url)
    // 是否循环
    audio.loop = isLoop ? isLoop : false
    // 开始播放
    return audio
}
var happy = audio("./music/happy.wav", false)
var circulation=audio("./music/circulation.wav",true)