document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('writeAskForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the values from the form
        const title = document.getElementById('title').value;
        const category = document.getElementById('category').value;
        const description = document.getElementById('description').value;
        const imageUpload = document.getElementById('imageUpload').files[0]; // Get the image file

        // Type and Status
        let type = document.querySelector('input[name="type"]:checked')?.value;
        let status = document.querySelector('input[name="status"]:checked')?.value;

        // Logging values to console (for demonstration)
        console.log(`Title: ${title}, Category: ${category}, Type: ${type}, Status: ${status}, Description: ${description}`);
        if(imageUpload) console.log(`Image Filename: ${imageUpload.name}`);

        // Here you can add code to handle the form data, including the image file
        // For example, using FormData to append each field and send it via fetch API
    });
});

// Function to clear the form
function clearForm() {
    document.getElementById('writeAskForm').reset();
}
