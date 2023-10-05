//Menu 
function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  let icon = document.querySelector('.mobile-menu-icon i');

  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
  } else {
      menuMobile.classList.add('open');
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
  }
}

//Forms e questões
let currentSection = 'form';

function showNextSection() {
  if (currentSection === 'form') {
      const formInputs = document.querySelectorAll('#dataForm input[required]');
      const answered = Array.from(formInputs).every(input => input.value !== '');
      if (answered) {
          currentSection = 'questions1';
          hideElement('dataForm');
          showElement('questions1');
          setButtonText('nextButton', 'Próximo');
          showElement(`backButton${currentSection}`);
          smoothScrollTo('questions1');
      } else {
          alert('Por favor, responda a todas as perguntas.');
      }
  } else {
      const currentQuestionInputs = document.querySelectorAll(`#${currentSection} input[type="radio"]:checked`);
      const requiredQuestions = document.querySelectorAll(`#${currentSection} input[type="radio"][required]`);

      if (currentQuestionInputs.length !== requiredQuestions.length) {
          alert('Por favor, responda a todas as perguntas.');
          return;
      }

      const sectionNumber = parseInt(currentSection.slice(-1));
      if (sectionNumber < 4) {
          currentSection = `questions${sectionNumber + 1}`;
          hideElement(`questions${sectionNumber}`);
          showElement(`questions${sectionNumber + 1}`);
          setButtonText('nextButton', 'Próximo');
          showElement(`backButton${currentSection}`);
          smoothScrollTo(`questions${sectionNumber + 1}`);
      } else {
          hideElement('questions4');
          showElement('submitSection');
          showFinishButton();  // Mostra o botão "Finalizar"
          alert('Dados enviados com sucesso!');
      }
  }
}

function showPreviousSection(sectionId) {
  hideElement(sectionId);
  const sectionNumber = parseInt(sectionId.slice(-1));
  if (sectionNumber === 1) {
      currentSection = 'form';
      showElement('dataForm');
  } else {
      currentSection = `questions${sectionNumber - 1}`;
      showElement(`questions${sectionNumber - 1}`);
  }
  showElement(`backButton${currentSection}`);
  setButtonText('nextButton', 'Próximo');
  smoothScrollTo(currentSection);
}

function hideElement(id) {
  const element = document.getElementById(id);
  if (element) {
      element.classList.remove('show');
      setTimeout(() => {
          element.style.display = 'none';
      }, 300);
  }
}

function showElement(id) {
  const element = document.getElementById(id);
  if (element) {
      element.style.display = 'block';
      setTimeout(() => {
          element.classList.add('show');
      }, 0);
  }
}

function setButtonText(id, text) {
  const button = document.getElementById(id);
  if (button) {
      button.innerText = text;
  }
}

function smoothScrollTo(id) {
  const element = document.getElementById(id);
  if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
  }
}

function validateCurrentSection() {
  const currentQuestionInputs = document.querySelectorAll(`#${currentSection} input[type="radio"]:checked`);
  const requiredQuestions = document.querySelectorAll(`#${currentSection} input[type="radio"][required]`);
  return currentQuestionInputs.length === requiredQuestions.length;
}

function displaySuccessMessage() {
  const successMessage = document.createElement('div');
  successMessage.innerHTML = '<h2>Dados coletados com sucesso!</h2>';
  document.getElementById('submitSection').appendChild(successMessage);
}

function showFinishButton() {
  document.getElementById('finishButton').style.display = 'block';
}

// Mascara telefone
$(document).ready(function () {
  $('#phone').inputmask('(99) 99999-9999');
});

// Backend(JAVA)
function submitData() {
  const currentQuestionInputs = document.querySelectorAll(`#${currentSection} input[type="radio"]:checked`);
  const requiredQuestions = document.querySelectorAll(`#${currentSection} input[type="radio"][required]`);

  if (currentQuestionInputs.length !== requiredQuestions.length) {
      alert('Por favor, responda a todas as perguntas.');
      return;
  }

  const formData = {
      question1: $('input[name="question1"]:checked').val(),
      question2: $('input[name="question2"]:checked').val(),
      question3: $('input[name="question3"]:checked').val(),
      question4: $('input[name="question4"]:checked').val(),
      question5: $('input[name="question5"]:checked').val(),
      question6: $('input[name="question6"]:checked').val(),
      question7: $('input[name="question7"]:checked').val(),
      question8: $('input[name="question8"]:checked').val(),
      question9: $('input[name="question9"]:checked').val(),
      question10: $('input[name="question10"]:checked').val(),
      question11: $('input[name="question11"]:checked').val()
  };

  // Exemplo de URL para enviar os dados para o backend (ajuste conforme necessário)
  const url = 'http://exemplo.com/enviar-dados';

  // Envia os dados para o backend usando AJAX
  $.ajax({
      type: 'POST',
      url: url,
      data: formData,
      success: function (response) {
          // Se a requisição for bem-sucedida, exiba a mensagem de sucesso
          displaySuccessMessage();
      },
      error: function (error) {
          console.error('Erro ao enviar os dados:', error);
      }
  });
}


   const tristeRadio = document.getElementById('triste-radio');
   const novoInput = document.getElementById('quest1');
   tristeRadio.addEventListener('change', function () {
       if (tristeRadio.checked) {
           novoInput.style.display = 'block';
       } else {
           novoInput.style.display = 'none';
       }
   });


   const quest2 = document.getElementById('irritado');
   const newQuest2 = document.getElementById('quest2');
   quest2.addEventListener('change', function () {
       if (quest2.checked) {
          newQuest2.style.display = 'block';
       } else {
          newQuest2.style.display = 'none';
       }
   });


   const quest3 = document.getElementById('sono');
   const newQuest3 = document.getElementById('quest3');
   quest3.addEventListener('change', function () {
       if (quest3.checked) {
          newQuest3.style.display = 'block';
       } else {
          newQuest3.style.display = 'none';
       }
   });