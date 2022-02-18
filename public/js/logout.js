const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

 
    if (response.ok) {
      // If successfully logged out, redirect to the login page
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  };

//   if (response.ok) {
//     document.location.replace('/');
//   } else {
//     alert(response.statusText);
//   }
// };

document.querySelector('#logout').addEventListener('click', logout);
