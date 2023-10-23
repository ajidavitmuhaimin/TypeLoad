# TypeLoad
TypeLoad is a small and simple javascript library for load Google Fonts for your website more easily. Make web developer can apply typography more fast, simple, easy and flexible

## Let's Get Started 
#### Install 
Copy this script tag to your html file 
```
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/ajidavitmuhaimin/TypeLoad/typeload.js"></script>
```
#### Check the Library has been loaded 
```
TypeLoad.Version();
```
if it work, you can get this on your console 
```
TypeLoad v.(version number)
```
## Let's Code 
#### Example 
```
//create variable
const tl=TypeLoad.Get("Teko",600);
//load font
TypeLoad.Load(tl);
//add font to element with CSS
<style>
h1{
 font-family: "Teko",sans-serif;
}
</style>
```

#### Description 
```
TypeLoad.Get(fontname,weight):string
```

`fontname` is Google Fonts name you want to load as String type data 

`weight(optional)` is weight of fonts as Number data 

`TypeLoad.Get()` return data as string for `TypeLoad.Load()`

```
TypeLoad.Load(string):boolean
```

`string` is the return data of TypeLoad.Get() 

`TypeLoad.Load()` return `true` if the loading process is successful 

