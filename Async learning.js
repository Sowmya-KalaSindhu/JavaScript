let start_now=true;
async function order(){
  try{
    await abc;
  }
  catch(error)
  {
    console.log("abc doesnt exist",error);
  }
  finally()
  {
    console.log("Runs code anyway");
  }
}
order();
