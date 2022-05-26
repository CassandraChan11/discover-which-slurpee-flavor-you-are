let points = 0;
let answered = 0;
const resultContainer = document.querySelector(".resultContainer");
const resultText = document.querySelector(".resultExplanation");
let finalResult = "";
const image = document.querySelector('.imageResult');


function choose(n, cat) {
    answered++;
    points += n;

    const buttons = document.querySelectorAll("#" + cat);
    for (let index = 0; index < buttons.length; index++) {
        buttons[index].disabled = true;
    }
    if (answered === 8) {
        resultContainer.style.display = "block";

        if (points > 22) {
            finalResult = "A Blue Raspberry slushie!!";
            image.src = "https://foodlocate.com/storage/media/dishes_main/1951192/44ada4ea-7dfb-4497-b753-2c9fe717564b-retina-large-jpeg.jpeg";
        } else if (points > 15 && points < 22) {
            finalResult = "A Lime slushie!!";
            image.src = "https://www.dairyqueen.com/dA/43034db16c/misty-slush-lemon-lime.png";
        } else if (points > 13 && points < 15) {
            finalResult = "A Pink Lemonade slushie!!";
            image.src = "https://www.lifeloveliz.com/wp-content/uploads/2015/04/Raspberry-Lemonade-Slushie.jpg";
        } else if (points > 8 && points < 13) {
            finalResult = "A Strawberry slushie!!";
            image.src = "https://www.cravingsofalunatic.com/wp-content/uploads/2016/06/Boozy-Strawberry-Watermelon-Slushies-20.jpg";
        } else if (points < 9) {
            finalResult = "An everything slushie!!";
            image.src = "https://images.squarespace-cdn.com/content/v1/53e3c7ece4b04d937f330903/1615987667141-BNEZWRAB9QQ6ATG1G04G/rainbow-slushie-recipe.jpeg?format=1000w";
        }

        resultText.textContent = finalResult;
    }
}