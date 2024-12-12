document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    const fileInput = document.getElementById('fileInput');
    const messageDiv = document.getElementById('message');

    // Checks if a file is selected
    if (fileInput.files.length === 0) {
        messageDiv.textContent = 'Please select a file.';
        return;
    }

    const file = fileInput.files[0];

    // Validates the file type
    if (!['image/png', 'image/jpeg'].includes(file.type)) {
        messageDiv.textContent = 'Please upload a valid PNG or JPG image.';
        return;
    }
    const reader = new FileReader();

    reader.onload = function(e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.style.maxWidth = '350px';
        messageDiv.innerHTML = ''; //clears
        messageDiv.appendChild(img);

        // Here you should send the image to our server

        messageDiv.textContent += ' File ready for upload!';
    };

    reader.readAsDataURL(file);
});

function uploadFile(file) {
   const formData = new FormData();
   formData.append('file', file);

   fetch('/upload-endpoint', {
       // Replaces with the server endpoint

       method: 'POST',
       body: formData,
   })
   .then(response => response.json())
   .then(data => {
       console.log(data);
       document.getElementById('message').textContent += ' Upload successful!';
   })
   .catch(error => {
       console.error('Error:', error);
       document.getElementById('message').textContent += ' Upload failed.';
   });
}
