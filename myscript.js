function validateFunction(){
    var code = document.getElementById("txt").value;
    var regx = /<\/?[A-Z]{1}>/g;
    var regxCode = code.match(regx);
    var tagStr = regxCode.join("");
    var stk = new Array();
    for (var i = 0; i < tagStr.length; i++) {
      //alert(tagStr.charAt(i));
      if(tagStr.substr(i, 1) == "<" ){
         if(tagStr.substr(i, 2) == "</") {
            //alert('aa');
           var j = i + 2;
           var s = tagStr.substr(j, 1); 
           if (stk.length === 0) {
              // alert('Expected # found ' + tagStr.substr(i, 4));  
             alert('Expected # found ' + tagStr.substr(i, 4));
             document.getElementById("txt").value = '';
             return;
           } else if(stk[stk.length-1] != s) {
              // alert('Expected ' + 'found' + tagStr.substr(i, 4));  
             alert('Expected </' + stk[stk.length-1]+ '> found' + tagStr.substr(i, 4));
             document.getElementById("txt").value = '';
             return;
           }else{       
             stk.pop();
           }
           
         }else{
           //alert('bb');
           var j = i + 1;
           var s = tagStr.substr(j, 1);  
           stk.push(s);
         }
      }
    }
    if(stk.length !== 0){
       alert('Expected </' + stk[stk.length-1] + '> found #');
    }else{
      alert('Correctly tagged paragraph');
        
    }

    document.getElementById("txt").value = '';
  }
  
  