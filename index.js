
function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.preventDefault();
    console.log('running drag');
}
  
function drop(ev) {
    ev.preventDefault();
    console.log('running drop');
}

function handleFormSubmit(event) {
    event.preventDefault();
    if (selectedFile) {
        const formData = new FormData();
        formData.append('video', selectedFile);
        // You can now send the form data to the server using an AJAX request,
        // or submit the form to the server using a regular form submit.
        // Here's an example of how to send the data using an AJAX request:
        fetch(`${process.env.REACT_APP_API}/upload`, {
        method: 'POST',
        body: formData,
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the server
            const filePath = data.path;
            console.log(filePath);
            onReceiveVideo(filePath);
            // Use the file path as needed in your frontend code
        })
        .catch(error => {
            console.error('Error uploading video:', error);
        });

    }
}

console.log(`${process.env.REACT_APP_API}`);