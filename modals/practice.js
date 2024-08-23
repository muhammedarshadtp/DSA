class Node{
    constructor(value){
        this.value=value
        this.next=null
    }

}
class stack{
    constructor(){
        this.top=null
    }
    push(value){
        let node =new Node(value)
        if(!this.top){
            this.top=node
        }else{
            this.top.next=node
            this.top=node
        }
    }
    middle(){
        let s=this.top
        let f=this.top
        let prev=null
        while(f && f.next){
            prev=s
            s=s.next
            f=f.next.next
        }
        if(prev){
            let remove=prev
            remove=null
        }
    }
        reverse() {
            let prev=null
            let current=this.top
            while(current){
                let temp=current.next
                current.next=prev
                prev=current
                current=temp
            }
            this.top=prev
        }
    
    display(value){
        let current = this.top
        while(current){
            console.log(current.value);
            current=current.next
        }
    }
}

const Stacklist=new stack()

Stacklist.push(67)
Stacklist.push(23)
Stacklist.push(12)
Stacklist.display()