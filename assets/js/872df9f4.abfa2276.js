"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1422],{1407:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>y,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var n=a(373),r=(a(5227),a(6593)),l=a(6663),i=a(7026);a(4198);const o={id:"array",title:"Array Node",sidebar_label:"Array"},p=void 0,d={unversionedId:"node-reference/array",id:"node-reference/array",title:"Array Node",description:"Overview",source:"@site/docs/node-reference/array.mdx",sourceDirName:"node-reference",slug:"/node-reference/array",permalink:"/node-reference/array",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/node-reference/array.mdx",tags:[],version:"current",frontMatter:{id:"array",title:"Array Node",sidebar_label:"Array"},sidebar:"nodeReference",previous:{title:"Extract Object Path",permalink:"/node-reference/extract-object-path"},next:{title:"Pop",permalink:"/node-reference/pop"}},u={},s=[{value:"Overview",id:"overview",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Editor Settings",id:"editor-settings",level:2},{value:"Example 1: Creating an Array from Multiple Inputs",id:"example-1-creating-an-array-from-multiple-inputs",level:3},{value:"Example 2: Creating an Array from Array Inputs",id:"example-2-creating-an-array-from-array-inputs",level:3},{value:"Example 3: Creating an Array without Flattening",id:"example-3-creating-an-array-without-flattening",level:3},{value:"Example 4: Using the Indices Output",id:"example-4-using-the-indices-output",level:3},{value:"Flattening Arrays",id:"flattening-arrays",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"See Also",id:"see-also",level:2}],h={toc:s},m="wrapper";function y(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Array Node is used to construct an array from one or more inputs of any type. It can also be used to merge multiple arrays into a single array using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flatten")," setting."),(0,r.kt)("p",null,"By default, inputs will be flattened, so if any of the inputs are arrays themselves, they will be merged into the output array. This behavior can be disabled by unchecking the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flatten")," setting."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Array Node Screenshot",src:a(4586).Z,width:"776",height:"894"})),(0,r.kt)(l.Z,{defaultValue:"inputs",values:[{label:"Inputs",value:"inputs"},{label:"Outputs",value:"outputs"},{label:"Editor Settings",value:"settings"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"inputs",mdxType:"TabItem"},(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Input ","[i]"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},"The ith input to be added to the array"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Dynamic number of inputs based on how many connections there are"))))),(0,r.kt)(i.Z,{value:"outputs",mdxType:"TabItem"},(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Output"),(0,r.kt)("td",{parentName:"tr",align:null},"any[]"),(0,r.kt)("td",{parentName:"tr",align:null},"The array created from the inputs"),(0,r.kt)("td",{parentName:"tr",align:null},"The output will be a single array containing all valid inputs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Indices"),(0,r.kt)("td",{parentName:"tr",align:null},"number[]"),(0,r.kt)("td",{parentName:"tr",align:null},"The indices of the elements in the array"),(0,r.kt)("td",{parentName:"tr",align:null},"The output will be an array of numbers representing the array indices"))))),(0,r.kt)(i.Z,{value:"settings",mdxType:"TabItem"},(0,r.kt)("h2",{id:"editor-settings"},"Editor Settings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Use Input Toggle"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Flatten"),(0,r.kt)("td",{parentName:"tr",align:null},"If enabled, array inputs will be flattened before joining"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))))),(0,r.kt)("h3",{id:"example-1-creating-an-array-from-multiple-inputs"},"Example 1: Creating an Array from Multiple Inputs"),(0,r.kt)("p",null,"Let's say you have three Text nodes: one with the value ",(0,r.kt)("inlineCode",{parentName:"p"},'"Hello"'),", another with the value ",(0,r.kt)("inlineCode",{parentName:"p"},'"World"'),", and the last one with the value ",(0,r.kt)("inlineCode",{parentName:"p"},'"!"'),". If you want to create an array from these three strings, you can do the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add an Array Node to your graph."),(0,r.kt)("li",{parentName:"ol"},"Connect the output of the first Text node to ",(0,r.kt)("inlineCode",{parentName:"li"},"Input 1")," of the Array Node."),(0,r.kt)("li",{parentName:"ol"},"Connect the output of the second Text node to ",(0,r.kt)("inlineCode",{parentName:"li"},"Input 2")," of the Array Node."),(0,r.kt)("li",{parentName:"ol"},"Connect the output of the third Text node to ",(0,r.kt)("inlineCode",{parentName:"li"},"Input 3")," of the Array Node.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," of the Array Node will now be ",(0,r.kt)("inlineCode",{parentName:"p"},'["Hello", "World", "!"]'),"."),(0,r.kt)("h3",{id:"example-2-creating-an-array-from-array-inputs"},"Example 2: Creating an Array from Array Inputs"),(0,r.kt)("p",null,"Imagine you have two Array nodes: one with the value ",(0,r.kt)("inlineCode",{parentName:"p"},'["One", "Two"]')," and the other with the value ",(0,r.kt)("inlineCode",{parentName:"p"},'["Three", "Four"]'),". If you want to create a new array from these two arrays, you can do the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add an Array Node to your graph."),(0,r.kt)("li",{parentName:"ol"},"Connect the output of the first Array node to ",(0,r.kt)("inlineCode",{parentName:"li"},"Input 1")," of the Array Node."),(0,r.kt)("li",{parentName:"ol"},"Connect the output of the second Array node to ",(0,r.kt)("inlineCode",{parentName:"li"},"Input 2")," of the Array Node."),(0,r.kt)("li",{parentName:"ol"},"Enable the ",(0,r.kt)("inlineCode",{parentName:"li"},"Flatten")," setting.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," of the Array Node will now be ",(0,r.kt)("inlineCode",{parentName:"p"},'["One", "Two", "Three", "Four"]'),"."),(0,r.kt)("h3",{id:"example-3-creating-an-array-without-flattening"},"Example 3: Creating an Array without Flattening"),(0,r.kt)("p",null,"If you want to create an array from arrays without flattening them, you can do the same steps as in Example 2, but leave the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flatten")," setting disabled. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," of the Array Node will then be ",(0,r.kt)("inlineCode",{parentName:"p"},'[["One", "Two"], ["Three", "Four"]]'),"."),(0,r.kt)("h3",{id:"example-4-using-the-indices-output"},"Example 4: Using the Indices Output"),(0,r.kt)("p",null,"Let's say you have an Array Node with the value ",(0,r.kt)("inlineCode",{parentName:"p"},'["Apple", "Banana", "Cherry"]'),". If you want to create a new array where each element is a string that includes the index and the corresponding fruit name from the original array, you can do the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add a Text Node to your graph with the text ",(0,r.kt)("inlineCode",{parentName:"li"},'"[{{index}}] - {{fruit}}"'),"."),(0,r.kt)("li",{parentName:"ol"},"Connect the ",(0,r.kt)("inlineCode",{parentName:"li"},"Output")," of the Array Node to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Fruit")," input of the Text Node."),(0,r.kt)("li",{parentName:"ol"},"Connect the ",(0,r.kt)("inlineCode",{parentName:"li"},"Indices")," output of the Array Node to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Index")," input of the Text Node."),(0,r.kt)("li",{parentName:"ol"},"Enable the ",(0,r.kt)("inlineCode",{parentName:"li"},"Split")," setting on the Text Node.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," of the Text Node will now be ",(0,r.kt)("inlineCode",{parentName:"p"},'["[0] - Apple", "[1] - Banana", "[2] - Cherry"]'),"."),(0,r.kt)("p",null,"In this example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Indices")," output of the Array Node gives us an array of indices that corresponds to the elements of the original array. We then use these indices along with the original array elements to create a new array of formatted strings. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Split")," setting ensures that the Text Node generates a separate output for each element of the input arrays."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Array Node Example 4",src:a(8061).Z,width:"1420",height:"954"})),(0,r.kt)("h2",{id:"flattening-arrays"},"Flattening Arrays"),(0,r.kt)("p",null,"The Array Node has a ",(0,r.kt)("inlineCode",{parentName:"p"},"Flatten")," setting. When enabled, this setting treats each element of an array input as a separate element to be added to the main array. This is particularly useful when you're dealing with array inputs and want to merge all elements of these arrays into a single array."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Note that with flatten disabled you can get arrays of arrays. These are not well supported in Rivet and you may have to use a ",(0,r.kt)("a",{parentName:"p",href:"./code"},"Code Node")," to work with them.")),(0,r.kt)("h2",{id:"error-handling"},"Error Handling"),(0,r.kt)("p",null,"If an input is missing or null, the Array Node will simply ignore it during the array creation process. This can be useful when dealing with optional inputs that may not always be present."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: What happens if I connect a non-array node to the Array Node?")),(0,r.kt)("p",null,"A: The Array Node is designed to work with any type of inputs. If a non-array input is connected, the node will treat it as a single element to be added to the array."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: Can I connect an Array Node to another Array Node?")),(0,r.kt)("p",null,"A: Yes, you can connect an Array Node to another Array Node. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flatten")," setting is enabled, each element of the input array will be treated as a separate element to be added to the main array. If ",(0,r.kt)("inlineCode",{parentName:"p"},"Flatten")," is disabled, the input array will be added as a single element to the main array."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: What happens if an input is missing or null?")),(0,r.kt)("p",null,"A: If an input is missing or null, the Array Node will simply ignore it during the array creation process. This can be useful when dealing with optional inputs that may not always be present."),(0,r.kt)("h2",{id:"see-also"},"See Also"))}y.isMDXComponent=!0},8061:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/array-node-example-04-95a5d9a94e944282c085234416f5ae1a.png"},4586:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/array-node-99e6a62f120414de323471c7f92b56af.png"}}]);