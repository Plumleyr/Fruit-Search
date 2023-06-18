const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple 🍎', 'Apricot', 'Avocado 🥑', 'Banana 🍌', 'Bananas 🤪', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry 🍒', 'Coconut 🥥', 'Cranberry', 'Cucumber 🥒', 'Custard apple', 'Damson', 'Date', 'Dragonfruit 🐉', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape 🍇', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon 🍋', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango 🥭', 'Mangosteen', 'Marionberry', 'Melon 🍈', 'Cantaloupe', 'Honeydew', 'Watermelon 🍉', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine 🍊', 'Papaya', 'Passionfruit', 'Peach 🍑', 'Pear 🍐', 'Persimmon', 'Plantain', 'Plum', 'Pineapple 🍍', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit ⭐', 'Strawberry 🍓', 'Tamarillo', 'Tamarind', 'Yuzu'];

// it checks if any string in the fruits array matches the string from the input field. 
// it converts both to lowercase in the function to make sure it's case sensitive
function search(str) {
	let results = [];
	results = fruits.filter((fruit)=> {
		return fruit.toLowerCase().includes(str.toLowerCase())
	})
	return results;
}

//calls the showSuggestions function for each keyup inside the input field
function searchHandler(e) {
	showSuggestions(suggestions, search(input.value));
}

// takes in two arguments the result field which is your UL and the inputVal which is the string inside the input fields html
//it then adds an LI element inside of the suggestions html for each input inside the array of the input value
function showSuggestions(results, inputVal) {
	if (input.value.length > 0) {
		let suggestionsHTML = inputVal.map((input) => `<li>${input}</li>`).join('');
		results.innerHTML = suggestionsHTML;
		suggestions.classList.add('has-suggestions');
	} else {
		results.innerHTML = '';
		suggestions.classList.remove('has-suggestions')
	}
}

// Adds the LI's innertext to the input field by clicking on the LI and then removes all HTML from the UL 
function useSuggestion(e) {
	let suggestion = e.target.innerText;
	input.value = suggestion;
	suggestions.innerHTML = '';
}

//event listeners 

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

// hover for LI even though the hover property is just better

suggestions.addEventListener('mouseover', function(e){
	if(e.target.tagName === 'LI'){
		e.target.style.backgroundColor = 'purple'
	}
})
suggestions.addEventListener('mouseout', function(e){
	if(e.target.tagName === 'LI'){
		e.target.style.backgroundColor = 'plum'
	}
})