function sendMessage() {
    const userInput = document.getElementById('user_input').value;
    fetch('/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput }),
    })
    .then(response => response.json())
    .then(data => {
        const messages = document.getElementById('messages');
        const newMessage = document.createElement('div');
        newMessage.innerText = `AI: ${data.message}`;
        messages.appendChild(newMessage);
    });
}