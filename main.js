let v1="success";
let v2="warning";
let v3="danger";

let foods = [
    {
        name: "C",
        img: "https://raw.githubusercontent.com/github/explore/f3e22f0dca2be955676bc70d6214b95b13354ee8/topics/c/c.png",
    }, 
     {
      name: "PYTHON",
      img: "https://qph.cf2.quoracdn.net/main-qimg-dca3cd734f5eb8c4854f00af58e534ff",
  },
  {
    name: "JAVASCRIP[T",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
},
{
  name: "CPP",
  img: "https://www.freeiconspng.com/uploads/c--logo-icon-0.png",
},
{
  name: "HTML5",
  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
},
{
  name: "CSS3",
  img: "data:image/png;base64,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",
},
{
  name: "BOOTSTRAP 5.3",
  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png",
},
{
  name: "TAILWINDCSS",
  img: "https://logowik.com/content/uploads/images/tailwind-css7675.logowik.com.webp",
},
      
];


function showFoods(data) {

    let hs = ``;
    for (i = 0; i < data.length; i++) {
        hs = hs + `
          

<div class="mx-auto col-xs-12 col-sm-6 col-md-3 my-5">

        <div class="card bg-black mx-auto w-50">


          <img
            src="${data[i].img}"
            class="card-img" alt="${data[i].name}">
          

        </div>
    
      </div>
            
          `;
    }
    document.getElementById("con").innerHTML = hs;

}

showFoods(foods);



