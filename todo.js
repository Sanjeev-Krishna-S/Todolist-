document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.getElementById('taskList');
    let completedTaskCount = 0;

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            data.forEach(task => {
                const listItem = document.createElement('li');
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.addEventListener('change', function () {
                    if (checkbox.checked) {
                        completedTaskCount++;
                        if (completedTaskCount >= 5) {
                            showCongratulatoryMessage(completedTaskCount);
                        }
                    } else {
                        completedTaskCount--;
                    }
                });
                listItem.appendChild(checkbox);
                listItem.appendChild(document.createTextNode(task.title));
                taskList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching tasks:', error);
            alert('Failed to fetch tasks. Please try again later.');
        });
});

function showCongratulatoryMessage(completedCount) {
    alert(`Congrats. ${completedCount} Tasks have been Successfully Completed`);
}
