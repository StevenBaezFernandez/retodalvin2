const btn_calcular = document.querySelector("#btn_calcular");
const txt_promedio = document.querySelector("#txt_promedio");
const promedio = document.querySelector("#promedio");
const clasificacion = document.querySelector("#clasificacion");
const lds = document.querySelector("#lds");

btn_calcular.addEventListener("click", ()=>{

    const nota1 = parseInt(document.querySelector("#nota1").value);
    const nota2 = parseInt(document.querySelector("#nota2").value);
    const nota3 = parseInt(document.querySelector("#nota3").value);
    const nota4 = parseInt(document.querySelector("#nota4").value);


    clasificacion.innerHTML = "";
    promedio.innerHTML = ""; 
    lds.classList.add("active");
    calc_promedio = (nota1 + nota2 + nota3 + nota4) / 4;
    
    if(calc_promedio <= 69){
        clasificacion_txt = "Tines que mejorar";
    }
    else if(calc_promedio <=79 && calc_promedio >=70){
        clasificacion_txt = "mas o menos";
        
    }else if(calc_promedio <=89 && calc_promedio >=80){
        clasificacion_txt = "Bien";
        
    }else if(calc_promedio <=94 && calc_promedio >=90){
        clasificacion_txt = "muy bien";
    }else if(calc_promedio >= 95){
        clasificacion_txt = "sobresaliente"
    }
    
    setTimeout(()=>{
        lds.classList.remove("active");
        clasificacion.innerHTML = clasificacion_txt;
        promedio.innerHTML = calc_promedio;
    },2000);
})