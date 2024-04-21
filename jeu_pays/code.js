// Tableau des pays
        var tableauPays = [];
        tableauPays[1] = 'Azerbaïdjan';
        tableauPays[2] = 'Turkménistan';
        tableauPays[3] = 'Ouzbékistan';
        tableauPays[4] = 'Afghanistan';
        tableauPays[5] = 'Pakistan';
        tableauPays[6] = 'Tadjikistan';
        tableauPays[7] = 'Kirghizistan';

        // Fonction Valider
        function fonctionValider() {
            // Boucle sur les listes
            for (var i = 1; i <= 7; i++) {
                // Récupération de l'index et de la valeur choisie
                var indexChoisi = document.forms["listes"].elements["liste" + i].selectedIndex;
                var paysChoisi = document.forms["listes"].elements["liste" + i].options[indexChoisi].value;
                // Teste si la liste i affiche le bon pays
                if (paysChoisi == tableauPays[i]) {
                    // Changement de classe pour l'élément numéro i (OK)
                    document.getElementById("numero" + i).className = 'OK';
                } else {
                    // Changement de classe pour l'élément numéro i (NOK)
                    document.getElementById("numero" + i).className = 'NOK';
                }
            }
        }

        // Fonction Reset
        function fonctionReset() {
            // Boucle sur les listes
            for (var i = 1; i <= 7; i++) {
                // Remise à zéro des sélections
                document.forms["listes"].elements["liste" + i].selectedIndex = 0;
                // Suppression de la classe pour l'élément numéro i
                document.getElementById("numero" + i).className = '';
            }
        }
