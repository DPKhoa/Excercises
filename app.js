var courseAPI = 'http://localhost:3000/courses'

function start(){
    getCourse(renderCourses);
    handleCreateForm();
}


start()

//functions
function getCourse(callback){
    fetch(courseAPI)
    .then(function(response){
        return response.json();
    })
    .then(callback);
}

function createCourse(data,callback){
    var options ={
        method:"POST",
        body: JSON.stringify(data)
    }
    fetch(courseAPI, options)
        .then(function(response){
            response.json();
        })
        .then(callback);
}
function renderCourses(courses){
    var listCoursesBlock = document.querySelector('#list-courses');
    var html = courses.map(function(course){
        return `
            <li>
                <h4>${course.name}</h4>
                <p>${course.description}</p>

            </li>
        `;
    });
    listCoursesBlock.innerHTML =html.join('');
}

function handleCreateForm(){
    var createBtn = document.querySelector('#create');
    createBtn.onclick = function(){
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;

        var formData = {
            name: name,
            description:description
        }
        createCourse(formData);
    }
} 