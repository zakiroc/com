// Асинхронная функция для получения комментариев и отображения их в DOM
async function fetchComments() {
    try {
        // Запрос к API для получения комментариев
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        
        // Проверка на успешный ответ
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Преобразование ответа в JSON
        const comments = await response.json();
        
        // Ограничение количества комментариев до 20
        const commentsToDisplay = comments.slice(0, 20);

        // Выбор элемента контейнера в DOM
        const container = document.getElementById('comments-container');

        // Создание и добавление HTML-элементов для каждого комментария
        commentsToDisplay.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.innerHTML = `
                <h3>${comment.name}</h3>
                <p><strong>Email:</strong> ${comment.email}</p>
                <p>${comment.body}</p>
            `;
            container.appendChild(commentElement);
        });
    } catch (error) {
        console.error('Ошибка при загрузке комментариев:', error);
    }
}

// Вызов асинхронной функции после загрузки страницы
window.onload = fetchComments;
