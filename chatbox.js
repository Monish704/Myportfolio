// chatbot.js
document.addEventListener('DOMContentLoaded', function() {
    const chatbotContainer = document.getElementById('chatbot-container');
    const inputField = document.createElement('input');
    const sendButton = document.createElement('button');
    const chatWindow = document.createElement('div');
    
    inputField.placeholder = "Ask me about my resume...";
    sendButton.innerText = "Send";
    chatWindow.id = "chat-window";
    
    chatbotContainer.appendChild(chatWindow);
    chatbotContainer.appendChild(inputField);
    chatbotContainer.appendChild(sendButton);
    
    sendButton.addEventListener('click', async function() {
        const query = inputField.value;
        inputField.value = '';
        
        const userMessage = document.createElement('div');
        userMessage.className = 'user-message';
        userMessage.innerText = query;
        chatWindow.appendChild(userMessage);
        
        const response = await fetch('/api/chatbot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query })
        }).then(res => res.json());
        
        const botMessage = document.createElement('div');
        botMessage.className = 'bot-message';
        botMessage.innerText = response.answer;
        chatWindow.appendChild(botMessage);
    });
});