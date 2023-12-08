
let out = document.querySelector("#out");
let table = document.querySelector("#table");
let input = document.querySelector("input");

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const fullDate = `${day}.${month}.${year}`;

let alert = document.querySelector("#alert");


let obj = [
  {
    index: 0,
    outMoney: 0,
    cashBack: 0,
    date: fullDate,
  },
];
out.addEventListener(
  "click",
  (let = () => {
    if (input.value == "") {
      alert.innerHTML = `<div class="alert alert-danger text-center" role="alert">
      Xərclənə Biləcək Bir Məbləğ Daxil Edilməyib
      </div>`;
      input.value = ""
    }
    else if (+input.value === "e") {
      alert.innerHTML = `<div class="alert alert-danger text-center" role="alert">
      Yanlış Daxiletmə
      </div>`;
      input.value = ""
    } 
    else if (+input.value < 0) {
      alert.innerHTML = `<div class="alert alert-danger text-center" role="alert">
      Yanlış Daxiletmə
      </div>`;
      input.value = ""
    } 
    else {
      alert.innerHTML = ``;
      obj.map((let = (item) => {
            item.index = item.index + 1;
            item.cashBack = (input.value * 3) / 100;
            item.outMoney = input.value;
            input.value = "";
            table.innerHTML += ` <tr>
          <th scope="row">${item.index}</th>
          <td class="text-black">-${item.outMoney}₼</td>
          <td class="text-danger">+${item.cashBack}₼</td>
          <td class="text-black">${fullDate}</td>
        </tr>`;
          })
        )
        .join("");
    }
  })
);