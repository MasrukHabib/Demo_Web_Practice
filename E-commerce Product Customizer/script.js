document.addEventListener("DOMContentLoaded", function () {
  const productElement = document.getElementById("product");
  const customTextElement = document.getElementById("customText");
  const customImageElement = document.getElementById("customImage");
  const colorPicker = document.getElementById("color");
  const textInput = document.getElementById("text");
  const textColorPicker = document.getElementById("textColor");
  const textFontSelect = document.getElementById("textFont");
  const imageInput = document.getElementById("image");
  const imagePositionSlider = document.getElementById("imagePosition");
  const resetButton = document.getElementById("reset");
  const addToCartButton = document.getElementById("addToCart");
  const cartItems = document.getElementById("cartItems");

  colorPicker.addEventListener("input", function () {
    productElement.style.backgroundColor = colorPicker.value;
  });

  textInput.addEventListener("input", function () {
    customTextElement.textContent = textInput.value;
  });

  textColorPicker.addEventListener("input", function () {
    customTextElement.style.color = textColorPicker.value;
  });

  textFontSelect.addEventListener("change", function () {
    customTextElement.style.fontFamily = textFontSelect.value;
  });

  imageInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      customImageElement.src = e.target.result;
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  });

  imagePositionSlider.addEventListener("input", function () {
    const position = imagePositionSlider.value;
    customImageElement.style.transform = `translateY(${position - 50}%)`;
    customTextElement.style.transform = `translateY(${position - 50}%)`;
  });

  resetButton.addEventListener("click", function () {
    productElement.style.backgroundColor = "#ffffff";
    customTextElement.textContent = "";
    customImageElement.src = "";
    textColorPicker.value = "#000000";
    textFontSelect.value = "Arial";
    imagePositionSlider.value = "50";
    colorPicker.value = "#ffffff";
    textInput.value = "";
    imageInput.value = "";
  });

  addToCartButton.addEventListener("click", function () {
    const cartItem = document.createElement("li");
    cartItem.textContent = `Custom T-Shirt - ${textInput.value}`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function () {
      cartItems.removeChild(cartItem);
    });

    cartItem.appendChild(removeButton);
    cartItems.appendChild(cartItem);

    resetButton.click();
  });
});
