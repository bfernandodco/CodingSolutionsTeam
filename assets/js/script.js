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
        currentSection = 'questions1';
        hideElement('dataForm');
        showElement('questions1');
        setButtonText('nextButton', 'Próximo');
        showElement(`backButton${currentSection}`);
        smoothScrollTo('questions1');
      } else if (currentSection === 'questions1') {
        currentSection = 'questions2';
        hideElement('questions1');
        showElement('questions2');
        showElement(`backButton${currentSection}`);
        smoothScrollTo('questions2');
      } else if (currentSection === 'questions2') {
        currentSection = 'questions3';
        hideElement('questions2');
        showElement('questions3');
        setButtonText('nextButton', 'Próximo');
        showElement(`backButton${currentSection}`);
        smoothScrollTo('questions3');
      } else if (currentSection === 'questions3') {
        currentSection = 'questions4';
        hideElement('questions3');
        showElement('questions4');
        setButtonText('nextButton', 'Próximo');
        showElement(`backButton${currentSection}`);
        smoothScrollTo('questions4');
      } else {
        hideElement('questions4');
        showElement('submitSection');
        showFinishButton();  // Mostra o botão "Finalizar"
      }
    }
    
    function showPreviousSection(sectionId) {
      hideElement(sectionId);
      currentSection = 'questions' + (parseInt(sectionId.slice(-1)) - 1);
      if (currentSection === 'questions0') {
        currentSection = 'form';
        showElement('dataForm');
        hideElement('questions1');
      } else {
        showElement(currentSection);
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
    $('#telefone').inputmask('(99) 99999-9999');
  });


  // Backend(JAVA)

  function submitData() {
    // Obtenha os dados do formulário (exemplo)
    const formData = {
      question1: $('input[name="question1"]:checked').val(),
      question2: $('input[name="question2"]:checked').val(),
      // Adicione as outras perguntas aqui
    };
  
    // Exemplo de URL para enviar os dados para o backend (ajuste conforme necessário)
    const url = 'http://exemplo.com/enviar-dados';
  
    // Envia os dados para o backend usando AJAX
    $.ajax({
      type: 'POST',
      url: url,
      data: formData,
      success: function(response) {
        // Se a requisição for bem-sucedida, exiba a mensagem de sucesso
        $('#successMessage').show();
      },
      error: function(error) {
        console.error('Erro ao enviar os dados:', error);
      }
    });
  }