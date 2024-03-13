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
 const nums =18;

  function binaryconverter(nums){
    let ans="";
    const stack= new Stack(nums)
        while (nums>0) {
          const rem =nums%2
          stack.stackPush(rem)
          nums=Math.floor(nums/2)
        }
        while(!stack.isEmpty()){
            ans +=stack.stackpop()
           
        }
        return ans;
        
    };


    console.log(binaryconverter(nums));