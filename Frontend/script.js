document
    .getElementById("btn")
    .addEventListener("click", function () {

        fetch("http://localhost:3000/message")
            .then(response => response.json())
            .then(data => {

            document.getElementById("message")
                .textContent = data.text;

            const taskList = document.getElementById("taskList");

            taskList.innerHTML = "";

            data.tasks.forEach(task => {

                const li = document.createElement("li");

                li.textContent = task;

                taskList.appendChild(li);

            });

        })

    });