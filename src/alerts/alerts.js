export const alerts=()=>{
    const modalAlert=({title,text,icon,timer=2000})=>{
        Swal.fire({
            title,
            text,
            icon,
            timer
        });
    }
    return {
        modalAlert
    }
}