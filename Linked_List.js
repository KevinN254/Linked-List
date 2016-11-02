//Constructor function ---Will help us use the 
//1. Create a node object 
	// Node object contains 2 attributes data and next
	// Print function 
//2. Create a linked list object
	//Has 3 attributes Head Tail and Length
	//Empty node head and Tail are null length of the nod = 0
	//If one element the head and  the tail point to one node
//3. Function add that creates a new node 
//4. Function findIndex(data)
//5. Function Removenode(index)


//To Do : Yet to link the JS page to the HTML

//Start by creating a constructor
function LinkedList(){
	this.head = null;
};

///////Was trying to use one command to add Items instend of using both prepend and append functions 
// function addItems(){
//   if(isEmpty())
//     {
//       prepend();
//     }
//   else
//     {
//       append();
//     }
// }

LinkedList.prototype.isEmpty = function() {
	
	if(this.head === null){
		console.log("Your lists is empty add some items in the input field to continue");
	}
	else{
		console.log("Your list is not empty yo have " + list.size() + " items click on the show item button to see them");
	}
	// return this.head === null
};

//This will add items at the beggining of the list
LinkedList.prototype.addItem = function(value){
	var newNode = {
		//the node as two values in it data and next which links the node to the next node
		data : value,
		next : this.head
	};

	this.head = newNode;
};

//This adds items at the end of the list
LinkedList.prototype.append = function(value){
	var newNode = {
		data : value,
		next : null
	};

	if(this.isEmpty(false)){
		this.head = newNode;

		return;
	}

	var current = this.head;

	while(current.next !== null){
		current = current.next;
	}

	current.next = newNode;
};

//This checks how many items you have in the list
LinkedList.prototype.size = function(){
	var current = this.head;
	var count = 0;

	while(current !== null){
		current = current.next;
		count++;
	}

	return count;
};

//This goes through the list and checks if the item is in the list -- Works as a search section

LinkedList.prototype.contains = function(value){
	var current = this.head;

	while(current !== null){ 
		if(current.data === value){
			// console.log("We found " + value + " at index " + current.data[i]);
      return ("You have  " + value + " items in your list " );
		}

		current = current.next;
	}
	    return ("There is no " + value + " in your list." );
};

//This checks if the item selected is in the list and deletes it
LinkedList.prototype.remove = function(value){

	if(!this.contains(value)){
		this.head = this.head.next;
		return;
	}
	var prev = null;
	var curr = this.head;

	while(curr.data !== value){
		prev = curr;
		curr = curr.next;
	}
	prev.next = curr.next;
  
};

//This checks the value of an item at a specific index
LinkedList.prototype.findIndex = function(value){
	var currentData = list[0];
  var currentIndex = 0;
	while(currentData !== null){
		for (currentIndex = 0; currentIndex < list.size(); currentIndex++) {
			  list[currentIndex];
    }
		
		if( list[currentIndex] === value){
			console.log(list[currentIndex]);
		}
    else{
      currentIndex++
    }
    
	}
};

//This displays the values in an organized manner
LinkedList.prototype.print = function(){

	var output = "[ ";
	var current = this.head;

	while(current !== null){
		output += current.data;

		if (current.next !== null) {
			output += " , ";
		}
        current = current.next;
	}
	output += " ]";

	console.log(output);
}

//Make a new empty list 
var list = new LinkedList();

//Adding items to the new list 
list.addItem("e");
list.addItem("d");
list.addItem("c");
list.addItem("b");
list.addItem("a");
list.append(7);
list.append(21)
list.print();


//Calling the functions on the new list
// console.log(list.isEmpty());
// console.log(list.contains(10));
//console.log(list.size());
// console.log(list.findIndex(2));
list.remove("d");
list.print();












