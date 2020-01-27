import { END_POINT } from "../containers/App/constants"

const DataServices =async()=>{
   const res = await fetch(END_POINT);
   const data= await res.json();
   return data;
}
export {DataServices} 