console.log("Creating product card for item", i);
            var product = document.createElement("div");
            product.className = "bg-white flex flex-row w-11/12 p-5 border border-gray-200";
            cards.appendChild(product);
            var pic = document.createElement("div");
            pic.className = "py-5 flex items-center justify-center h-56 overflow-hidden";
            product.appendChild(pic);
            var img = document.createElement("img");
            img.src = data[i].image;
            img.className = "w-44";
            pic.appendChild(img);
            var details = document.createElement("div");
            details.className = "text-center w-full h-56 flex flex-col justify-around";
            product.appendChild(details);
            var name = document.createElement("h3");
            details.appendChild(name);
            name.className="";
            name.innerHTML = data[i].title;
            var cost = document.createElement("h4");
            details.appendChild(cost);
            cost.className = "text-gray-600";
            cost.innerHTML = "$" + data[i].price;
            var btn = document.createElement("div");
            btn.className = "w-full flex flex-row justify-evenly";
            details.appendChild(btn);
            var edit = document.createElement("button");
            edit.className = "bg-yellow-200 w-20 h-7 hover:bg-yellow-400";
            edit.innerHTML = "Edit";
            btn.appendChild(edit);
            var dlt = document.createElement("button");
            dlt.className = "bg-red-500 w-20 h-7 hover:bg-red-800 text-white";
            dlt.innerHTML = "Delete";
            btn.appendChild(dlt);
            dlt.addEventListener("click" , confirm);