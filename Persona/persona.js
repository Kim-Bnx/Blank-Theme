(function (root, factory) {
  const pluginName = "Persona";

  if (typeof define === "function" && define.amd) {
    define([], factory(pluginName));
  } else if (typeof exports === "object") {
    module.exports = factory(pluginName);
  } else {
    root[pluginName] = factory(pluginName);
  }
})(this, function (pluginName) {
  "use strict";

  const defaults = {
    category: [0],
    name: "fiche",
    personaPageTitle: function (action) {
      return action + " sa fiche de présentation";
    },
    pageTitleElement: ["h1.page-title", ".panel h3"],
    deleteButton: "<i class='ion-android-close'></i>",
    enableCheckImage: true,
    messageImageError: "Vérifiez l'URL ou l'hébergement de votre image.",
    enableCheckTag: true,
    messageTagError: "Vérifiez votre code HTML.",
    enableErrorRestriction: true,
    textEditorContainer: ".message-edition",
    personaHTML: function () {},
    personaScript: function (persona) {},
  };

  /**
   * Fusionner les options
   * @param {Object} defaults Default settings
   * @param {Object} options User options
   */
  const extend = function (target, options) {
    var prop,
      extended = {};
    for (prop in defaults) {
      if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
        extended[prop] = defaults[prop];
      }
    }
    for (prop in options) {
      if (Object.prototype.hasOwnProperty.call(options, prop)) {
        extended[prop] = options[prop];
      }
    }
    return extended;
  };

  /**
   * L'object du plugin
   * @param {Object} options User options
   * @constructor
   */
  function Plugin(options) {
    this.options = extend(defaults, options);
    this.init();
  }

  /**
   * Les prototypes du plugin
   * @public
   * @constructor
   */
  Plugin.prototype = {
    init: function () {
      this.postElement = document.querySelector(".persona");
      this.postContent = this.postElement ? this.postElement.innerHTML : null;
      this.POST_JSON = this.jsonify(this.postContent);

      // SHOW HTML
      if (this.POST_JSON && this.POST_JSON.name == this.options.name) {
        this.showPersona();
      }

      this.CATEGORY = this.options.category;

      this.EDITOR_CONTAINER = document.querySelector(this.options.textEditorContainer);
      this.editorElement = this.EDITOR_CONTAINER ? this.EDITOR_CONTAINER.querySelector("textarea#text_editor_textarea") : null;
      this.EDITOR_VALUE = this.editorElement ? this.editorElement.value : null;

      this.FORM;

      if (this.checkCategory() && window.location.href.includes("mode=newtopic")) {
        this.FORM = document.querySelector(`[data-persona-name="${this.options.name}"]`);
      } else if (this.jsonify(this.EDITOR_VALUE)) {
        const formName = this.jsonify(this.EDITOR_VALUE).name;
        this.FORM = document.querySelector(`[data-persona-name="${formName}"]`);
      }
      this.FORM_INPUTS = this.FORM ? Array.from(this.FORM.querySelectorAll("input, select, textarea")) : null;

      // PERSONA CREATE-EDITION
      if (this.checkCategory() || (this.jsonify(this.EDITOR_VALUE) && this.jsonify(this.EDITOR_VALUE).name === this.options.name)) {
        this.displayPersonaForm();
      }
    },

    showPersona: function () {
      function decodeAllData(data) {
        if (typeof data === "string") {
          return this.decodeData(data);
        } else if (typeof data === "object" && data !== null) {
          for (const [key, value] of Object.entries(data)) {
            data[key] = decodeAllData.call(this, value);
          }
        }
        return data;
      }

      // Call the recursive function on the top-level object
      this.POST_JSON = decodeAllData.call(this, this.POST_JSON);

      this.postElement.innerHTML = this.options.personaHTML(this.POST_JSON);
      this.options.personaScript(this.postElement);

      this.postElement.classList.add("loaded");
    },

    // Encodage du post
    encodeData: function (str) {
      return str.replace(/</g, "%3C").replace(/>/g, "%3E").replace(/"/g, "%22");
    },

    decodeData: function (str) {
      return decodeURIComponent(str.replace(/\n/g, "<br />"));
    },
    encodeFA: function (str) {
      if (!str) return;
      return str.replace(/(<(?:img)\b[^>]*>)/gm, (match) => {
        return this.encodeData(match);
      });
    },

    /**
     * Check if it's the Persona's category
     * @returns boolean
     */
    checkCategory: function () {
      let currentCategory = document.querySelector('form[action="/post"] input[name="f"]')?.value;

      if (!currentCategory) return false;

      currentCategory = Number(currentCategory);

      if (isNaN(currentCategory)) {
        console.log("Invalid category: " + currentCategory);
        return false;
      }

      return this.CATEGORY.includes(currentCategory) && window.location.href.includes(`/post?f=${currentCategory}&mode=newtopic`);
    },

    /**
     * Check is the data can be parsed into a JSON object
     * @param {string} data
     * @returns data as JSON object or false
     */
    jsonify: function (data) {
      if (!data) return;
      let startMarker = '<div class="persona">';

      if (data.includes(startMarker)) {
        // Define the start and end markers
        let endMarker = "</div>";

        // Find the start and end indices
        let startIndex = data.indexOf(startMarker) + startMarker.length;
        let endIndex = data.indexOf(endMarker, startIndex);

        // Check if markers are found and extract the content
        if (startIndex !== -1 && endIndex !== -1) {
          let contentString = data.substring(startIndex, endIndex).trim();

          // Parse the JSON string
          try {
            return JSON.parse(this.encodeFA(contentString));
          } catch (error) {
            return console.log("No Persona JSON found.");
          }
        } else {
          console.log("No content found inside <div class='persona'></div>");
        }
      } else {
        try {
          return JSON.parse(this.encodeFA(data));
        } catch (error) {
          return console.log("No Persona JSON found.");
        }
      }
    },

    /**
     * Display the form where to create and edit the Persona
     */
    displayPersonaForm: function () {
      // Affiche le générateur
      this.FORM.style.display = "block";
      this.displayPersonaTools();

      this.EDITOR_CONTAINER.style.display = "none";

      // Update les informations dans l'éditeur en "direct"
      this.FORM_INPUTS.forEach((input) => {
        input.addEventListener("input", this.generateData.bind(this));
      });

      // Ajout d'anecdote au clique du bouton "ajouter"
      this.FORM.querySelectorAll("button.addField").forEach((button) => {
        button.addEventListener("click", (e) => {
          e.preventDefault();
          const target = e.target.getAttribute("name");
          this.createField("", target);
        });
      });

      // Auto height des textarea
      this.FORM.querySelectorAll("textarea").forEach((textarea) => {
        function autoTextareaHeight(e) {
          const el = e.target;
          el.style.height = el.scrollHeight + "px";
        }

        textarea.addEventListener("focus", autoTextareaHeight);
        textarea.addEventListener("input", autoTextareaHeight);
      });

      // EDITION
      if (this.EDITOR_VALUE) {
        // Transform the editor value into JSON data
        const personaData = this.jsonify(this.EDITOR_VALUE);
        // Pre-fill the form inputs with the data
        this.fillForm(this.FORM_INPUTS, personaData);

        // Go through the data and detect if there is custom fields based on the value type (Array of objects)
        for (const key in personaData) {
          if (typeof personaData[key] == "object") {
            // Display custom fields for each object and pass them as data
            personaData[key].forEach((fields) => {
              this.createField(fields, key);
            });
          }
        }
      }

      // Preview avatar
      this.FORM.querySelectorAll("[data-preview]").forEach((image) => {
        const imageName = image.getAttribute("data-preview");
        this.previewImage(image);

        this.FORM.querySelector(`input[name="${imageName}"]`).addEventListener("input", () => {
          this.previewImage(image);
        });
      });

      // Vérifie le html mis dans les inputs
      if (this.options.enableCheckTag) {
        this.FORM.addEventListener("input", (e) => {
          if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
            this.checkTags(e.target);
          }
        });
      }

      this.options.pageTitleElement.forEach((title) => {
        const el = document.querySelector(title);
        let action;

        if (el && document.querySelector('input[value="newtopic"]')) {
          action = "Poster";
        } else if (el && document.querySelector('input[value="editpost"]')) {
          action = "Editer";
        } else {
          console.log("Erreur lors de l'édition du titre de la page");
          return;
        }

        el.innerHTML = this.options.personaPageTitle(action);
      });

      this.generateData();
    },

    /**
     * Generate data as an object based on the inputs values
     */
    generateData: function () {
      // Initialize the object data
      let personaData = {
        name: this.options.name,
        ...this.getData(this.FORM_INPUTS),
      };

      // Create a new entry in the object data for each container of custom field
      this.FORM.querySelectorAll("[data-container-name]").forEach((container) => {
        const containerName = container.getAttribute("data-container-name");
        personaData[containerName] = [];

        // Get the data inside each custom field and push them into a array
        container.querySelectorAll(".duplicable-field").forEach((field) => {
          const inputs = field.querySelectorAll("input, select, textarea");
          personaData[containerName].push(this.getData(inputs));
        });
      });

      // Parse the data in string
      const personaDataString = JSON.stringify(personaData);

      // Insert data as string in the editor
      this.insertData(`<div class="persona">${personaDataString}</div>`);

      // Display the caracter limitation of the post
      const dataSize = personaDataString.length;
      const characterLimit = this.FORM.querySelector(".persona-limit-number");

      characterLimit ? (characterLimit.innerText = this.checkCharacterLimit(dataSize)) : null;
    },

    /**
     * Retrieve all the inputs' values in a object with the matching input's name
     * @param {Array} inputs
     * @returns an object containing the data
     */
    getData: function (inputs) {
      const data = {};
      if (!inputs) return data;

      inputs.forEach((input) => {
        let { name, value, type } = input;
        value = this.encodeData(value);

        // L'input doit avoir un nom (ça exclu les boutons par exemple)
        if (name) {
          if (type === "checkbox") {
            if (!data[name]) {
              data[name] = [];
            }
            if (input.checked) {
              data[name].push(value);
            }
          } else if (type === "radio") {
            if (input.checked) {
              data[name] = value;
            }
          } else {
            data[name] = value;
          }
        }
      });

      return data;
    },

    /**
     * Insert the data in the sceditor (forumactif plugin editor) instance
     * @param {*} data string
     */
    insertData: function (data) {
      if (!this.editorElement) {
        console.error("Le textarea de l'éditeur n'a pas été trouvé.");
        return;
      }

      const instance = $(this.editorElement).sceditor("instance");
      if (!instance) {
        this.editorElement.value = data;
        console.error("Instance de sceditor non trouvée.");
        return;
      }
      instance.val(data);
    },

    /**
     * Pre-fill the form inputs with the existing data for editing
     * @param {Array} inputs - array of input waiting for values
     * @param {object} data - JSON of the persona data
     */
    fillForm: function (inputs, data) {
      Object.keys(data).forEach((key) => {
        const value = decodeURIComponent(data[key]);

        // On exclu les valeurs qui sont des tableaux (comme les anecdotes)
        inputs.forEach((input) => {
          if (input.name === key) {
            if (input.type === "checkbox") {
              // For checkboxes, if the value is present in the array, check the checkbox
              input.checked = value.includes(input.value);
            } else if (input.type === "radio") {
              // For radio buttons, if the value matches, check the radio button
              input.checked = input.value === value;
            } else {
              // For other input types, set the value
              input.value = value;
            }
          }
        });
      });
    },

    /**
     * Add new custom field to the form
     * @param {String} target -
     * @param {Object} data - to fill the inputs field with existing data (optional)
     */
    createField: function (data, target) {
      const template = this.FORM.querySelector(`template[data-name="${target}"]`);
      const newField = document.importNode(template.content, true);
      const newFieldInputs = Array.from(newField.querySelectorAll("input, select, textarea"));

      const fieldContainer = document.createElement("div");
      fieldContainer.classList.add("duplicable-field");

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-field");
      deleteButton.innerHTML = this.options.deleteButton;

      fieldContainer.append(newField);
      fieldContainer.append(deleteButton);

      // Insère une valeur à l'input si besoin
      if (data && newFieldInputs) {
        this.fillForm(newFieldInputs, data);
      }
      deleteButton.addEventListener("click", this.deleteField.bind(this));
      // Auto height des textarea
      fieldContainer.querySelectorAll("textarea").forEach((textarea) => {
        function autoTextareaHeight(e) {
          const el = e.target;
          el.style.height = el.scrollHeight + "px";
        }
        textarea.addEventListener("focus", autoTextareaHeight);
        textarea.addEventListener("input", autoTextareaHeight);
      });
      newFieldInputs.forEach((input) => {
        input.addEventListener("input", this.generateData.bind(this));
      });

      // Ajoute l'input au DOM
      this.FORM.querySelector(`[data-container-name="${target}"]`).append(fieldContainer);
      this.generateData();
    },

    /**
     * Delete a custom field
     * @param {Event} e
     */
    deleteField: function (e) {
      const input = e.target.closest(".duplicable-field");
      input.remove();
      this.generateData();
    },

    previewImage: function (image) {
      const previewElement = image;
      const imageName = image.getAttribute("data-preview");
      const urlInput = this.FORM.querySelector(`input[name="${imageName}"]`);
      const urlInputValue = urlInput.value.toLowerCase();
      const errorMessage = this.options.messageImageError;

      if (urlInputValue) {
        this.checkImg(urlInputValue, (isAvatar) => {
          if (isAvatar) {
            previewElement.innerHTML = "";

            const img = new Image();
            img.src = urlInputValue;
            previewElement.appendChild(img);

            this.handleError(urlInput, errorMessage, false);
          } else {
            previewElement.innerHTML = "";
            if (this.options.enableCheckImage) {
              this.handleError(urlInput, errorMessage, true);
            }
          }
        });
      } else {
        previewElement.innerHTML = "";
        this.handleError(urlInput, errorMessage, false);
      }
    },

    // Vérifie les balises HTML
    checkTags: function (el) {
      const errorMessage = this.options.messageTagError;

      const doc = document.createElement("div");
      doc.innerHTML = el.value;

      if (doc.innerHTML === el.value) {
        this.handleError(el, errorMessage, false);
      } else {
        this.handleError(el, errorMessage, true);
      }
    },

    // Vérifie l'url valide et l'hébergement de l'image
    checkImg: function (url, callback) {
      const img = new Image();
      img.src = url;

      if (img.complete) {
        callback(true);
      } else {
        img.onload = () => {
          callback(true);
        };

        img.onerror = () => {
          callback(false);
        };
      }
    },

    // Gestion des erreurs d'input
    /**
     *
     * @param {Object} input html element
     * @param {String} errorMessage
     * @param {Boolean} showError
     */
    handleError: function (input, errorMessage, showError) {
      // Submit restriction
      if (this.options.enableErrorRestriction) {
        const previewButton = document.querySelector('input[type="submit"][name="preview"]');
        const sendButton = document.querySelector('input[type="submit"][name="post"]');

        if (showError) {
          previewButton.disabled = true;
          sendButton.disabled = true;
        } else {
          previewButton.disabled = false;
          sendButton.disabled = false;
        }
      }

      // Toggle the class based on showError
      input.classList.toggle("input-error", showError);

      // Create the alert element
      const alertElement = document.createElement("p");
      alertElement.classList.add("input-error-message");
      alertElement.innerHTML = errorMessage;

      // Check if an alert element already exists
      const existingAlert = input.nextElementSibling;
      const isAlertAlreadyPresent = existingAlert && existingAlert.classList.contains("input-error-message");

      if (showError) {
        if (!isAlertAlreadyPresent) {
          input.after(alertElement);
        }
      } else {
        if (isAlertAlreadyPresent) {
          existingAlert.remove();
        }
      }
    },

    /**
     *
     * PERSONA OPTIONS
     */
    displayPersonaTools: function () {
      const personaToolbar = document.createElement("div");
      personaToolbar.classList.add("persona-toolbar");

      this.FORM.appendChild(personaToolbar);

      if (_userdata.user_level === 1) {
        this.createOptionMenu();
        this.displayPersonaOptions();
      }

      this.displayCharacterLimitation();
    },

    displayPersonaOptions: function () {
      const optionMenu = document.querySelector(".persona-options");
      const optionMenuButton = document.querySelector(".persona-options-button");

      optionMenuButton.addEventListener("click", (e) => {
        e.preventDefault();
        optionMenu.classList.toggle("open");
      });

      document.addEventListener("click", function (event) {
        if (!optionMenu.contains(event.target) && !optionMenuButton.contains(event.target)) {
          optionMenu.classList.remove("open");
        }
      });

      this.disablePersona();
      this.hideTextEditor();
      this.displayPersonaParameters();
    },

    createOptionMenu: function () {
      const toolbar = this.FORM.querySelector(".persona-toolbar");

      function createEl(type, attributes, parent, content = "") {
        let el = document.createElement(type);
        for (let key in attributes) {
          el.setAttribute(key, attributes[key]);
        }

        el.innerHTML = content;
        parent.appendChild(el);
        return el;
      }

      const optionMenu = createEl("div", { class: "persona-options" }, toolbar);
      const optionMenuList = createEl("div", { class: "persona-options-list" }, optionMenu);
      const optionMenuButton = createEl("button", { class: "persona-options-button" }, optionMenu, '<i class="ion-gear-a"></i>');

      const hideEditorInput = createEl("input", { type: "checkbox", name: "hideEditor", id: "hideEditor" }, optionMenuList);
      hideEditorInput.checked = true;
      const hideEditorLabel = createEl("label", { for: "hideEditor" }, optionMenuList, " Masquer l'éditeur de texte");

      hideEditorLabel.after(document.createElement("br"));

      const disablePersonaInput = createEl("input", { type: "checkbox", name: "disablePersona", id: "disablePersona" }, optionMenuList);
      const disablePersonaLabel = createEl("label", { for: "disablePersona" }, optionMenuList, " Désactiver le Persona sur ce sujet");

      disablePersonaLabel.after(document.createElement("br"));

      const showParametersInput = createEl("input", { type: "checkbox", name: "showParameters", id: "showParameters" }, optionMenuList);
      const showParametersLabel = createEl("label", { for: "showParameters" }, optionMenuList, " Afficher les données du formulaire");
    },

    /**
     * Disable the persoona on the subject when option is clicked
     */
    disablePersona: function () {
      const optionMenu = document.querySelector(".persona-options");
      const disableButton = optionMenu.querySelector('input[name="disablePersona"]');

      disableButton.addEventListener("change", () => {
        if (disableButton.checked) {
          // Clear editor and remove the form
          this.insertData("");
          this.FORM.style.display = "none";
          this.FORM.querySelector(".persona-toolbar").remove();
          document.querySelector(".persona-code-parameters")?.remove();

          // Replace text editor
          this.EDITOR_CONTAINER.style.display = "";

          // Remove options button
          optionMenu.remove();

          optionMenu.classList.toggle("open");
        }
      });
    },

    hideTextEditor: function () {
      const optionMenu = document.querySelector(".persona-options");
      const disableTextEditorButton = optionMenu.querySelector('input[name="hideEditor"]');

      disableTextEditorButton.addEventListener("change", () => {
        if (disableTextEditorButton.checked) {
          this.EDITOR_CONTAINER.style.display = "none";
        } else {
          this.EDITOR_CONTAINER.style.display = "";
          this.EDITOR_CONTAINER.style.paddingTop = "10px";
        }
        optionMenu.classList.toggle("open");
      });
    },

    displayPersonaParameters: function () {
      const pre = document.createElement("pre");
      const code = document.createElement("code");
      pre.classList.add("persona-code-parameters");

      this.FORM.after(pre);
      pre.appendChild(code);
      code.innerText = this.extractField();

      code.prepend(this.copyContent(code));

      const optionMenu = document.querySelector(".persona-options");
      const showParametersButton = optionMenu.querySelector('input[name="showParameters"]');

      showParametersButton.addEventListener("change", () => {
        if (showParametersButton.checked) {
          pre.classList.add("open");
        } else {
          pre.classList.remove("open");
        }
      });
    },

    extractField: function () {
      const uniqueNames = new Set();
      const classicFieldHandler = this.FORM_INPUTS.filter((input) => input.hasAttribute("name"))
        .filter((input) => {
          const name = input.getAttribute("name");
          if (input.type === "radio") {
            if (uniqueNames.has(name)) {
              return false;
            } else {
              uniqueNames.add(name);
              return true;
            }
          } else {
            return true;
          }
        })
        .map((input) => input.getAttribute("name"))
        .join(", \n  ");

      const allTemplates = this.FORM.querySelectorAll(`template[data-name]`);
      const customFieldHandler = () => {
        return Array.from(allTemplates).map((template) => {
          const customField = document.importNode(template.content, true);
          const customFieldName = template.getAttribute("data-name");

          const uniqueCustomNames = new Set();
          const customFieldInput = Array.from(customField.querySelectorAll("input, textarea, select"))
            .filter((input) => input.hasAttribute("name"))
            .filter((input) => {
              const name = input.getAttribute("name");
              if (input.type === "radio") {
                if (uniqueCustomNames.has(name)) {
                  return false;
                } else {
                  uniqueCustomNames.add(name);
                  return true;
                }
              } else {
                return true;
              }
            })
            .map((input) => input.getAttribute("name"))
            .join(",\n  ");

          return (
            `// Liste de tout.es les ${customFieldName}s\n` +
            `const ${customFieldName}List = data.${customFieldName}.map(({\n` +
            `  // Liste des noms des champs d'une anecdote\n` +
            `  ${customFieldInput}\n  //\n` +
            "}) => ` \n" +
            `<!-- Mise en page d'un.e ${customFieldName} -->\n\nHTML ICI\n\n<!-- -->` +
            "\n`).join('');\n//"
          );
        });
      };

      return `const {\n` + `  // Liste des noms des champs\n` + `  ${classicFieldHandler}` + `\n  //\n} = data;\n\n\n` + `${customFieldHandler()}`;
    },

    /**
     * Create a button to copy the content
     * @param {node} content
     * @returns
     */
    copyContent: function (content) {
      let shadowEl = document.createElement("div");
      shadowEl.innerHTML = content.innerHTML.replace(/<br\s*\/?>/gi, "\n").replace(/&nbsp;/g, " ");

      // Get the text content with newline characters
      let textContent = shadowEl.innerText;

      const button = document.createElement("button");
      button.classList.add("copy-button");

      const copy = "Copier";
      const copied = '<i class="bi bi-check2"></i> Copié';

      button.innerHTML = copy;

      button.addEventListener("click", (e) => {
        console.log(textContent);
        e.preventDefault();
        navigator.clipboard
          .writeText(textContent)
          .then(() => {
            button.innerHTML = copied;
            setTimeout(() => {
              button.innerHTML = copy;
            }, 2500);
          })
          .catch((err) => {
            console.error("Failed to copy content: ", err);
            button.innerText = "Erreur...";
          });
      });

      return button;
    },

    /**
     *
     * CHARACTER LIMIT
     */
    displayCharacterLimitation: function () {
      const personaLimit = document.createElement("div");
      personaLimit.classList.add("persona-limit");
      personaLimit.innerText = " caractères restants";
      this.FORM.querySelector(".persona-toolbar").appendChild(personaLimit);

      const personaLimitNumber = document.createElement("span");
      personaLimitNumber.classList.add("persona-limit-number");
      personaLimit.prepend(personaLimitNumber);
    },

    /**
     * Check character limitation of the post
     * @param {Number} number - current character number
     * @returns character left limit
     */
    checkCharacterLimit: function (number) {
      const characLimit = 60000;
      return characLimit - number;
    },
  };

  return Plugin;
});
