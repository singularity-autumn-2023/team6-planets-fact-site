
export const load = async () => {
    try {
       
    const response = await fetch(`http://localhost:8081/api/v1/planets/`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json', 
        },
    });
    if(!response.ok){
        console.log('ошибка не 200');
        
    }
    const data = await response.json();
    console.log(data, 'log377');
    return {
        body: {
            planets: data,
        },
    };
    } catch (error) {
        console.log(error , 'oshibka');
        
    }
    
};

