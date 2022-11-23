let adviseId = document.getElementById('adviceNum');
let adviceTest = document.getElementById('advicetext');
let generateButton = document.getElementById('clickbtn');
const baseUrl = "https://api.adviceslip.com/advice";

const generateAdvice = async () => {

    try {
  
      const response = await fetch(baseUrl);
      let data = await response.json();
      console.log(data);
      adviseId.innerText =  `#${data.slip.id}`;
      adviceTest.innerText = `"${data.slip.advice}"`;
    } catch (error) {
  
      console.log(error);
      
    }
  
  };
  generateButton.addEventListener('click',generateAdvice);