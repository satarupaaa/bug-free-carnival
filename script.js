function editName() {
    const currentName = document.getElementById('name');
    const newName = prompt("Please Enter Your Name", currentName.value);
    if (newName) {
      currentName.value = newName;
    }
  }
  function editEmail() {
    let currentName = document.getElementById('email').value;
    let newName = prompt("Please enter your new email-id:", currentName);
    if (newName) {
      document.getElementById('email').value = newName;
    }
  }
  function editPhone() {
    let currentName = document.getElementById('phone').value;
    let newName = prompt("Please enter your new phone-no:", currentName);
    if (newName) {
      document.getElementById('phone').value = newName;
    }
  }
  function editDob() {
    let currentName = document.getElementById('dob').value;
    let newName = prompt("Please enter your new dob:", currentName);
    if (newName) {
      document.getElementById('dob').value = newName;
    }
  }
  function save(){
    window.alert("Changes have been updated");
  }
  function editImage() {
    prompt("Please enter your image type:");
  }
  function cancel(){
    alert('Changes canceled.');
  }