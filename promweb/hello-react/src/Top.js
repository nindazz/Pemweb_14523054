import react from 'react'
const Top = ()=>{
    function handlepesan(){
        alert("Halaman Top")
    }
    return (
        <a href='/' onClick={handlepesan}> Halaman Top</a>
    );
};

export default Top;