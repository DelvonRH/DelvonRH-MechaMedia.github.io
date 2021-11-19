const $ = document.querySelector.bind(document);

window.onload = function()
{
    // this.fetch(`https://api.themoviedb.org/3/movie/550?api_key=5b373cfa6121028619e63bf3cee17a18`)
    // .then(r => r.json())
    // .then(data => {
    //     Object.keys(data.)
    //     .forEach()
    // });

   let ul = document.querySelector('ul');
   let li = document.querySelectorAll('li');

   li.forEach(eL => {
       eL.addEventListener('click', function()
       {
           ul.querySelector('.active').classList.remove('active');

           eL.classList.add('active');
       });
   });
    
    // check if user is logged in
    onLogin( user => {
        if(user){
            //user just logged in
           
            // $('#loginDiv').style.display = 'none';
            // $('#signupDiv').style.display = 'none';
        }else{
            //user just logged out
            // $('#loginDiv').style.display = 'block';
            // $('#addCommentDiv').style.display = 'none';
        }
    });

    // //show comments
    // forEachComment( createComment );

    ////////////////////////////////
    // button and link functionality

    // $('#slattbratha').onclick = function()
    // {
    //     logout();
    // }

    // $('#signinBtn').onclick = function()
    // {
    //     login( $('#emailReg').value, $('#passwordReg').value )
    //     .catch( err => $('.error').innerText = err.message );
    // }

    $('#signupBtn').onclick = function()
    {
        console.log("Hi");
        signup( $('#email').value, $('#password').value )
        .catch( err => $('.error').innerText = err.message );
    }

    // $('#addCommentBtn').onclick = function()
    // {
    //     addComment( $('#newComment').value )
    //     .then( () => {
    //         createComment({comment: $('#newComment').value});
    //         $('#newComment').value = '';
    //     })
    //     .catch( err => $('.error').innerText = err.message )
    // }
}

// function createImage()
//     {
//         var img = document.createElement('img');
//         $('#img').appendChild(img);
//     }
    
// function createComment( commentDoc )
//     {
//         var div = document.createElement('div');
//         div.innerText = commentDoc.comment;
//         $('#comments').appendChild(div);
//         div.className = 'comment';
//     }
    
//     function showImage(event)
//     {
//         fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
//         .then(r =>r.json())
//         .then(data => {
//             $('#dog').src = data.message;
//         });
//     }