const $ = document.querySelector.bind(document);

window.onload = function()
{
    // this.fetch(`https://api.themoviedb.org/3/movie/%d/videos?api_key=5b373cfa6121028619e63bf3cee17a18`)
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
}

function createImage()
    {
        var img = document.createElement('img');
        $('#img').appendChild(img);
    }
    
function createComment( commentDoc )
    {
        var div = document.createElement('div');
        div.innerText = commentDoc.comment;
        $('#comments').appendChild(div);
        div.className = 'comment';
    }
    
    function showImage(event)
    {
        fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(r =>r.json())
        .then(data => {
            $('#dog').src = data.message;
        });
    }