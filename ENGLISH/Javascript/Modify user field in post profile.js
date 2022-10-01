// PLACEMENT : in the topics

// [SPANISH] by Flerex
// https://flerex.dev/entradas/clases-unicas-a-los-campos-del-miniperfil

// Options, by Monomer
// Option to move a field in a different element

!function() {

	const settings = {
                semicolon: true, // false = remove (:) after a field's name
		cleanUp: true,
          
          // option to move a field, leave blank to disable
          move: ['field', 'field'], // field's name in LOWERCASE and without special caracters (example : 'message') and cut the two words field by a dashed (example : 'faceclaim-credits')
          moveTo: '.class' // element where the fields will be moved
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
          	
          if(settings.move.includes(slug)) {
          p.closest('.post_profile').querySelector(settings.moveTo).appendChild(p);
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