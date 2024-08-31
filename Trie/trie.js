

class TrieNode{
    constructor(){
        this.children={}
        this.isEnd = false
    }
}
class trie {
    constructor(){
        this.root = new TrieNode()
    }
    insert(word){
        let currentNode = this.root
        for(let char of word){
            if(!currentNode.children[char]){
                currentNode.children[char] = new TrieNode()
            }
            currentNode=currentNode.children[char]
        }
        return currentNode.isEnd=true
    }
    search(word){
        let currentNode = this.root
        for(let char of word){
            if(!currentNode.children[char]){
                return false
            }
            currentNode=currentNode.children[char]
        }
        return currentNode.isEnd
    }
    startswith(prefix){
        let currentNode = this.root
        for(let char of prefix){
            if(!currentNode.children[char]){
                return false
            }
            currentNode=currentNode.children[char]
        }
        return true
    }

}

let tries = new trie()

tries.insert("arshad")
tries.insert('justin')
tries.insert('aswin')
console.log(tries.startswith('as'));
console.log(tries.search('arshad'));
console.log(tries.search("jus"));
