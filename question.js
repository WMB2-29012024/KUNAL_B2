class Stack {

    constructor(size) {
        this.stack = []
        this.maxSize = size
        this.stackSize = 0
    }
    peek() {
        if (this.stackSize === 0) {
            return "stack is empty"
        } else {
            const lastElem = this.stackpop()
            this.stackPush(lastElem)
            return lastElem
        }
    }

    isEmpty() {
        if (this.stackSize == 0) {
            return true
        } return false
    }

    stackPush(item) {
        if (this.stackSize >= this.maxSize) {
            return new Error("stack Overflow")
        }
        this.stack.push(item)
        this.stackSize += 1
        return this.stackSize
    }
    stackpop() {
        if (this.stackSize === 0) {
            return new Error("stack Underflow")
        }
        this.removeItem = this.stack.pop()
        this.stackSize -= 1
        return this.removeItem
    }
}


const s = "Hello, World!"
function reverseStringUsingStack(s) {
    const stack = new Stack()
    for (i = 0; i < s.length; i++) {
        stack.stackPush(s[i]);
    }
    let ans = ""
    while (!stack.isEmpty()) {
        ans += stack.stackpop()
    }
    return ans;

}
console.log(reverseStringUsingStack(s))