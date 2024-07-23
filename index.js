var btn = document.querySelector(".btn");
var result = document.querySelector(".result");
btn.addEventListener("click", () => {
  var input = document.querySelector(".input").value;
  let data = fetch(
    `https://restcountries.com/v3.1/name/${input}?fullText=true`
  );
  data
    .then((umar) => {
      return umar.json();
    })
    .then((item) => {
      console.log(item);
      result.innerHTML = `
      <div class="country">
          <h2>
      Country : 
      </h2>
        <img src=${item[0].flags.png} alt="">

      </div>
      <div class = "capital">
      <h2>
      Capital : 
      </h2>
      ${item[0].capital}
      </div>
      <div class="continents">
        <h2>
            Continent : 
        </h2>
        ${item[0].continents}
          </div>
          <div class="currency">
          <h2>
          Currency : 
          </h2>
          ${Object.keys(item[0].currencies)[0]}
          </div>
      `;
    })
    .catch((err) => {
      console.log(err);
    });
});
