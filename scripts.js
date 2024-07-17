document.addEventListener('DOMContentLoaded', function() {
    // Any additional code you might have can go here
});

function previewFeedback() {
    document.getElementById('preview-name').innerText = document.getElementById('name').value;
    document.getElementById('preview-email').innerText = document.getElementById('email').value;
    
    let rating = document.querySelector('input[name="rating"]:checked');
    document.getElementById('preview-rating').innerText = rating ? rating.value : '';

    document.getElementById('preview-comments').innerText = document.getElementById('additional-questions').value;
    
    document.getElementById('feedback-form').style.display = 'none';
    document.getElementById('preview').style.display = 'block';
}

function editFeedback() {
    document.getElementById('feedback-form').style.display = 'block';
    document.getElementById('preview').style.display = 'none';
}
