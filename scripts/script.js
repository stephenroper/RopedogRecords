function Person(name, age, status, constipated){
	this.name = name;
	this.age = age;
	this.status = status;
	this.constipated = constipated;
}

// var Person = 
// [
// 	{
// 		name: 'Stephen',
// 		age: 33,
// 		status: 'Cool as fuck',
// 		constipated: true
// 	},
// 	{
// 		name: 'Jess',
// 		age: 29,
// 		status: 'Watching plant videos',
// 		constipated: false
// 	}
// ]

var person = [
new Person("Stephen", 33, "Cool as fuck", false),
new Person("Jess", 29, "Watching Mrs. Doubtfire", false)
];

// var person01 = new Person("Stephen", 33, "Cool as fuck", false);
// var person02 = new Person("Jess", 29, "Watching Mrs. Doubtfire", false);

for (i = 0; i < person.length; i++){
console.log('Name: ',person[i].name)
console.log('Age: ', person[i].age,' years old.')
console.log('Status: ', person[i].status)
console.log('Constipated Status: ', person[i].constipated)
}



$('#activateBanner').mouseleave(function(event) {
	$('.nav').slideUp(1000);
	/* Act on the event */
});

$('#activateBanner').mouseover(function(event) {
	$('.nav').slideDown(1000);
	/* Act on the event */
});
