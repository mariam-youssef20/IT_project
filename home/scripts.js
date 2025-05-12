document.addEventListener("DOMContentLoaded", () => {
    // Dark mode functionality
    const moodBtn = document.getElementById("moodChangeBtn");
    
    const translations = {
        "en": {
            // Homepage translations
            "pageHtmlTitle": "Natural History - Home",
            "home": "Animals",
            "dropdownInvertebrates": "Invertebrates",
            "dropdownReptiles": "Reptiles",
            "dropdownMammals": "Mammals",
            "dropdownAmphibians": "Amphibians",
            "dropdownFish": "Fish",
            "dropdownBirds": "Birds",
            "insects": "Insects",
            "adopt": "Adopt",
            "museum": "Museum",
            "shopping": "Shopping",
            "changeModeBtn": "Change Mode", 
            "darkModeBtn": "Dark Mode",
            "lightModeBtn": "Light Mode",
            "login": "Login",
            "createAccount": "Create Account",
            "pageTitle": "Animals",
            "animalFeatures": "Animals have different body features that help them survive in their environments.",
            "animalFeaturesDesc": "For example, camels have long eyelashes and wide feet to protect them from sand and heat, while penguins have thick feathers and fat to stay warm in icy places.",
            "animalBehavior": "Animals act differently based on where they live.",
            "animalBehaviorDesc": "Some animals, like bats, are active at night to stay cool or avoid predators, while others, like bears, hibernate during winter to save energy when food is hard to find.",
            "habitats": "They also live in different habitats depending on what they need to survive.",
            "habitatsDesc": "Monkeys live in trees where they can find fruits and swing from branches, while dolphins live in oceans and use their fins to swim and catch fish.",
            "reviewLink": "Review",
            "contactUs": "Contact us",

            // Museum page translations
            "museumPageHtmlTitle": "Natural History - Museum",
            "navHome": "Animals", // Assuming same as homepage "home"
            "navInsects": "Insects", // Assuming same as homepage "insects"
            "navAdopt": "Adopt",   // Assuming same as homepage "adopt"
            "navMuseum": "Museum",  // Assuming same as homepage "museum"
            "navShopping": "Shopping",// Assuming same as homepage "shopping"
            "navChangeMode": "Change Mode", // This will be dynamically set by moodBtn logic
            "navLogin": "Login",   // Assuming same as homepage "login"
            "navCreateAccount": "Create Account", // Assuming same as homepage "createAccount"
            "museumMainTitle": "MUSEUM",
            "museumSubtitle": "The museum shows some of Extinct animals",
            "tyrannosaurusTitle": "Tyrannosaurus",
            "tyrannosaurusDesc1": "Tyrannosaurus is a genus of large theropod dinosaur.",
            "tyrannosaurusDesc2": "The type species Tyrannosaurus rex often shortened to colloquially T-Rex, is one of the best represented theropods. It lived throughout what is now western North America, on what was then an island continent known as Laramidia.",
            "tyrannosaurusDesc3": "Tyrannosaurus had a much wider range than other tyrannosaurids. Fossils are found in a variety of geological formations dating to the latest Campanian-Maastrichtian ages of the late Cretaceous period, 72.7 to 66 million years ago, with isolated specimens possibly indicating an earlier origin in the middle Campanian. It was the last known member of the tyrannosaurids and among the last non-avian dinosaurs to exist before the Cretaceous–Paleogene extinction event.",
            "funFactTitle": "Fun Fact:",
            "funFactDesc": "Due to these animals and the past living organisms they are buried for millions of years and they turn into fossil fuel which is used as a source of energy",
            "mammothTitle": "Mammoth",
            "mammothDesc1": "Mammoth lived from the late Miocene epoch (from around 6.2 million years ago) into the Holocene until about 4,000 years ago, with mammoth species at various times inhabiting Africa, Asia, Europe, and North America.",
            "mammothDesc2": "Mammoths are distinguished from living elephants by their spirally twisted tusks and in some later species, the development of numerous adaptations to living in cold environments, including a thick layer of fur.",
            "mammothDesc3": "Mammoth lived from the late Miocene epoch (from around 6.2 million years ago) into the Holocene until about 4,000 years ago, with mammoth species at various times inhabiting Africa, Asia, Europe, and North America. Mammoths are distinguished from living elephants by their spirally twisted tusks and in some later species, the development of numerous adaptations to living in cold environments, including a thick layer of fur.",
            "footerContactUs": "Contact us" // Assuming same as homepage "contactUs"
        },
        "ar": {
            // Homepage translations
            "pageHtmlTitle": "التاريخ الطبيعي - الصفحة الرئيسية",
            "home": "الحيوانات",
            "dropdownInvertebrates": "اللافقاريات",
            "dropdownReptiles": "الزواحف",
            "dropdownMammals": "الثدييات",
            "dropdownAmphibians": "البرمائيات",
            "dropdownFish": "الأسماك",
            "dropdownBirds": "الطيور",
            "insects": "الحشرات",
            "adopt": "تبني",
            "museum": "المتحف",
            "shopping": "التسوق",
            "changeModeBtn": "تغيير الوضع",
            "darkModeBtn": "الوضع الداكن",
            "lightModeBtn": "الوضع الفاتح",
            "login": "تسجيل الدخول",
            "createAccount": "إنشاء حساب",
            "pageTitle": "الحيوانات",
            "animalFeatures": "تمتلك الحيوانات ميزات جسمانية مختلفة تساعدها على البقاء في بيئاتها.",
            "animalFeaturesDesc": "على سبيل المثال، الجمال لديها رموش طويلة وأقدام واسعة لحمايتها من الرمال والحرارة، بينما طيور البطريق لديها ريش سميك ودهون لتبقى دافئة في الأماكن الجليدية.",
            "animalBehavior": "تتصرف الحيوانات بشكل مختلف بناءً على مكان عيشها.",
            "animalBehaviorDesc": "بعض الحيوانات، مثل الخفافيش، تنشط في الليل لتظل باردة أو تتجنب الحيوانات المفترسة، بينما البعض الآخر، مثل الدببة، تدخل في السبات خلال فصل الشتاء لتوفير الطاقة عندما يكون من الصعب العثور على الطعام.",
            "habitats": "كما أنهم يعيشون في موائل مختلفة حسب احتياجاتهم للبقاء على قيد الحياة.",
            "habitatsDesc": "تعيش القرود في الأشجار حيث يمكنها العثور على الفاكهة والتأرجح من الفروع، بينما تعيش الدلافين في المحيطات وتستخدم زعانفها للسباحة وصيد الأسماك.",
            "reviewLink": "مراجعة",
            "contactUs": "اتصل بنا",

            // Museum page translations
            "museumPageHtmlTitle": "التاريخ الطبيعي - المتحف",
            "navHome": "الحيوانات",
            "navInsects": "الحشرات",
            "navAdopt": "تبني",
            "navMuseum": "المتحف",
            "navShopping": "التسوق",
            "navChangeMode": "تغيير الوضع",
            "navLogin": "تسجيل الدخول",
            "navCreateAccount": "إنشاء حساب",
            "museumMainTitle": "المتحف",
            "museumSubtitle": "يعرض المتحف بعض الحيوانات المنقرضة",
            "tyrannosaurusTitle": "التيرانوصور",
            "tyrannosaurusDesc1": "التيرانوصور هو جنس من الديناصورات الكبيرة آكلة اللحوم.",
            "tyrannosaurusDesc2": "النوع النموذجي، التيرانوصور ركس، الذي يُختصر غالبًا إلى تي-ركس، هو واحد من أفضل الثيروبودات الممثلة. عاش في جميع أنحاء ما يعرف الآن بغرب أمريكا الشمالية، على ما كان آنذاك قارة جزرية تُعرف باسم لاراميديا.",
            "tyrannosaurusDesc3": "كان للتيرانوصور نطاق أوسع بكثير من التيرانوصوريات الأخرى. تم العثور على حفريات في مجموعة متنوعة من التكوينات الجيولوجية التي يرجع تاريخها إلى أواخر العصر الكامباني-الماسترخي من أواخر العصر الطباشيري، قبل 72.7 إلى 66 مليون سنة، مع عينات معزولة ربما تشير إلى أصل سابق في منتصف العصر الكامباني. كان آخر عضو معروف من التيرانوصوريات ومن بين آخر الديناصورات غير الطيرية التي كانت موجودة قبل حدث انقراض العصر الطباشيري-الباليوجيني.",
            "funFactTitle": "حقيقة ممتعة:",
            "funFactDesc": "بسبب هذه الحيوانات والكائنات الحية السابقة، يتم دفنها لملايين السنين وتتحول إلى وقود أحفوري يستخدم كمصدر للطاقة",
            "mammothTitle": "الماموث",
            "mammothDesc1": "عاش الماموث من أواخر عصر الميوسين (منذ حوالي 6.2 مليون سنة) حتى الهولوسين قبل حوالي 4000 عام، مع أنواع الماموث التي سكنت في أوقات مختلفة أفريقيا وآسيا وأوروبا وأمريكا الشمالية.",
            "mammothDesc2": "يتميز الماموث عن الأفيال الحية بأنيابه الملتوية حلزونيًا، وفي بعض الأنواع اللاحقة، بتطور العديد من التكيفات للعيش في البيئات الباردة، بما في ذلك طبقة سميكة من الفراء.",
            "mammothDesc3": "عاش الماموث من أواخر عصر الميوسين (منذ حوالي 6.2 مليون سنة) حتى الهولوسين قبل حوالي 4000 عام، مع أنواع الماموث التي سكنت في أوقات مختلفة أفريقيا وآسيا وأوروبا وأمريكا الشمالية. يتميز الماموث عن الأفيال الحية بأنيابه الملتوية حلزونيًا، وفي بعض الأنواع اللاحقة، بتطور العديد من التكيفات للعيش في البيئات الباردة، بما في ذلك طبقة سميكة من الفراء.",
            "footerContactUs": "اتصل بنا"
        }
    };

    if (moodBtn) {
        const initialLangForModeBtn = document.documentElement.lang || "en";
        moodBtn.textContent = document.body.classList.contains("dark-mode") 
            ? (translations[initialLangForModeBtn]?.lightModeBtn || "Light Mode") 
            : (translations[initialLangForModeBtn]?.darkModeBtn || "Dark Mode");

        moodBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const lang = document.documentElement.lang || "en";
            moodBtn.textContent = document.body.classList.contains("dark-mode") 
                ? (translations[lang]?.lightModeBtn || "Light Mode") 
                : (translations[lang]?.darkModeBtn || "Dark Mode");
        });
    }

    const languageToggle = document.getElementById("languageToggle");

    function updatePageTitle(lang) {
        // Determine which page we are on to select the correct title key
        let pageTitleKey = "pageHtmlTitle"; // Default for homepage
        if (document.body.querySelector(".extinct-animals")) { // Check for a unique museum page element
            pageTitleKey = "museumPageHtmlTitle";
        }
        
        if (translations[lang] && translations[lang][pageTitleKey]) {
            document.title = translations[lang][pageTitleKey];
        }
    }

    function updateLanguage(lang) {
        const elements = document.querySelectorAll("[data-i18n]");
        elements.forEach(element => {
            const key = element.getAttribute("data-i18n");
            if (translations[lang] && translations[lang][key]) {
                const iconSpan = element.querySelector("span.icon");
                if (iconSpan && element.childNodes.length > 1 && element.lastChild.nodeType === Node.TEXT_NODE) {
                    element.lastChild.textContent = " " + translations[lang][key]; 
                } else if (element.id === "moodChangeBtn") {
                    element.textContent = document.body.classList.contains("dark-mode") 
                        ? (translations[lang]?.lightModeBtn || "Light Mode") 
                        : (translations[lang]?.darkModeBtn || "Dark Mode");
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        document.documentElement.lang = lang;
        updatePageTitle(lang);
    }

    if (languageToggle) {
        let currentInitialLang = localStorage.getItem("preferredLang") || document.documentElement.lang || "en";
        document.documentElement.lang = currentInitialLang;
        languageToggle.textContent = currentInitialLang === "ar" ? "English" : "العربية";
        updateLanguage(currentInitialLang);

        languageToggle.addEventListener("click", () => {
            const currentLang = document.documentElement.lang;
            const newLang = currentLang === "en" ? "ar" : "en";
            localStorage.setItem("preferredLang", newLang);
            updateLanguage(newLang);
            languageToggle.textContent = newLang === "ar" ? "English" : "العربية";
        });
    } else {
        let currentInitialLang = localStorage.getItem("preferredLang") || document.documentElement.lang || "en";
        document.documentElement.lang = currentInitialLang;
        updateLanguage(currentInitialLang);
    }
     const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", function() {
            const searchTerm = this.value.toLowerCase();
            const searchableItems = document.querySelectorAll(".searchable-item");
            let itemsFound = false;

            searchableItems.forEach(item => {
                const textContent = item.textContent.toLowerCase();
                const isVisible = textContent.includes(searchTerm);
                item.style.display = isVisible ? "" : "none";
                if (isVisible) itemsFound = true;
            });

            // Dynamic layout change: if no items found, you could display a message
            // Or adjust the layout of a parent container, e.g., .animals-grid
            // For now, this example just hides/shows items.
            // To meet the "dynamic layout change" requirement, more complex logic might be needed
            // depending on the specific desired visual effect.
        });
    }
});
