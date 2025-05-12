document.addEventListener("DOMContentLoaded", () => {
    // Translation dictionary
    const translations = {
        en: {
            home: "Animals",
            dropdownInvertebrates: "Invertebrates",
            dropdownReptiles: "Reptiles",
            dropdownMammals: "Mammals",
            dropdownAmphibians: "Amphibians",
            dropdownFish: "Fish",
            dropdownBirds: "Birds",
            dropdownInsects: "Insects",
            adopt: "Adopt",
            museum: "Museum",
            shopping: "Shopping",
            login: "Login",
            createAccount: "Create Account",
            darkModeBtn: "Dark Mode",
            lightModeBtn: "Light Mode",
            languageToggle: "العربية",
            pageTitle: "Amphibians",
            frogTitle: "Frog",
            frogDesc: "Frogs are amphibians known for their strong back legs, which help them jump. They usually live near water and start life as tadpoles, swimming with tails and breathing through gills. As they grow, they develop legs and lungs to live on land. Frogs have smooth, moist skin and are known for their croaking sounds.",
            salamanderTitle: "Salamander",
            salamanderDesc: "Salamanders are small, moist-skinned amphibians that look like a mix between a lizard and a frog. They usually live in damp places like forests or near water. Salamanders often start life in water as larvae with gills, then grow legs and lungs as they mature. Like all amphibians, they breathe through their skin and lungs.",
            lizardTitle: "Lizard",
            lizardDesc: "Lizards are reptiles with scaly skin, four legs, and long tails. They are cold-blooded and love warm, sunny places. Most lizards lay eggs and can move quickly to escape danger. Some species can even regrow their tails if they lose them. Unlike amphibians, lizards live fully on land and don't go through a water-based larval stage.",
            contact: "Contact Us"
        },
        ar: {
            home: "الحيوانات",
            dropdownInvertebrates: "اللافقاريات",
            dropdownReptiles: "الزواحف",
            dropdownMammals: "الثدييات",
            dropdownAmphibians: "البرمائيات",
            dropdownFish: "الأسماك",
            dropdownBirds: "الطيور",
            dropdownInsects: "الحشرات",
            adopt: "تبنى",
            museum: "المتحف",
            shopping: "التسوق",
            login: "تسجيل الدخول",
            createAccount: "إنشاء حساب",
            darkModeBtn: "الوضع المظلم",
            lightModeBtn: "الوضع الفاتح",
            languageToggle: "English",
            pageTitle: "البرمائيات",
            frogTitle: "الضفدع",
            frogDesc: "الضفادع هي برمائيات معروفة بأرجلها الخلفية القوية التي تساعدها على القفز. تعيش عادة بالقرب من الماء وتبدأ حياتها كشراغيف، تسبح بذيولها وتتنفس من خلال الخياشيم. مع نموها، تنمو لها أرجل ورئات لتعيش على اليابسة. تتميز الضفادع بجلدها الناعم الرطب وهي معروفة بأصوات النقيق التي تصدرها.",
            salamanderTitle: "السلمندر",
            salamanderDesc: "السلمندر هي برمائيات صغيرة ذات جلد رطب تبدو وكأنها مزيج بين السحلية والضفدع. تعيش عادة في الأماكن الرطبة مثل الغابات أو بالقرب من الماء. غالبًا ما يبدأ السلمندر حياته في الماء كيرقات ذات خياشيم، ثم تنمو له أرجل ورئتين مع نضوجه. مثل جميع البرمائيات، يتنفس من خلال جلده ورئتيه.",
            lizardTitle: "السحلية",
            lizardDesc: "السحالي هي زواحف ذات جلد حرشفي، وأربعة أرجل، وذيول طويلة. وهي من ذوات الدم البارد وتحب الأماكن الدافئة المشمسة. معظم السحالي تضع بيضًا ويمكنها التحرك بسرعة للهروب من الخطر. بعض الأنواع يمكنها حتى إعادة نمو ذيولها إذا فقدتها. على عكس البرمائيات، تعيش السحالي بالكامل على اليابسة ولا تمر بمرحلة يرقة مائية.",
            contact: "اتصل بنا"
        }
    };

    // Dark mode functionality
    const moodBtn = document.getElementById("moodChangeBtn");
    
    if (moodBtn) {
        const initialLangForModeBtn = document.documentElement.lang || "en";
        moodBtn.textContent = document.body.classList.contains("dark-mode") 
            ? translations[initialLangForModeBtn].lightModeBtn 
            : translations[initialLangForModeBtn].darkModeBtn;

        moodBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const lang = document.documentElement.lang || "en";
            moodBtn.textContent = document.body.classList.contains("dark-mode") 
                ? translations[lang].lightModeBtn 
                : translations[lang].darkModeBtn;
        });
    }

    // Language toggle functionality
    const languageToggle = document.getElementById("languageToggle");
    if (languageToggle) {
        languageToggle.addEventListener("click", () => {
            const currentLang = document.documentElement.lang || "en";
            const newLang = currentLang === "en" ? "ar" : "en";
            
            // Update HTML lang attribute and dir attribute
            document.documentElement.lang = newLang;
            document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
            
            // Update all translatable elements
            updateTexts(newLang);
            
            // Update language toggle button text
            languageToggle.textContent = translations[newLang].languageToggle;
            
            // Update dark mode button text if it exists
            if (moodBtn) {
                moodBtn.textContent = document.body.classList.contains("dark-mode") 
                    ? translations[newLang].lightModeBtn 
                    : translations[newLang].darkModeBtn;
            }
        });
    }

    function updateTexts(lang) {
        // Update all elements with data-i18n attributes
        document.querySelectorAll("[data-i18n]").forEach(element => {
            const key = element.getAttribute("data-i18n");
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update page title
        document.title = translations[lang].pageTitle;

        // Update h1 title
        const h1 = document.querySelector("h1");
        if (h1) h1.textContent = translations[lang].pageTitle;

        // Update animal sections
        const animals = document.querySelectorAll(".animal");
        if (animals.length >= 1) {
            animals[0].querySelector("h2").textContent = translations[lang].frogTitle;
            animals[0].querySelector("p").textContent = translations[lang].frogDesc;
        }
        if (animals.length >= 2) {
            animals[1].querySelector("h2").textContent = translations[lang].salamanderTitle;
            animals[1].querySelector("p").textContent = translations[lang].salamanderDesc;
        }
        if (animals.length >= 3) {
            animals[2].querySelector("h2").textContent = translations[lang].lizardTitle;
            animals[2].querySelector("p").textContent = translations[lang].lizardDesc;
        }

        // Update footer contact
        const contact = document.querySelector(".contact p");
        if (contact) contact.textContent = translations[lang].contact;
    }
});