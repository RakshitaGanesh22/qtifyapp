

export 
export const NewAlbumData=async()=>{
    const {newAlbum,setNewAlbum}=useContext(MyContext);
    try{
        const data =await axios.get(`${backend_endPoint}/albums/new`);
        setNewAlbum(data.data);
    }
    catch(error){
        console.log(error);
    }
}
