class Service{

    login(detail){
        console.log(detail);
        let promise=fetch("http://localhost:4080/login",
        {
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(detail)
        });
        
        return promise;
    }
}

export default Service;