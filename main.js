  // get the form elements
  var dvdForm = document.getElementById('dvd-form');
  var furnitureForm = document.getElementById('furniture-form');
  var bookForm = document.getElementById('book-form');

  // hide all form elements initially
  dvdForm.style.display = 'none';
  furnitureForm.style.display = 'none';
  bookForm.style.display = 'none';

  // add an event listener to the select element
  var selectElement = document.getElementById('type');
  selectElement.addEventListener('change', function() {
    // hide all form elements first
    dvdForm.style.display = 'none';
    furnitureForm.style.display = 'none';
    bookForm.style.display = 'none';

    // show the relevant form element based on the selected option
    var selectedOption = selectElement.value;
    if (selectedOption === 'dvd') {
      dvdForm.style.display = 'block';
    } else if (selectedOption === 'furniture') {
      furnitureForm.style.display = 'block';
    } else if (selectedOption === 'book') {
      bookForm.style.display = 'block';
    }
  });