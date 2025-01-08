let flag = true;

function myfun(){
  return new Promise((resolve, reject)=>{
      console.log("Here inside the myfun function ")
      resolve();
  }).then((res)=>{
    console.log("Promise is resolved here");
    
  }).catch((err)=>{
    console.log("error occured");

  }).finally(()=>{
    console.log("inside finally block ");
  })
}

const promise = myfun();
if(flag == true){
  console.log(promise);
}