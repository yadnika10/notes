let allNotes = [];

  function AddData(e) {
    e.preventDefault();
    let input = document.querySelector(".get-note").value;
    document.querySelector(".get-note").value = "";
    if (input === "") {
      alert("Enter some text");
    } else {
      allNotes.push(input);
      document.querySelector(".notes-list").innerHTML = "";
      displayData();
    }
  }

  function displayData() {
    const color = document.querySelector('.get-color').value
    allNotes.map((ele) => {
      const card = document.createElement("div");
      card.style.backgroundColor=color
      card.addEventListener("click", del);
      card.classList.add("card");
      card.innerHTML = `<p>${ele}</p>
          <button >delete</button>`;
      document.querySelector(".notes-list").appendChild(card);
    });
  }
  document.querySelector("#add-btn").addEventListener("click", AddData);
  const color = document.querySelector('.get-color').addEventListener("change", changeColor)
  function changeColor(e) {
    e.preventDefault()
    let card= document.querySelectorAll(".card")
    card.forEach((item)=>item.style.backgroundColor=e.target.value)
  }

  function del(e) {
    e.preventDefault();
    if (e.target.tagName === "BUTTON") {
      let deldata=this.firstChild.innerText;
      let updatedData=allNotes.filter((ele)=>ele!==deldata)
      allNotes=updatedData
      document.querySelector(".notes-list").innerText="";
      displayData()
    }
  }

