let MainImg = document.getElementById("main_image");
let smallimage = document.getElementsByClassName("small_image");
let mix_color = document.getElementById("mixed_colour");
let white_all = document.getElementById("white_all");
let white_1 = document.getElementById("white_1");
let white_2 = document.getElementById("white_2");
let white_3 = document.getElementById("white_3");
let white_4 = document.getElementById("white_4");
let white_5 = document.getElementById("white_5");
let main_img = document.getElementById("main_image");

smallimage[0].onclick = function () {
  MainImg.src = smallimage[0].src;
};

smallimage[1].onclick = function () {
  MainImg.src = smallimage[1].src;
};

smallimage[2].onclick = function () {
  MainImg.src = smallimage[2].src;
};

smallimage[3].onclick = function () {
  MainImg.src = smallimage[3].src;
};

smallimage[4].onclick = function () {
  MainImg.src = smallimage[4].src;
};

white_all.addEventListener("click", () => {
  white_1.src = "./images/white-1.svg";
  white_2.src = "./images/white-2.svg";
  white_3.src = "./images/white-3.svg";
  white_4.src = "./images/white-4.svg";
  white_5.src = "./images/white-5.svg";
  main_img.src = "./images/white-1.svg";
});

mix_color.addEventListener("click", () => {
  white_1.src = "./images/red-1.svg";
  white_2.src = "./images/red-2.svg";
  white_3.src = "./images/red-3.svg";
  white_4.src = "./images/red-4.svg";
  white_5.src = "./images/red-5.svg";
  main_img.src = "./images/red-1.svg";
});
