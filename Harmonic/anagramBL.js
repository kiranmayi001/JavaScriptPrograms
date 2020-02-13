
module.exports={
    checkAnagram:(String1,String2)=> {
        if(String1.length!=String2.length){
            return false;
        }
             else
             //var Str1 = String1.split('').sort().join('');
            //var Str2 = String2.split('').sort().join('');
            if(String1.split('').sort().join('')===String1.split('').sort().join('')){
                return true;
            } 
                else{
                    return false;
                }
            }
             }