
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
const Input=[4,5,2,25]
function nextGreater (Input){
    const stack = new Stack(Input.length)
    const ans = [...Input]
   for(let  i=Input.length-1; i>=0; i--){
      const current = Input[i];
      while(!stack.isEmpty() && current>stack.peek()){
         stack.stackpop()
      }
      ans[i]= stack.isEmpty()? -1 :stack.peek();
      stack.stackPush(current)
   }
   return ans;
}
console.log(nextGreater(Input));
   