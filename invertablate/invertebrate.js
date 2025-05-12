const moodBtn = document.getElementById('moodChangeBtn');

moodBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
// بيانات الحيوانات للبحث
const animalsData = [
  { name: "African spurred tortoise", page: "turtle.html", keywords: ["tortoise", "sulcata"] },
  { name: "Green iguana", page: "iguana.html", keywords: ["iguana"] },
  { name: "Nile crocodile", page: "crocodile.html", keywords: ["crocodile"] },
  { name: "Corn snake", page: "snake.html", keywords: ["corn", "snake"] },
  { name: "Komodo dragon", page: "komodo.html", keywords: ["komodo", "dragon"] },
  { name: "Gila monster", page: "gila.html", keywords: ["gila", "monster"] }
];

// عناصر البحث
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchSuggestions = document.getElementById('searchSuggestions');

// عرض الاقتراحات أثناء الكتابة
searchInput.addEventListener('input', function() {
  const input = this.value.toLowerCase();
  searchSuggestions.innerHTML = '';
  
  if (input.length < 2) {
    searchSuggestions.style.display = 'none';
    return;
  }
  
  const matches = animalsData.filter(animal => 
    animal.name.toLowerCase().includes(input) || 
    animal.keywords.some(keyword => keyword.includes(input))
  );
  
  if (matches.length > 0) {
    matches.forEach(animal => {
      const div = document.createElement('div');
      div.textContent = animal.name;
      div.addEventListener('click', () => {
        searchInput.value = animal.name;
        searchSuggestions.style.display = 'none';
        // يمكنك هنا توجيه المستخدم للصفحة مباشرة إذا أردت
      });
      searchSuggestions.appendChild(div);
    });
    searchSuggestions.style.display = 'block';
  } else {
    searchSuggestions.style.display = 'none';
  }
});

// البحث عند الضغط على زر البحث
searchBtn.addEventListener('click', function() {
  performSearch();
});

// البحث عند الضغط على Enter
searchInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    performSearch();
  }
});

// إخفاء الاقتراحات عند النقر خارجها
document.addEventListener('click', function(e) {
  if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
    searchSuggestions.style.display = 'none';
  }
});

// تنفيذ البحث
function performSearch() {
  const input = searchInput.value.toLowerCase();
  const foundAnimal = animalsData.find(animal => 
    animal.name.toLowerCase().includes(input) || 
    animal.keywords.some(keyword => keyword.includes(input))
  );
  
  if (foundAnimal) {
    // هنا يمكنك توجيه المستخدم للصفحة المطلوبة
    window.location.href = foundAnimal.page;
    // أو عرض البطاقة المطلوبة إذا كانت كلها في صفحة واحدة
    // document.querySelector(`.${foundAnimal.keywords[0]}`).scrollIntoView();
  } else {
    alert('Animal not found!');
  }
}