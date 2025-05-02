document.addEventListener('DOMContentLoaded', function() {
    const counterContainers = document.querySelectorAll('.push-button');
    
    if (counterContainers.length === 0) {
        console.warn("Контейнеры счётчиков не найдены!");
        return;
    }

    counterContainers.forEach(container => {
        const minusBtn = container.querySelector('.minus-push');
        const plusBtn = container.querySelector('.plus-push');
        const countDisplay = container.querySelector('.count-push');
        const buyBtn = container.querySelector('.push-active');
        
        if (!minusBtn || !plusBtn || !countDisplay || !buyBtn) {
            console.warn("Не все элементы счётчика найдены в контейнере", container);
            return;
        }

        let count = parseInt(countDisplay.textContent) || 1;
        const minCount = 1;
        const maxCount = 10;

        function updateCounter() {
            countDisplay.textContent = count;
            minusBtn.disabled = count <= minCount;
            plusBtn.disabled = count >= maxCount;
            
            // Обновляем текст кнопки "Купить" с количеством
            buyBtn.textContent = count === 1 ? 'Купить' : `Купить (${count})`;
        }

        minusBtn.addEventListener('click', () => {
            if (count > minCount) {
                count--;
                updateCounter();
            }
        });

        plusBtn.addEventListener('click', () => {
            if (count < maxCount) {
                count++;
                updateCounter();
            }
        });

        // Инициализация при загрузке
        updateCounter();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const allSwitches = document.querySelectorAll('.toggle-switch');
    
    allSwitches.forEach(switchElement => {
        // Инициализация состояния (если нужно)
        if (switchElement.dataset.active === 'true') {
            switchElement.classList.add('range-focus');
            switchElement.querySelector('.range-boll').classList.add('range-boll-focus-active');
        }
        
        // Обработчик клика
        switchElement.addEventListener('click', function() {
            const rangeBoll = this.querySelector('.range-boll');
            const isActive = this.classList.contains('range-focus');
            
            // Переключаем состояние
            this.classList.toggle('range-focus');
            rangeBoll.classList.toggle('range-boll-focus-active');
            
            // Можно добавить логику для обновления цены/состояния
            updatePrice(this);
        });
    });
    
    function updatePrice(switchElement) {
        const container = switchElement.closest('.input-range-col');
        if (!container) return;
        
        const priceElement = container.querySelector('h1');
        if (!priceElement) return;
        
        const isActive = switchElement.classList.contains('range-focus');
        const baseText = priceElement.dataset.baseText || priceElement.textContent;
        
        if (isActive) {
            priceElement.textContent = baseText;
        } else {
            priceElement.textContent = priceElement.dataset.altText || baseText;
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Получаем необходимые элементы
    const minusButton = document.querySelector('.minus-push');
    const plusButton = document.querySelector('.plus-push');
    const countDisplay = document.querySelector('.count-push');

    // Изначальное значение количества
    let currentCount = parseInt(countDisplay.textContent);

    // Обработчик события для кнопки "-"
    minusButton.addEventListener('click', function () {
        if (currentCount > 1) { // Убедимся, что количество не меньше 1
            currentCount--;
            countDisplay.textContent = currentCount;
        }
    });

    // Обработчик события для кнопки "+"
    plusButton.addEventListener('click', function () {
        currentCount++;
        countDisplay.textContent = currentCount;
    });
});

$('#menuButton, #close-menu, #close-finish').click(function(e){
    e.preventDefault();
    $('#menu').toggleClass('d-n');
});


document.querySelectorAll('.checkbox-input').forEach(checkbox => {
  checkbox.addEventListener('click', function(e) {
    // Останавливаем всплытие события, чтобы клик обрабатывался только для текущего чекбокса
    e.stopPropagation();
    
    // Переключаем состояние только текущего чекбокса
    this.checked = !this.checked;
  });
});


$('.toggle-btn').click(function() {
  $('#block1, #block2').toggle();
});


$(document).ready(function() {
  $('#active-menu, .close-menu').click(function(e) {
    e.preventDefault();
    $('#bur-nenu').toggleClass('d-n');
  });
});


