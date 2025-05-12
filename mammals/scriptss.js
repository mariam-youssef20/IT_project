document.addEventListener("DOMContentLoaded", () => {
    // Reference translations from the test.html's scripts.js
    const referenceTranslations = {
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
            changeModeBtn: "Dark Mode", // Key used in test.html for the button
            darkModeBtn: "Dark Mode", // Consistent key for button text
            lightModeBtn: "Light Mode",
            languageToggle: "العربية",
            // pageTitle: "Amphibians", // From test.html, will be overridden by index.html specific
            // ... other specific translations from test.html if needed for shared components
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
            changeModeBtn: "الوضع المظلم", // Key used in test.html for the button
            darkModeBtn: "الوضع المظلم", // Consistent key for button text
            lightModeBtn: "الوضع الفاتح",
            languageToggle: "English",
            // pageTitle: "البرمائيات", // From test.html, will be overridden by index.html specific
            // ... other specific translations from test.html if needed for shared components
            contact: "اتصل بنا"
        }
    };

    // Translations specific to index.html (Mammals page)
    const pageSpecificTranslations = {
        en: {
            pageHtmlTitle: "Mammals - Natural History", // For the <title> tag
            pageTitle: "MAMMALS", // For the main H1
            tigerTitle: "TIGER",
            tigerDesc: "The tiger (Panthera tigris) is the largest member of the cat family and a powerful carnivorous mammal. It is known for its orange fur with black stripes, strong body, and sharp teeth and claws. Tigers are solitary hunters and are mainly found in forests across Asia. As mammals, tigers give birth to live young and nurse them with milk. They are an endangered species due to habitat loss and poaching.",
            horseTitle: "HORSE",
            horseDesc: "The horse (Equus ferus caballus) is a large, strong mammal known for its speed and endurance. Horses have been domesticated for thousands of years and are used for riding, work, and sport. As mammals, they give birth to live young and feed them with milk. Horses have hooves, long legs, and usually live in herds.",
            wolfTitle: "WOLF",
            wolfDesc: "The wolf (Canis lupus) is a wild carnivorous mammal and the largest member of the dog family. Wolves live and hunt in packs, showing strong teamwork and communication. They have thick fur, sharp teeth, and are known for their howling. Like all mammals, wolves give birth to live young and nurse them with milk.",
            elephantTitle: "ELEPHANT",
            elephantDesc: "The elephant is the largest land mammal on Earth. There are two main types: African and Asian elephants. They are known for their long trunks, big ears, and tusks. Elephants are intelligent and social animals that live in groups. As mammals, they give birth to live young and feed them with milk."
        },
        ar: {
            pageHtmlTitle: "الثدييات - التاريخ الطبيعي", // For the <title> tag
            pageTitle: "الثدييات", // For the main H1
            tigerTitle: "النمر",
            tigerDesc: "النمر (بانثيرا تيغريس) هو أكبر عضو في عائلة القطط وثديي آكل للحوم قوي. يشتهر بفرائه البرتقالي مع خطوط سوداء، وجسمه القوي، وأسنانه ومخالبه الحادة. النمور هي صيادة منفردة وتوجد بشكل رئيسي في الغابات عبر آسيا. كحيوانات ثديية، تلد النمور صغارًا حية وترضعهم بالحليب. وهي من الأنواع المهددة بالانقراض بسبب فقدان الموائل والصيد الجائر.",
            horseTitle: "الحصان",
            horseDesc: "الحصان (إيكوس فيروس كابالوس) هو ثديي كبير وقوي معروف بسرعته وقدرته على التحمل. تم تدجين الخيول منذ آلاف السنين وتستخدم للركوب والعمل والرياضة. كحيوانات ثديية، تلد الخيول صغارًا حية وتطعمهم بالحليب. تتميز الخيول بحوافرها وأرجلها الطويلة وتعيش عادة في قطعان.",
            wolfTitle: "الذئب",
            wolfDesc: "الذئب (كانيس لوبوس) هو ثديي آكل للحوم بري وأكبر عضو في عائلة الكلاب. تعيش الذئاب وتصطاد في مجموعات، وتظهر تعاونًا قويًا وتواصلًا. تتميز بفرائها السميك، وأسنانها الحادة، وتشتهر بعوائها. مثل جميع الثدييات، تلد الذئاب صغارًا حية وترضعهم بالحليب.",
            elephantTitle: "الفيل",
            elephantDesc: "الفيل هو أكبر ثديي بري على الأرض. هناك نوعان رئيسيان: الفيل الأفريقي والفيل الآسيوي. يشتهر بخرطومه الطويل، وأذنيه الكبيرتين، وأنيابه. الفيلة حيوانات ذكية واجتماعية تعيش في مجموعات. كحيوانات ثديية، تلد الفيلة صغارًا حية وتطعمهم بالحليب."
        }
    };

    // Merge reference translations with page-specific translations
    // Page-specific translations will override reference ones if keys conflict
    const translations = {
        en: { ...referenceTranslations.en, ...pageSpecificTranslations.en },
        ar: { ...referenceTranslations.ar, ...pageSpecificTranslations.ar }
    };

    const moodBtn = document.getElementById("moodChangeBtn");
    const languageToggle = document.getElementById("languageToggle");

    function applyTranslations(lang) {
        document.querySelectorAll("[data-i18n]").forEach(element => {
            const key = element.getAttribute("data-i18n");
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            } else {
                // console.warn(`Translation not found for key: ${key} in language: ${lang}`);
            }
        });
        // Update page title specifically if it has a data-i18n attribute or a specific key
        const pageTitleKey = document.title.getAttribute("data-i18n") || "pageHtmlTitle"; 
        if (translations[lang] && translations[lang][pageTitleKey]) {
            document.title = translations[lang][pageTitleKey];
        }
    }

    function updateButtonStates(lang) {
        if (moodBtn) {
            moodBtn.textContent = document.body.classList.contains("dark-mode")
                ? translations[lang].lightModeBtn
                : translations[lang].darkModeBtn;
        }
        if (languageToggle) {
            languageToggle.textContent = translations[lang].languageToggle;
        }
    }

    if (moodBtn) {
        moodBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const currentLang = document.documentElement.lang || "en";
            updateButtonStates(currentLang);
            localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
        });
    }

    if (languageToggle) {
        languageToggle.addEventListener("click", () => {
            let currentLang = document.documentElement.lang || "en";
            const newLang = currentLang === "en" ? "ar" : "en";
            document.documentElement.lang = newLang;
            document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
            applyTranslations(newLang);
            updateButtonStates(newLang);
            localStorage.setItem("language", newLang);
        });
    }

    // Initial setup on page load
    const savedLang = localStorage.getItem("language") || "en";
    const savedMode = localStorage.getItem("darkMode") === "true";

    document.documentElement.lang = savedLang;
    document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";

    if (savedMode) {
        document.body.classList.add("dark-mode");
    }

    applyTranslations(savedLang);
    updateButtonStates(savedLang);
});

