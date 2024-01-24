var dialogues = ['会話1', '会話2', '会話3'];
var currentDialogueIndex = 0;

document.addEventListener('keydown', function(event) {
 var dialogueOverlay = document.getElementById('dialogueOverlay');
 var dialogueMessage = document.getElementById('dialogueMessage');

 if (event.key === 't') {
    if (currentDialogueIndex < dialogues.length) {
        dialogueOverlay.style.display = 'block';
        dialogueMessage.textContent = dialogues[currentDialogueIndex];
        currentDialogueIndex++;
    } else {
        dialogueOverlay.style.display = 'none';
        dialogueMessage.textContent = '';
        currentDialogueIndex = 0;
    }
 }
});