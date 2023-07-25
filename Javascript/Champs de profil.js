// PLACEMENT : Sur les sujets

// [SPANISH] by Flerex
// https://flerex.dev/entradas/clases-unicas-a-los-campos-del-miniperfil

// Options, by Monomer
// Possibilité de déplacer un champs dans un autre élément

!function () {

    const settings = {
        semicolon: true, // false = retire les (:) après un nom de champs
        cleanUp: true,

        // GERER LE DEPLACEMENT DES CHAMPS DE PROFIL
        //
        // CIBLER UN CHAMP :
        // - Nom du champ en MINISCULE et SANS ACCENT (exemple : 'message' ou 'date-dinscription') 
        // - Remplacez les espaces par un tiret (exemple : 'etat-civil')
        // - Listez plusieurs champs par une virgule (exemple : 'champ', 'champ')
        //
        // LE DEPLACER :
        // La class de l'élément dans lequel les champs seront déplacés

        moveTab: ['champ', 'champ'], //-- cibler un champ
        moveToTab: '.class', //-- le déplacer

    },

        slugify = str => {
            const from = 'àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœøṕŕßśșțùúüûǘẃẍÿź·/_,:;',
                to = 'aaaaaaaaceeeeghiiiimnnnooooooprssstuuuuuwxyz------',
                reg = new RegExp(from.split('').join('|'), 'g');

            return str.trim().toLowerCase()
                .replace(/\s+/g, '-')
                .replace(reg, c => to.charAt(from.indexOf(c)))
                .replace(/&/g, '-and-')
                .replace(/[^\w\-]+/g, '')
                .replace(/\-\-+/g, '-')
                .replace(/^-+/, '')
                .replace(/-+$/, '');
        },

        hideSemicolon = (label, name) => {
            if (label.firstElementChild)
                label.lastChild.remove();
            else
                label.textContent = name;
        },

        main = _ => {

            document.querySelectorAll('.user_field').forEach(p => {
                const labelcontainer = p.querySelector('.field_label'),
                    label = labelcontainer.querySelector('.label'),
                    name = label.textContent.replace(/ *: *$/, ''),
                    slug = slugify(name);

                p.classList.add('field-' + slug);

                if (settings.move.includes(slug)) {
                    p.closest('.post_row').querySelector(settings.moveTo).appendChild(p);
                }

                if (settings.cleanUp) {
                    labelcontainer.textContent = settings.semicolon ? name + ': ' : name;
                } else if (!settings.semicolon) {
                    hideSemicolon(label, name)
                }
            });

        };

    document.addEventListener('DOMContentLoaded', main);
}();