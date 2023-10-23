var finalfontname;
var finalweight;
var tag1;
var tag2;
var tag3;

class TypeLoad{
  static Get(fontname,weight){
    if(weight==null){
      console.warn("No weight specified");
      finalfontname="https://fonts.googleapis.com/css2?family="+fontname+"&display=swap";
      return finalfontname;
    }else{
      finalfontname="https://fonts.googleapis.com/css2?family="+fontname+":wght@"+weight+"&display=swap";
      return finalfontname;
    }
  }
  static Load(data){
    tag1=document.createElement("link");
    tag1.setAttribute("rel","preconnect");
    tag1.setAttribute("href","https://fonts.googleapis.com");
    tag2=document.createElement("link");
    tag2.setAttribute("rel","preconnect");
    tag2.setAttribute("href","https://fonts.gstatic.com");
    tag2.setAttribute("crossorigin",null);
    tag3=document.createElement("link");
    tag3.setAttribute("href",data);
    tag3.setAttribute("rel","stylesheet");
    document.head.appendChild(tag1);
    document.head.appendChild(tag2);
    document.head.appendChild(tag3);
    return true;
  }
  static Version(){
    console.log("TypeLoad v1.0.0");
  }
}
