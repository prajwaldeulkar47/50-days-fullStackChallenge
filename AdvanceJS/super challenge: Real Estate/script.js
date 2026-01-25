import placeholderPropertyObj from "./properties/placeholderPropertyObj.js"
import propertyForSaleArr from "./properties/propertyForSaleArr.js"

function getPropertyHtml(propertyArr = [placeholderPropertyObj]) {
  return propertyArr
    .map((property) => {
      const {
        propertyLocation,
        priceGBP,
        roomsM2,
        comment,
        image
      } = property;

      const totalRoomSizeM2 = roomsM2.reduce(
        (total, current) => total + current,
        0
      );

      return `
        <section class="card">
          <img src="./images/${image}" alt="Property in ${propertyLocation}">
          <div class="card-right">
            <h2>${propertyLocation}</h2>
            <h3>£${priceGBP.toLocaleString()}</h3>
            <p>${comment}</p>
            <h3>${totalRoomSizeM2} m&sup2;</h3>
          </div>
        </section>
      `;
    })
    .join("")
}

document.getElementById("container").innerHTML = (propertyForSaleArr.length) ? getPropertyHtml(propertyForSaleArr) : getPropertyHtml()