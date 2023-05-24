let selectedFile;

function dropHandler(ev) {
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
    if (ev.dataTransfer.files) {
        if(ev.dataTransfer.files[0].type == 'video/mp4'){
            selectedFile = ev.dataTransfer.files[0];
            document.getElementById('content-exist-info').innerHTML = selectedFile.name + ' has been added.';
        }
    }
}

function dragOverHandler(ev) {
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
}


function handleFormSubmit(ev) {
    ev.preventDefault();
    if (selectedFile) {
        // const formData = new FormData();
        // formData.append('video', selectedFile);
        // fetch(`${process.env.REACT_APP_API}/upload`, {
        // method: 'POST',
        // body: formData,
        // })
        // .then(response => response.json())
        // .then(data => {
        //     // Handle the response from the server
        //     const filePath = data.path;
        //     console.log(filePath);
        //     onReceiveVideo(filePath);
        //     // Use the file path as needed in your frontend code
        // })
        // .catch(error => {
        //     console.error('Error uploading video:', error);
        // });

        document.getElementById('main-content').classList.add('hidden');
        document.getElementById('video-content').classList.remove('hidden');

    }
}
