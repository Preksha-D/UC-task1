// import Swal from 'sweetalert2';
let add = document.getElementById("add");

let input_form = document.getElementById("input-form");
let input_save = document.getElementById("input-save");
let input_discard = document.getElementById("input-discard");

let input_id = document.getElementById("input-id");
let input_title = document.getElementById("input-title");
let input_price = document.getElementById("input-price");
let input_img = document.getElementById("input-img");

let edit_form = document.getElementById("edit-form");
let edit_save = document.getElementById("edit-save");
let edit_discard = document.getElementById("edit-discard");

let edit_id = document.getElementById("edit-id");
let edit_title = document.getElementById("edit-title");
let edit_price = document.getElementById("edit-price");
let edit_img = document.getElementById("edit-img");

let new_id;
let new_title;
let new_price;
let new_image;

open = (form) =>{
    form.classList.remove("hidden");
    form.classList.remove("opacity-0");
    form.classList.add("opacity-1");
    form.classList.add("flex");
} 

close = (form) =>{
    form.classList.remove("opacity-1");
    form.classList.remove("flex");
    form.classList.add("hidden");
    form.classList.add("opacity-0");
}

add.addEventListener("click" , ()=>{
    open(input_form);
    input_id.value="";
    input_title.value="";
    input_img.value="";
    input_price.value="";
})

input_save.addEventListener("click", ()=>{
    new_id = input_id.value;
    new_title = input_title.value;
    new_price = input_price.value;
    new_image = input_img.value;
    createProduct(new_id, new_title, new_price, new_image);
    close(input_form);
})

input_discard.addEventListener("click", ()=>{
    close(input_form);
})

edit_save.addEventListener("click", ()=>{
    new_id = edit_id.value;
    new_title = edit_title.value;
    new_price = edit_price.value;
    new_image = edit_img.value;
    close(edit_form);
})

edit_discard.addEventListener("click", ()=>{
    close(edit_form);
})

async function product() {
    try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        if (!response.ok) {
            throw new Error(`Error`);
        }
        var data = await response.json();
        var cards = document.getElementById("cards");
        cards.innerHTML="";
        data.forEach((pdata) => {
            createProduct(pdata.id, pdata.title, pdata.price, pdata.image);
        }
    )}
    catch (error) {
        console.error(error);
    }
}
product();

createProduct = (id, title, price, image) =>{
    var product = document.createElement("div");
            product.className = "bg-white flex flex-row w-11/12 p-5 border border-gray-200 rounded overflow-hidden";
            cards.appendChild(product);
            product.id = id;
            var pic = document.createElement("div");
            pic.className = "py-5 flex items-center justify-center h-56";
            product.appendChild(pic);
            var img = document.createElement("img");
            img.src = image;
            img.className = "w-44";
            pic.appendChild(img);
            var details = document.createElement("div");
            details.className = "text-center w-full h-56 flex flex-col justify-around";
            product.appendChild(details);
            var name = document.createElement("h3");
            details.appendChild(name);
            name.className="text-xl";
            name.innerHTML = title;
            var cost = document.createElement("h4");
            details.appendChild(cost);
            cost.className = "text-gray-600";
            cost.innerHTML = "$ " + price;
            var btn = document.createElement("div");
            btn.className = "w-full flex flex-row justify-evenly";
            details.appendChild(btn);
            var edit = document.createElement("button");
            edit.className = "bg-yellow-200 w-20 h-7 hover:bg-yellow-400 rounded";
            edit.innerHTML = "Edit";
            btn.appendChild(edit);
            edit.addEventListener("click" , ()=>{
              open(edit_form);
              edit_id.value = id;
              edit_title.value = title;
              edit_img.value = image;
              edit_price.value= price;
            });
            edit_save.addEventListener("click", ()=>{
                new_id = edit_id.value;
                new_title = edit_title.value;
                new_price = edit_price.value;
                new_image = edit_img.value;
                // img.src = new_image;
                // name.innerHTML = new_title;
                // cost.innerHTML = "$ " + new_price;
                close(edit_form);
            })
            var dlt = document.createElement("button");
            dlt.className = "bg-red-500 w-20 h-7 hover:bg-red-800 text-white rounded";
            dlt.innerHTML = "Delete";
            btn.appendChild(dlt);
            dlt.addEventListener("click" , ()=>{
              deleteProduct(id, product);
            });
}

edit_product = (id, title, price, image) =>{

}

async function deleteProduct (id, product) {
  try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
          method: 'DELETE'
      });
      cards.removeChild(product);
      const data = await response.json();
      console.log(data); 
  } catch (error) {
      console.error(error);
  }
}

// let confirm = () =>{
//     Swal.fire({
//         title: "Are you sure?",
//         text: "You won't be able to revert this!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, delete it!"
//       }).then((result) => {
//         if (result.isConfirmed) {
//           Swal.fire({
//             title: "Deleted!",
//             text: "Your file has been deleted.",
//             icon: "success"
//           });
//         }
//       });
// }
