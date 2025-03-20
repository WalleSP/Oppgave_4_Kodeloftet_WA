console.log('Hello!');

/*

1. Make HTML content. Input, buttons etc.
2. Use querySelector to transfer buttons and display to js.
3. Add empty list: toDoList. 
4. Make a function that displays list when function is called.
5. Add button in the function that removes items.
6. Add eventlistener for each of the threeButtons.
7. Push the input to toDoList and display function displayList.
8. Use classlist.add for css styling.

*/

const pushButton = document.querySelector('#pushButton');
const displayOutput = document.querySelector('#displayOutput');
const pop = document.querySelector('#pop');

const toDoList = [];

// Making a function to display list
function displayList() {
  displayOutput.innerHTML = ''; 

  toDoList.forEach((item, index) => {
    const listItem = document.createElement('li'); 
    listItem.textContent = item;
    displayOutput.appendChild(listItem);
    listItem.classList.add('listItem')

    // Delete button for each li
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Fjern';
    // CSS for deleteButton
    deleteButton.classList.add('list-button');
    

   // Delete task when button is clicked
    deleteButton.addEventListener('click', function () {
    toDoList.splice(index, 1);
    displayList(); 
  });
  
  listItem.appendChild(deleteButton);
  displayOutput.appendChild(listItem);

  });
};

// First button
pushButton.addEventListener('click', function () {
  const userInput = document.querySelector('#userInput').value;
  console.log(userInput);

  // Only adds item to list if input field IS NOT empty
  if (userInput.trim() !== '') { 
    toDoList.push(userInput);
    console.log(toDoList);
    displayList();
  };
  // Removes the string in input field
  document.querySelector('#userInput').value = '';
  
});

// Remove button
const popButton = document.querySelector('#popButton');

popButton.addEventListener('click', function () {
  toDoList.pop();
  console.log(toDoList);
  displayList()
});

// Remove all button
const trashButton = document.querySelector('#trashButton');

trashButton.addEventListener('click', function () {
  toDoList.length = 0;
  console.log(toDoList);
  displayList()
});
