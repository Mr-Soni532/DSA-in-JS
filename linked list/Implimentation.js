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
            /*
            prev is the previous node, jiska hme "Next" value set krna h new node se, and current yha vo value h jiski jga pe hme new node set krna h.. 

            so basically jis node ke next pe current node pda tha vo node "prev" node h, ab uss prev node ke Next value me new node set kr diya h and current node ko new node ke next me set kr diya h.
            */
            while (i < index) {
                prev = current;
                console.log('prev ', prev)
                current = current.next;
                console.log('current ', current)
                i++
            }
            // insert at the index
            prev.next = node
            // console.log('prev.next ', prev)
            
            //* move to the inserted node
            prev = prev.next
            // console.log('prev ', prev)
            //* add the rest of the current to the inserted node
            prev.next = current
            // console.log('prev.next ', prev.next)
            //*increment size
            this.size++;
            // console.log(this.head)
        }
    }

    // Delete/ Remove element in between
    removeElement(element) {
        var current = this.head;
        var prev = null;
        while (current) {
            if (current.element == element) {
                /*
                prev == null means we are removing the first element of linked list. So iss time p jo bhi current hoga uska next head bn jayega.

                so basically, current hmara vo node h jiko hme delete krna h.
                pre hmara vo node h jiske next me current pda h;
                so in case of 1st element, apne current.next ko hi head bna denge bcoz prev null hoga..
                else apne prev ke next me current ka next node set kr denge jisse current element skip ho jayega. 
                */
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
// console.log(el.isEmpty())
// console.log(el)
el.add(2)
// console.log(el)
el.add(3)
// el.removeElement(5)
el.add(4)
el.insertAt(9, 2)
// console.log(el)
// console.log(el)
// el.printList()
// console.log(el.isEmpty())