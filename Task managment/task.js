firebase.initializeApp({
    apiKey: "AIzaSyAO6jwfNsO4d6QkJ55Ou5SS0vdmlThaygU",
    authDomain: "plp-web-f1aa2.firebaseapp.com",
    projectId: "plp-web-f1aa2",
    storageBucket: "plp-web-f1aa2.appspot.com",
    messagingSenderId: "5250978089",
    appId: "1:5250978089:web:e1f6f02d51ec4cb8196738"
});

const db = firebase.firestore();

/* ADD TASK AND STORE THEM IN OUR DATABASE */
function addTask() {
    const taskInput = document.getElementById("task-input");
    const task = taskInput.value.trim();
    if (task !== "") {
        db.collection("tasks").add({
            task: task,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(() => {
            taskInput.value = "";
            console.log("Task added");
        })
        .catch((error) => {
            console.error("Error adding task: ", error);
        });
    }
}

// Function to render tasks
function renderTask(doc) {
    const taskList = document.getElementById("task-list");
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.innerHTML = `
        <span>${doc.data().task}</span>
        <button onclick="deleteTask('${doc.id}')">Delete</button>
    `;
    taskList.appendChild(taskItem);
}

// Real-time listener for tasks on the database listens out for change 
// and adds the task to the DOM
db.collection("tasks")
    .orderBy("timestamp", "desc")
    .onSnapshot(snapshot => {
        const changes = snapshot.docChanges();
        changes.forEach(change => {
            if (change.type === "added") {
                renderTask(change.doc);
            }
        });
    });

// Function to delete a task
function deleteTask(id) {
     db.collection("tasks").doc(id).delete()
        .then(() => {
            console.log("Task deleted successfully");
        })
        .catch((error) => {
            console.error("Error deleting task: ", error);
        });
}
