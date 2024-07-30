export async function getLocalData(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    return res.json()
  }