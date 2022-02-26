var languages = {
    en: {
        main_title: "Which help do you need?",
        emergency: "Emergency",
        non_Emergency: "non Emergency",
        emergeny_title: "What kind of emergency do you have?",
        non_emergeny_title: "What kind of help do you need?",
        medical: "Medical",
        fire: "Fire",
        food_and_water: "Food and Water",
        shelter: "Shelter",
        mental_health: "Mental health",
        doctor: "Physical health"
    },

    de: {
        main_title: "Welche Hilfe benötigen sie?",
        emergency: "Notfall",
        non_Emergency: "kein Notfall",
        emergeny_title: "Welchen Notfall haben sie?",
        non_emergeny_title: "Welche Hilfe benötigen sie?",
        medical: "Medizinisch",
        fire: "Feuer",
        food_and_water: "Essen und Wasser",
        shelter: "Unterkunft",
        mental_health: "Psychologische Gesundheit",
        doctor: "Physische Gesundheit"
    }
}

function get_selected_language() {
    return document.getElementById("langselector").value
}

function loadlang() {
    lang = languages[get_selected_language()];
    //console.log(lang)
    for (var element in lang) {
        try {
            document.getElementById(element).innerHTML = lang[element];
        } catch (error) {
            //console.error(error);
            //console.error("error ocurred for element: " + element);
        }
    };
}

loadlang()