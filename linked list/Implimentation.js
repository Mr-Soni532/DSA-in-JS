class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(element) {
        var node = new Node(element)
        // if linked list is empty update head with Node
        if (!this.head) {
            this.head = node;
        } else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    sizeofLL() {
        return this.size;
    }

    //Insert element in linked list
    insertAt(element, index) {
        // if index is greater than size, index is negative, size is 0 then 'Invalid'
        if (index > this.size || index < 0 && this.size) {
            return false;
        }
        var node = new Node(element)
        var current = this.head;
        var prev = null;
        var i = 0;
        if (index == 0) {
            node.next = current;
            this.head = node;
        } else {
            while (i < index) {
                prev = current;
                current = current.next;
                i++
            }
            // insert at the index
            prev.next = node
            // move to the inserted node
            prev = prev.next
            // add the rest of the current to the inserted node
            prev.next = current
            //increment size
            this.size++;
        }
    }

    // Delete/ Remove element in between
    removeElement(element) {
        var current = this.head;
        var prev = null;
        while (current) {
            if (current.element == element) {
                if (prev === null) {
                    this.head = current.next
                } else {
                    prev.next = current.next
                }
                this.size--;
                return true;
            }
            prev = current;
            current = current.next
        }
    }
    // check if empty
    isEmpty() {
        return this.size ? false : true;
    }

    // print the linked list 
    printList() {
        var current = this.head;
        var index = 0;
        while (current) {
            console.log('element:', current.element, 'index:', index++)
            current = current.next;
        }

    }

}

const el = new LinkedList()
console.log(el.isEmpty())
// console.log(el)
el.add(2)
// console.log(el)
el.add(5)
el.removeElement(5)
el.add(6)
el.insertAt(9, 2)
// console.log(el)
// console.log(el)
el.printList()
console.log(el.isEmpty())