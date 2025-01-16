// Load content from JSON
fetch('scripts/content.json')
    .then(response => response.json())
    .then(data => {
        // Populate the intro section
        document.getElementById('intro-name').innerText = `Hi, I'm ${data.intro.name}`;
        document.getElementById('intro-blurb').innerText = data.intro.blurb;
        document.getElementById('intro-img').src = data.intro.image;

        // Populate the projects section
        const projectsContainer = document.getElementById('projects-container');
        data.projects.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('project');
            projectDiv.innerHTML = `
                <h3>${project.title}</h3>
                <img src="${project.image}" alt="${project.title}">
                <p>${project.description}</p>
                <button onclick="alert('${project.details}')">See More</button>
            `;
            projectsContainer.appendChild(projectDiv);
        });
    })
    .catch(error => console.error('Error loading content:', error));


    