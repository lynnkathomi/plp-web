// Initialize Firebase with your config
firebase.initializeApp({
    apiKey: "AIzaSyDaYWmVlh3KZbzVZwtY0s5rI-TS-9CtWwc",
    authDomain: "to-do-list-28e24.firebaseapp.com",
    projectId: "to-do-list-28e24",
    storageBucket: "to-do-list-28e24.appspot.com",
    messagingSenderId: "733449835196",
    appId: "1:733449835196:web:672682db0ec7f672a0b6b9",
    measurementId: "G-3T9NEJLEGJ"
});

const db = firebase.firestore();

// Function to add a task
function addTask() {
    const taskInput = document.querySelector(".form_input");
    const task = taskInput.value.trim();
    if (task !== "") {
        db.collection("tasks").add({
            task: task,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        taskInput.value = "";
    }
}

// Function to render tasks
function renderTasks(doc) {
    const taskList = document.querySelector("#task-list");
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.innerHTML = `
        <span>${doc.data().task}</span>
        <button onclick="deleteTask('${doc.id}')">Delete</button>
    `;
    taskList.appendChild(taskItem);
}

// Real-time listener for tasks
db.collection("tasks")
    .orderBy("timestamp", "desc")
    .onSnapshot(snapshot => {
        const changes = snapshot.docChanges();
        changes.forEach(change => {
            if (change.type === "added") {
                renderTasks(change.doc);
            }
        });
    });

// Function to delete a task
function deleteTask(id) {
    db.collection("tasks").doc(id).delete()
        .then(() => {
            console.log("Document successfully deleted!");
        })
        .catch((error) => {
            console.error("Error removing document: ", error);
        });
}
