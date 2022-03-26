// Select Element

const book = document.querySelector('#book-name');
const author = document.querySelector('#author-name');
const year = document.querySelector('#published-year');
const submit = document.querySelector('.btn');
const list = document.querySelector('#book-list');

/*
const heading = document.querySelector('#heading');
heading.innerText = "I`m working";
*/
// Add Eventlistener


submit.addEventListener('click', function(e) {
    e.preventDefault();
    if(book.value == '' && author.value == '' && year.value == '') {

        // Warning Class Added
       
        book.classList.add('warning');
        author.classList.add('warning');
        year.classList.add('warning');


        // Warning Text Changed

        book.setAttribute("placeholder", "Write a book name ");
        author.setAttribute("placeholder", "Write an author name ");
        year.setAttribute("placeholder", "Write the published year");

        // Remove Warning 

        function removeWarning() {
            // Warning Class Removed

        book.classList.remove('warning');
        author.classList.remove('warning');
        year.classList.remove('warning');

        // Warning Text Removed

        book.setAttribute("placeholder", "");
        author.setAttribute("placeholder", "");
        year.setAttribute("placeholder", "");
        }

        setTimeout(removeWarning, 1024)


    } else if (book.value == '') {
        // For Individual Warning
        book.classList.add('warning');
        book.setAttribute("placeholder", "Write a book name ");

        function removeNameWarning(){
        book.classList.add('warning');
        book.setAttribute("placeholder", "");

        }
        setTimeout(removeNameWarning, 1024)

        // alert("Please fill book name");
    } else if (author.value == '') {
        // alert("Please fill author name");
        // For Individual Warning
        author.classList.add('warning');
        author.setAttribute("placeholder", "Write an author name ");

        function removeAuthorWarning() {
        author.classList.remove('warning');
        author.setAttribute("placeholder", "");
        
        }

        setTimeout(removeAuthorWarning, 1024)

    } else if (year.value == '') {
         // For Individual Warning
         year.classList.add('warning');
         year.setAttribute("placeholder", "Write published year ");

         function removeYearWarning() {
            year.classList.remove('warning');
            year.setAttribute("placeholder", "");
            
            }

            setTimeout(removeYearWarning, 1024)

    } else {


        // New Row Creation
    const newRow = document.createElement('tr');
    list.appendChild(newRow);


    //    New Book Column

    const newBookColumn = document.createElement('th');
    newRow.appendChild(newBookColumn);
    newBookColumn.innerText = book.value;

      //    New Author Column

      const newAuthorColumn = document.createElement('th');
      newRow.appendChild(newAuthorColumn);
      newAuthorColumn.innerText = author.value;

      //    New Year Column

      const newyearColumn = document.createElement('th');
      newRow.appendChild(newyearColumn);
      newyearColumn.innerText = year.value;


    }

    // Make input box empty after entry

    book.value = '';
    author.value = '';
    year.value = '';
    
})