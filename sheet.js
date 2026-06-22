// 1. ضع سكناتك القديمة هنا داخل هذه المصفوفة بنفس طريقتك
const oldSakans = [
    {
        id: sk-100,
        title: "سكن الأوائل",
        city: "أسيوط الجديدة",
        type: "بنات",
        price: "700",
        distance: "بجوار الجامعة",
        capacity: "3 غرف و 6 أسرة",
        availableBeds: 2,
        images: [
            "https://via.placeholder.com/300x200?text=صورة+السكن", // ضع لينك الصورة الأولى هنا
            "" // لينك الصورة الثانية
        ]
    },
    // ضيف باقي سكناتك القديمة هنا بنفس الشكل...
];

// 2. إعدادات الاتصال بجوجل شيت
const SHEET_ID = '1-prwS5d357F0Yw7iZ_CzFAR0sZs4U_99LvAXO2JDftM';
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;

// 2. دالة جلب البيانات من الشيت وتحويلها لتطابق قالب سكنكو الأساسي
async function fetchNewSakanData() {
    try {
        const response = await fetch(SHEET_URL);
        const text = await response.text();
        const json = JSON.parse(text.substring(47, text.length - 2));
        const rows = json.table.rows;

        rows.forEach(row => {
            const data = row.c;
            if (!data || !data[1]) return; 

            let imagesArray = [];
            if (data[8] && data[8].v) {
                imagesArray = data[8].v.split(',').map(url => url.trim());
            }

            let featuresArray = [];
            if (data[9] && data[9].v) {
                featuresArray = data[9].v.split(',').map(f => f.trim());
            }

            const newSakan = {
                id: data[0] ? String(data[0].v) : '',                
                title: data[1] ? data[1].v : '',                     
                city: data[2] ? data[2].v : '',                      
                type: data[3] ? data[3].v : '',                      
                price: data[4] ? String(data[4].v) : '',             
                description: data[5] ? data[5].v : '',               
                capacity: data[6] ? data[6].v : '',                  
                availableBeds: data[7] ? Number(data[7].v) : 0,      
                images: imagesArray,                                 
                features: featuresArray,                             
                video: data[10] ? String(data[10].v) : ''            
            };

            if (typeof roomsData !== 'undefined') {
                if (!roomsData.some(r => r.id === newSakan.id)) {
                    roomsData.push(newSakan);
                }
            }
        });

        if (typeof renderCards === 'function') {
            filteredRooms = [...roomsData]; 
            if (typeof currentLimit !== 'undefined' && typeof cardsPerPage !== 'undefined') {
                currentLimit = cardsPerPage; 
            }
            renderCards(); 
        }

    } catch (error) {
        console.error("حصل مشكلة في سحب البيانات من جوجل شيت:", error);
    }
}

<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", fetchNewSakanData);
=======
// تشغيل دالة سحب البيانات الجديدة
fetchNewSakanData();
>>>>>>> 3f96ff635792766c2473a28dde439f155bf945c4
