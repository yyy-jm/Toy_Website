document
    .getElementById("btn")
    .addEventListener("click", function () {

        fetch("https://toy-website-4kg5.onrender.com/message")
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