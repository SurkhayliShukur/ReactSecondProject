 export const languages = (lang) => {
    switch(lang) {
        case 'eng':
            return{
                home:"Home",
                form:"Form",
                user:"User",
                employee:"Employee",
                product:"Product",
                title:"Title",
                description:"Description",
                info:"Info",
                delete:"Delete",
                products:"Products",
                details: "Details"
            };
            

            case 'aze':
            return{
                home:"Ev",
                form:"Anket",
                user:"Istifadəçi",
                employee:"İşçi",
                product:"Məhsul",
                title:"Başlıq",
                description:"Təsvir",
                info:"Məlumat",
                delete:"Silmək",
                products:"Məhsullar",
                details: "Detallar"

            };
            default:
    }
};
