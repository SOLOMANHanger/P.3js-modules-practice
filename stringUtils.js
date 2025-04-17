export function emoticonToEmoji(text) {
    const emoticonMap = {
        ":)": "😊",
        ":P": "😛"
    };
    return emoticonMap[text];
}