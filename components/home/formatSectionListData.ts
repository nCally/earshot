
export default function(data){
    let finalArray = [];
    let formattedArray = [
        {title:'A', data:[]},{title:'B', data:[]},{title:'C', data:[]},{title:'D', data:[]},
        {title:'E', data:[]},{title:'F', data:[]},{title:'G', data:[]},{title:'H', data:[]},
        {title:'I', data:[]},{title:'J', data:[]},{title:'K', data:[]},{title:'L', data:[]},
        {title:'M', data:[]},{title:'N', data:[]},{title:'O', data:[]},{title:'P', data:[]},
        {title:'Q', data:[]},{title:'R', data:[]},{title:'S', data:[]},{title:'T', data:[]},
        {title:'U', data:[]},{title:'V', data:[]},{title:'W', data:[]},{title:'X', data:[]},
        {title:'Y', data:[]},{title:'Z', data:[]},{title:'#',data:[]}
    ];
    
    if(Array.isArray(data)){
        data.map(item => {
            let title = (item.title).toString().toLowerCase();
            if(alphabets.includes(title[0])){
                formattedArray.map(items => {
                    if(items.title === title[0].toUpperCase()){
                        items.data.push(item) }
                })
    
            } else {
                formattedArray.map(items => {
                    if(items.title === "#"){
                        items.data.push(item);}
                })
            }
        })
    
        formattedArray.map(items => {
            if(items.data.length > 0){
                finalArray.push(items)}
        })
    }

    return finalArray;
}



const alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']