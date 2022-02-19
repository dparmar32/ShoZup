const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const size = document.querySelector('#project-size').value.trim();
  const description = document.querySelector('#project-desc').value.trim();
  const price = document.querySelector('#project-price').value.trim();
// commit out this section
  if (name && size && description) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, size, description, price }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
  // if(brand && size && description){
  //   const response = await fetch(`/test/`, {
  //     method: 'POST',
  //     body: JSON.stringify({ brand, size, description }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // }
    
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
