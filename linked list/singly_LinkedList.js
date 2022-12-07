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

    insertAtHead(element) {
        // creating new node and pointed to head
        let node = new Node(element)
        if (this.head !== null)
            node.next = this.head;

        this.head = node;
        this.size++;
    }

    insertAtTail(element) {
        // creating new node and pointed to tail
        let node = new Node(element)
        if (this.head == null) {
            this.head = node;
            this.size++;
            return;
        }
        let current = this.head;
        let prev = null;
        while (current) {
            prev = current;
            current = current.next;
        }
        prev.next = node;
        this.size++;
    }

    insertAt(element, index) {
        if (index == 0) return this.insertAtHead(element)
        if (index == this.size-1) return this.insertAtTail(element)
           
        let node = new Node(element);
        let current = this.head;
        let i = 0;
        while (i < index-1) {
            current = current.next;
            i++;
        }
        node.next = current.next
        current.next = node;
        this.size++;
    }

    removeElement(element) {
        let current = this.head;
        let prev = null;
        while(current){
            if(current.element === element){
                if(prev == null){
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                return;
            }
            prev = current;
            current = current.next;
        }
        return false;
    }

    printLL() {
        if (this.head == null) return 'empty!'
        let current = this.head;
        let arr = [];
        while (current) {
            arr.push(current.element)
            current = current.next;
        }
        console.log(arr.join(" "))
    }

}
let list = new LinkedList();

//! Inset At Tail
list.insertAtTail(5)
list.insertAtTail(6)
list.insertAtTail(7) 
list.insertAtTail(8) 
list.insertAtTail(9) 
list.printLL()

//! Inset At Head
// list.insertAtHead(4)
// list.printLL()

// //! Inset At middle (element , index)
// list.insertAt(2,5)
// list.printLL()

//! Inset At Head
list.removeElement(7)
list.printLL()